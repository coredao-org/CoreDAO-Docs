---
sidebar_label: Conception
hide_table_of_contents: false
sidebar_position: 2
---

# Conception du Staking Non-Custodial de Bitcoin

---

## Contexte

La méthodologie pour intégrer le staking de Bitcoin repose sur le [verrouillage temporel CLTV](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). Le `OP_CHECKLOCKTIMEVERIFY` (CLTV) est un opcode spécifique utilisé dans le langage de script de Bitcoin, permettant de créer des conditions basées sur le temps ou la hauteur de bloc avant que les bitcoins puissent être dépensés à partir d'une sortie de transaction. Cela permet de créer des sorties verrouillées dans le temps, ce qui signifie qu'elles ne peuvent pas être dépensées avant qu'une certaine condition liée au temps ou à la hauteur de bloc ne soit remplie.

![btc-staking-tx-design](../../../../../../../static/img/btc-staking/tx-design/staking-tx-design%20(5).png)

### Exigences pour la Validité des Transactions {#requirements-for-transaction-validity}

- Pour qu'une transaction Bitcoin soit considérée comme valide et prise en compte par les Relayeurs, les utilisateurs doivent s'assurer que la transaction est envoyée à leur propre adresse et, en utilisant la fonctionnalité native de timelock de Bitcoin, spécifier le montant à verrouiller destiné à être délégué au validateur sur la blockchain Core, en tant que sortie de la transaction.
- La transaction doit également contenir une sortie `op_return` spécifiant
  - L'adresse du Validateur Core auquel le staker souhaite déléguer son Bitcoin.
  - L'adresse à laquelle le staker souhaite que ses récompenses en tokens CORE soient envoyées.
- Pour que le staking soit éligible sur Core, des _exigences minimales existent_ pour le **montant** de BTC pouvant être staké. Les utilisateurs doivent staker au moins **0,01 Bitcoin** (moins les frais de transaction).

### Déroulement des transactions

Les opérations de Staking de Bitcoin Non-Custodial sont effectuées sur deux blockchains distinctes : Bitcoin et Core. Le schéma suivant illustre le flux de travail pour que les détenteurs de Bitcoin puissent gagner des récompenses de staking grâce au Staking de Bitcoin Non-Custodial de Core.

<p align="center">
![btc-staking-flow](../../../../../../../static/img/btc-staking/NCBS%20Workflow.png)
</p>

## Structure des transactions

### Transaction de Staking

Une transaction de staking Bitcoin doit comporter deux ou trois sorties, qui sont

- Sortie de type `P2SH/P2WSH`, avec un script de rachat activé par un verrouillage temporel
- Sortie de type `OP_RETURN` avec les informations de staking de Core
- (_Optional_) Adresse de changement

Notez qu'il n'y a **aucune** restriction sur les entrées.

<p align="center">
![btc-staking-tx-output](../../../../../../../static/img/btc-staking/tx-design/staking-tx-design%20(1).png)
</p>

### Transaction de retrait

Les UTXO (Bitcoins) verrouillés peuvent être dépensés en utilisant le script de rachat lorsque le verrouillage temporel prend fin.

<p align="center">
![btc-staking-withdrawal-tx](../../../../../../../static/img/btc-staking/tx-design/staking-tx-design%20(2).png)
</p>

## Design du script

### Sortie P2SH/P2WSH

- Core prend en charge à la fois les sorties `P2SH` et `P2WSH` pour le staking Bitcoin.

- La construction de la sortie du type `P2SH` est la suivante

  - `OP_HASH160 <RIPEMD160(SHA256(RedeemScript))> OP_EQUAL`

- La construction de la sortie de type `P2WSH` est la suivante

  - `OP_0 <SHA256(RedeemScript)>`

### Script de Rachat

Le `RedeemScript` doit commencer par un verrouillage temporel CLTV. Voici quelques types courants.

- Lors de l'utilisation d'une clé publique `<CLTV timelock> OP_CLTV OP_DROP <pubKey> OP_CHECKSIG`
  et le script de déverrouillage correspondant dans la transaction de retrait est `<sig> <RedeemScript>`

- Lors de l'utilisation d'un hachage de clé publique (le plus recommandé) `<CLTV timelock> OP_CLTV OP_DROP OP_DUP OP_HASH160 <pubKey Hash> OP_EQUALVERIFY OP_CHECKSIG` et le script de déverrouillage correspondant dans la transaction de retrait est `<sig> <pubKey> <RedeemScript>`

