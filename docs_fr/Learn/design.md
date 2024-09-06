---
sidebar_label: Design
hide_table_of_contents: false
sidebar_position: 2
---

# Design du staking Non-custodial de BTC

---

## Contexte

La méthodologie de Core Chain pour l'intégration du staking de bitcoin se concentre sur le [timelock CLTV](https://en.bitcoin.it/wiki/Timelock#CheckLockTimeVerify). Le `OP_CHECKLOCKTIMEVERIFY` (CLTV) est un opcode spécifique utilisé dans le langage de script de Bitcoin, permettant de créer des conditions basées sur le temps ou la hauteur de bloc avant que les bitcoins puissent être dépensés à partir d'une sortie de transaction. Cela permet de créer des sorties verrouillées dans le temps, ce qui signifie qu'elles ne peuvent pas être dépensées avant qu'une certaine condition liée au temps ou à la hauteur de bloc ne soit remplie.

![btc-staking-tx-design](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(5\).png)

## Structure des transactions

### Transaction de Staking

Une transaction de staking BTC doit comporter deux ou trois sorties, qui sont

- Sortie de type `P2SH/P2WSH`, avec un script de rachat activé par un verrouillage temporel
- Sortie de type `OP_RETURN` avec les informations de staking pour la chaîne Core
- (_Optional_) Adresse de changement

Notez qu'il n'y a **aucune** restriction sur les entrées.

![btc-staking-tx-output](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(1\).png)

### Transaction de retrait

Lorsque le verrouillage temporel se termine, l'UTXO verrouillé peut être dépensé en utilisant le script de rachat

![btc-staking-withdrawal-tx](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(2\).png)

## Design du script

### Sortie P2SH/P2WSH

- Core prend en charge à la fois les sorties `P2SH` et `P2WSH` pour le staking BTC.

- La construction de la sortie du type `P2SH` est la suivante

  - `OP_HASH160 <RIPEMD160(SHA256(RedeemScript))> OP_EQUAL`

- La construction de la sortie de type `P2WSH` est la suivante

  - `OP_0 <SHA256(RedeemScript)>`

### Script de Rachat

Le `RedeemScript` doit commencer par un verrouillage temporel CLTV. Voici quelques types courants.

- Lors de l'utilisation d'une clé publique `<CLTV timelock> OP_CLTV OP_DROP <pubKey> OP_CHECKSIG`
  et le script de déverrouillage correspondant dans la transaction de retrait est `<sig> <RedeemScript>`

- Lors de l'utilisation d'une clé publique de hachage (fortement recommandé) `<CLTV timelock> OP_CLTV OP_DROP OP_DUP OP_HASH160 <pubKey Hash> OP_EQUALVERIFY OP_CHECKSIG` et le script de déverrouillage correspondant est `<sig> <pubKey> <RedeepScript>`

- Lors de l'utilisation d'une adresse multi-signature `<CLTV timelock> OP_CLTV OP_DROP M <pubKey1> <pubKey1> ... <pubKeyN> N OP_CHECKMULTISIG` et le script de déverrouillage correspondant est `OP_0 <sig1> ... <sigM> <RedeemScript>` Le montant et la durée du BTC verrouillé dans cette sortie seront utilisés pour le calcul de l'élection des validateurs et la distribution des récompenses sur la chaîne Core.

> **Note**
> Il y a des _exigences minimales_ concernant le **montant** et la **durée** pour que le staking soit éligible sur Core. Un utilisateur doit staker au moins **0,01 BTC** (moins les frais de transaction) pour au moins **10 jours** (`CLTV timestamp - transaction confirmation timestamp > 10 days`).

## Sortie OP_RETURN

La sortie `OP_RETURN` doit contenir toutes les informations de staking dans l'ordre, et être composée dans le format suivant:

- **`OP_RETURN`:** identifiant `0x6a`
- **`LENGTH`:** représente la longueur totale en octet après l'opcode `OP_RETURN`. Notez que toutes les données doivent être insérées avec la taille d'octet(s) approprié(s).
- **`Satoshi Plus Identifier`:** (**SAT+**) 4 octets
- **`Version`:** (**0x01**) 1 octet
- **`Chain ID`:** (1115 pour le Testnet Core et 1116 pour le Mainnet Core) 2 octets
- **`Delegator`:** L'adresse Core pour recevoir les récompenses, 20 octets
- **`Validator`:** L'adresse du validateur Core pour le staking, 20 octets
- **`Fee`:** Frais pour le relayeur, 1 octet, allant de [0, 255], mesuré en CORE
- (_Facultatif_) **`RedeemScript`**
- (_Facultatif_) **`Timelock`:** 4 octets