- Lors de l'utilisation d'une adresse multi-signature `<CLTV timelock> OP_CLTV OP_DROP M <pubKey1> <pubKey2> ... <pubKeyN> N OP_CHECKMULTISIG` et le script de déverrouillage correspondant est `OP_0 <sig1> ... <sigM> <RedeemScript>` Le montant et la durée du Bitcoin verrouillé dans cette sortie seront utilisés pour le calcul de l'élection des validateurs et la distribution des récompenses sur Core.

:::note
Des exigences minimales s’appliquent au montant de BTC pouvant être staké pour être éligible au staking BTC non-custodial sur Core. Un utilisateur doit staker au moins **0,01 Bitcoin** (hors frais de transaction).
:::

## Sortie OP_RETURN

La sortie `OP_RETURN` doit contenir toutes les informations de staking dans l'ordre et être composée dans le format suivant:

- **`OP_RETURN`:** identifiant `0x6a`
- **`LENGTH`:** représente la longueur totale en octet après l'opcode `OP_RETURN`. Notez que toutes les données doivent être insérées avec la taille d'octet(s) approprié(s).
- **`Satoshi Plus Identifier`:** (**SAT+**) 4 octets
- **`Version`:** (**0x01**) 1 octet
- **`Chain ID`:** (1115 pour le Testnet Core et 1116 pour le Mainnet Core) 2 octets
- **`Delegator`:** L'adresse Core pour recevoir les récompenses, 20 octets
- **`Validator`:** L'adresse du validateur Core pour le staking, 20 octets
- **`Fee`:** Frais pour le relayeur, 1 octet, allant de [0, 255], mesuré en CORE
- **`RedeemScript` :** utilisé pour racheter les BTC stakés après expiration du timelock.
- (_Facultatif_) **`Timelock`:** 4 octets

> **Remarque :** Le RedeemScript doit être inclus. De plus, si le Timelock est inclus, le format Little Endian est requis en premier.

#### Points Clés

- Tout octet pouvant être traduit en nombre doit utiliser`OP_number` (`{0}` doit utiliser `OP_0` au lieu de `0x0100`, `{16}` doit utiliser `OP_16` au lieu de `0x0110`)
- Tout octet avec une longueur inférieure à `0x4c (76)` est inséré avec 1 octet égal à la taille `(byte[10] -> 10 + byte[10]; byte[70] -> 70 + byte[70])`
- Les octets plus grands ou égaux à `0x4c` sont insérés en utilisant `0x4c` (ie. `OP_PUSHDATA`) suivie de la longueur puis des données `(byte[80] -> OP_PUSHDATA + 80 + byte[80])`
- Les octets de longueur supérieure à `255` utilisent `0x4d` (`OP_PUSHDATA2`)
- Les octets de longueur supérieure à `65535` (`0xffff`) utilisent `0x4e` (`OP_PUSHDATA4`)

Soit le RedeemScript doit être disponible soit le Timelock doit l'être. Cela permet aux relayeurs d'obtenir le `RedeemScript` et de soumettre les transactions sur Core. Si un `RedeemScript` est fourni, le relayeur l'utilisera directement. Sinon, le relayeur construira le script de rachat basé sur le timelock et les informations dans les entrées de la transaction. Vous trouverez plus d'informations sur le rôle du relayeur dans la section ci-dessous.

## Rôle des Relayeurs

Dans un sens strict, le processus de staking de Bitcoin Non-Custodial se compose de deux étapes

1. Staking sur le réseau Bitcoin
2. Soumission de la transaction de staking Bitcoin confirmée à Core

Pour rendre le processus plus pratique, Core introduit le rôle des relayeurs. Les relayeurs peuvent aider les utilisateurs à soumettre des transactions au réseau Core après la confirmation de la transaction de staking sur le réseau Bitcoin. Étant donné qu'il est nécessaire de vérifier la transaction sur le réseau Core avec le client léger Bitcoin intégré, les relayeurs doivent obtenir le RedeemScript correspondant de la sortie `P2SH/P2WSH`. Pour répondre à cette exigence, il est conseillé aux utilisateurs de

- Si le `RedeemScript` est court, le placer à la fin de la sortie `OP_RETURN`. Par exemple, un `RedeemScript` est construit en utilisant un hachage de clé publique, comme montré dans l'exemple ci-dessous.
- Utiliser leur propre adresse de réception pour la transaction de staking, afin que les relayeurs puissent extraire les informations utiles depuis l'entrée de la transaction et composer eux-mêmes le `RedeemScript`. Par exemple
  - Si c'est une adresse normale, la `pubkey` ou la `pubkey hash` doit être définie comme la clé publique d'entrée correspondante lors de l'élaboration de `RedeemScript`.
  - Si c'est une adresse multi-signature, la clé publique correspondante de l'adresse multi-signature doit être utilisée lors de la construction du `RedeemScript`.

## Exemples de Transactions

### Transaction de Staking

[https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512](https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512)

<p align="center">
![btc-staking-tx-example](../../../../../../../static/img/btc-staking/tx-design/staking-tx-design%20(3).png)
</p>

#### Sortie P2WSH

Il s'agit de la sortie de staking, une adresse P2WSH standard. Le script de rachat utilisé est `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac`

```jsx
OP_PUSHBYTES_4 1f5e0e66
OP_CLTV
OP_DROP
OP_DUP
OP_HASH160
OP_PUSHBYTES_20 c4b8ae927ff2b9ce218e20bf06d425d6b68424fd
OP_EQUALVERIFY
OP_CHECKSIG
```

Le script est très similaire à un script de rachat P2PKH normal, sauf qu'il commence par un timelock `OP_PUSHBYTES_4 1f5e0e66 OP_CLTV OP_DROP`.

Le redeem script hash utilisé dans cette sortie P2WSH est le `SHA256(041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac)` ce qui donne `3dd731ae1c3ce32cfbec4ea82c855e027adf5fddca6d0118029b0ba15e44e0e9` .

Voici un outil en ligne pour générer la valeur de hachage `P2WSH` `sha256` d'un script de rachat, grâce auquel vous pouvez vérifier le calcul ci-dessus: [https://www.btcschools.net/bitcoin/bitcoin_tool_sha256.php](https://www.btcschools.net/bitcoin/bitcoin_tool_sha256.php)

#### Sortie OP_RETURN

Le code hex complet de cette sortie est le suivant `6a4c505341542b01045bde60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1a9e209f5ea0036c8c2f41078a3cebee57d8a47d501041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` , où

- `6a` est le opcode op_return
- `4c50` est la longueur totale en octets après l'opcode [1] `OP_RETURN`
- `5341542b` SAT+, l'identifiant Satoshi Plus
- `01` est la version
- `045b` 1115, l'Id de la chaîne (1115 pour le Core Testnet et 1116 pour le Core Mainnet)
- `de60b7d0e6b758ca5dd8c61d377a2c5f1af51ec1` est l'adresse de récompense
- `a9e209f5ea0036c8c2f41078a3cebee57d8a47d5` est l'adresse du validateur
- `01` est la commission du relayeur, mesurée en CORE
- `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` est le script de rachat, qui est expliqué dans la section précédente.

[1] Tout octet supérieur ou égal à `0x4c` est inséré en utilisant `0x4c` (ie. `OP_PUSHDATA`) suivi de la longueur, puis des données (`byte[80] -> OP_PUSHDATA + 80 + byte[80])`

### Transaction de Retrait

[https://mempool.space/tx/dc02ddc54ff82ba561f4d82429338d1df50377fcce0725bc764b9b2562d10832](https://mempool.space/tx/10182ad08fdb0469ab3d91d1bb340c7b0cbd858ad8865f6b6ddf76e3806ba889)

Cette transaction a dépensé la sortie P2WSH avec verrouillage temporel de la transaction de staking mentionnée précédemment

<p align="center">
![btc-staking-withdrawal-tx-example](../../../../../../../static/img/btc-staking/tx-design/staking-tx-design%20(4).png)
</p>

Dans l'entrée, le redeem script `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` est fourni pour la dépenser. Comme le verrouillage temporel `1f5e0e66` (660e5e1f après inversion des octets, ce qui correspond à un horodatage Unix de 1712217631) avait déjà expiré, l'UTXO a été dépensé avec succès.

> **Note**
> \> Des exemples de code pour la construction des transactions de staking et de retrait sur le réseau Bitcoin seront bientôt fournis.