#### Points Clés à Respecter

- Tout octet pouvant être traduit en nombre doit utiliser`OP_number` (`{0}` doit utiliser `OP_0` au lieu de `0x0100`, `{16}` doit utiliser `OP_16` au lieu de `0x0110`)
- Tout octet dont la longueur est inférieure à `0x4c (76)` est inséré avec 1 octet égal à la taille `(byte[10] -> 10 + byte[10]; byte[70] -> 70 + byte[70])`
- Les octets plus grands ou égaux à `0x4c` sont insérés en utilisant `0x4c` (ie. `OP_PUSHDATA`) suivie de la longueur puis des données `(byte[80] -> OP_PUSHDATA + 80 + byte[80])`
- Les octets de longueur supérieure à `255` utilisent `0x4d` (`OP_PUSHDATA2`)
- Les octets de longueur supérieure à `65535` (`0xffff`) utilisent `0x4e` (`OP_PUSHDATA4`)

Soit le `RedeemScript` soit le `Timelock` doit être disponible, afin de permettre au relayeur d'obtenir le `RedeemScript` et de soumettre les transactions sur la chaîne Core. Si un `RedeemScript` est fourni, le relayeur l'utilisera directement. Sinon, le relayeur construira le script de rachat basé sur le timelock et les informations dans les entrées de la transaction. Vous trouverez plus d'informations sur le rôle du relayeur dans la section [ci-dessous](#role-of-relayers).

## Exemples de Transactions

### Transaction de Staking

[https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512](https://mempool.space/tx/9f5c66d5f90badafd537df44326f270aa64b7cc877ef68c3b69ed436870a3512)

![btc-staking-tx-example](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(3\).png)

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

![btc-staking-withdrawal-tx-example](../../../../static/img/btc-staking/tx-design/staking-tx-design%20\(4\).png)

Dans l'entrée, le redeem script `041f5e0e66b17576a914c4b8ae927ff2b9ce218e20bf06d425d6b68424fd88ac` est fourni pour la dépenser. Comme le verrouillage temporel `1f5e0e66` (660e5e1f après inversion des octets, ce qui correspond à un horodatage Unix de 1712217631) avait déjà expiré, l'UTXO a été dépensé avec succès.

> **Note**
> \> Des exemples de code pour la construction des transactions de staking et de retrait sur le réseau Bitcoin seront bientôt fournis.

## Rôle des Relayeurs

Dans un sens strict, le processus de staking de BTC Non-Custodial se compose de deux étapes

1. Staking sur le réseau Bitcoin
2. Soumission de la transaction de staking BTC confirmée à la chaîne Core

Pour rendre le processus plus pratique, Core Chain introduit le rôle des relayeurs. Les relayeurs peuvent aider les utilisateurs à soumettre des transactions au réseau Core après la confirmation de la transaction de staking sur le réseau Bitcoin. Puisqu'il est nécessaire de vérifier la transaction sur le réseau Core avec le client Bitcoin light intégré, les relayeurs doivent obtenir le `RedeemScript` correspondant à la sortie `P2SH/P2WSH`. Pour répondre à cette exigence, il est conseillé aux utilisateurs de

- Inclure le `RedeemScript` complet à la fin de la sortie `OP_RETURN`, si le script est court. par exemple, un `RedeemScript` construit en utilisant un hachage de clé publique, comme montré dans l'exemple ci-dessus.
- Utiliser leur propre adresse de réception pour la transaction de staking, afin que les relayeurs puissent extraire les informations utiles depuis l'entrée de la transaction et composer eux-mêmes le `RedeemScript`. Par exemple
  - If it's a normal address, the `pubkey` or `pubkey hash` should be set as the input's corresponding public key when constructing the `RedeemScript`.
  - If it is a multi-signature address, the corresponding multi-signature address's public key should be set when constructing the `RedeemScript`.
