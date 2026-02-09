---
sidebar_label: Guide d’intégration du double staking
hide_table_of_contents: false
sidebar_position: 2
---

# Guide d'intégration du double staking

Core est une blockchain Layer 1 compatible EVM, conçue pour être la plateforme de contrats intelligents évolutive de Bitcoin. Il utilise les timelocks CLTV natifs de Bitcoin et la puissance de hachage du minage pour faire de Bitcoin à la fois un protecteur et un actif au sein d’un écosystème d’applications décentralisées.

Le consensus Satoshi Plus de Core combine le Delegated Proof of Work (DPoW), le staking Bitcoin auto‑custodial et le Delegated Proof of Stake (DPoS) pour élire les validateurs, impliquant les mineurs Bitcoin, les stakers Bitcoin et les stakers CORE afin d'améliorer la sécurité et l'alignement des incitations.

## Différents mécanismes de staking sur Core

| Type                           | Réseau  | Mécanisme                  | Montant                                                                                             | Durée                                                                            | Transférer le validateur de staking                                                      | Éligibilité aux récompenses                                                                                                                                                                                 | Slashing                                                                                                                                                            |
| ------------------------------ | ------- | -------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CORE Staking**               | Core    | Preuve d’enjeu déléguée    | Minimum 1 CORE                                                                                      | Aucune période de blocage                                                        | Aucune perturbation des récompenses de staking                                           | Vous devez terminer un cycle de staking complet (00:00:00 – 23:59:59 UTC) pour obtenir des récompenses.  | Le principal mis en jeu des délégataires reste sécurisé, mais ils peuvent perdre leurs récompenses quotidiennes si leur validateur est 'slashed'.   |
| **Self-Custodial BTC Staking** | Bitcoin | Preuve de travail déléguée | No minimum (script)<br/>Minimum 0.01 BTC (UI) | No minimum (script)<br/>5-day minimum (UI) | Interrompt le staking, entraînant une perte de récompenses pour ce jour. | Vous devez terminer un cycle de staking complet (00:00:00 – 23:59:59 UTC) pour recevoir les récompenses. | Le principal mis en jeu des délégataires reste sécurisé, mais ils peuvent perdre leurs récompenses quotidiennes si leur validateur est « slashed ». |

|                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dual Staking** | Le double staking se produit lorsque la même adresse Core est utilisée à la fois pour le staking CORE et comme adresse de récompense pour le staking BTC. Selon le [BTC:CORE staking ratio](https://docs.coredao.org/docs/stake-and-delegate/dual-staking-working) les stakers se classent dans l’une des quatre catégories suivantes. Un ratio CORE / BTC plus élevé augmente le rendement du staking BTC. |

## Le premier mécanisme de staking Bitcoin en auto‑garde

Le composant de staking Bitcoin auto‑garde de Satoshi Plus est le premier mécanisme en ligne qui permet aux détenteurs de Btc de générer un rendement sans ajouter de nouvelles hypothèses de confiance. Il permet aux détenteurs de Bitcoin de gagner des récompenses en jetons CORE en participant au consensus de Core sans renoncer à la garde de leur Bitcoin, en s’appuyant sur l’opcode natif de Bitcoin **CheckLockTimeVerify (CLTV) opcode**. Cela transforme un Bitcoin inactif en un actif productif tout en préservant la sécurité et la souveraineté, sans risque de perte ou de compromission lié au « wrapping » ou au pontage.

### Principes fondamentaux

- **100 % d’auto‑garde:** le Bitcoin reste en permanence dans le portefeuille de l’utilisateur.
- **Zéro risque de principal:** les fonds restent entièrement sécurisés par les propres règles de Bitcoin
- **Rendement sans confiance:** Aucun intermédiaire tiers.
- **Sécurité native de Bitcoin:** le Bitcoin mis en jeu est entièrement sécurisé par le mécanisme de consensus de Bitcoin.

### Comment ça fonctionne

1. **Verrouillage temporel du Bitcoin via CLTV:** les détenteurs bloquent du Bitcoin pendant la durée qu’ils choisissent (**minimum 0,01 BTC, minimum 24 h pour recevoir des récompenses**) en utilisant l’opcode CLTV. Pendant cette période, le Bitcoin est verrouillé.
2. **Spécifier le validateur et les détails de l'adresse de récompense:** lors de la création d’une transaction avec timelock, les données `OP_RETURN` doivent contenir les informations clés suivantes:
   1. **Informations sur le validateur:** il s’agit de l'adresse du validateur Core à qui l'utilisateur souhaite déléguer son Bitcoin.
   2. **Adresse du portefeuille EVM:** l'adresse du portefeuille EVM où l'utilisateur souhaite recevoir ses récompenses en jetons CORE.
3. **Intégration du relayer et du consensus:** le réseau de relayers de Core parcourt la blockchain Bitcoin à la recherche de timelocks CLTV valides contenant les métadonnées, vérifie les transactions, transmet les données au consensus de Core et ajuste les poids d’élection des validateurs en fonction du Bitcoin délégué.
4. **Distribution des récompenses:** lorsqu’un validateur élu est actif et exécute ses fonctions, il reçoit des jetons CORE en tant que récompenses de validation. Les validateurs conservent une part spécifique, appelée commission, et distribuent le reste aux délégateurs Bitcoin qui les soutiennent. Ces récompenses sont envoyées à l'adresse du portefeuille EVM fournie par le délégateur. Les montants des récompenses varient selon la disponibilité du validateur et le montant de Bitcoin mis en jeu pour le soutenir.
5. **Expiration du timelock:** après l’expiration de la période de blocage, le Bitcoin est débloqué, et le droit de vote du validateur ainsi que l’éligibilité aux récompenses expirent. De nouveaux timelocks sont nécessaires pour poursuivre la participation. Il n’y a pas de renouvellement automatique ; la participation continue nécessite une nouvelle transaction de timelock.

## Dual Staking sur Core

Le Dual Staking renforce le staking BTC auto‑custodial de Core en permettant aux participants de miser à la fois du BTC et du CORE afin de maximiser le rendement Bitcoin. Les récompenses sont payées en CORE et sont proportionnelles au ratio BTC:CORE misé. Bien que les récompenses BTC soient augmentées, les récompenses du staking CORE restent inchangées.

En respectant des ratios ou seuils prédéfinis de CORE‑BTC, les utilisateurs obtiennent des récompenses Bitcoin boostées, payées en CORE. Bien que le Dual Staking augmente les rendements du staking BTC, il n’impacte pas directement les récompenses du staking CORE.

### Niveaux de rendement boostés

Sous le Dual Staking, les rendements du staking Bitcoin sont répartis en quatre niveaux selon la proportion de CORE mise en jeu par rapport au BTC staké.

- Base Layer \= BTC Staking Rate for solo staking BTC.
- Boost Layer \= BTC Staking Rate \+ Level 1 Boosted Yield Multiplier (Requires Staking 8,500 CORE per 1 BTC)
- Super Layer \= BTC Staking Rate \+ Level 2 Boosted Yield Multiplier (Requires Staking 25,500 CORE per 1 BTC)
- Satoshi Layer \= BTC Staking Rate \+ Level 3 Boosted Yield Multiplier (Requires Staking 68,000 CORE per 1 BTC)

**Dynamique du rendement et activation des paliers**

- Les rendements du staking BTC varient quotidiennement en fonction du prix CORE/BTC et des conditions du réseau.
- Les récompenses CORE sont distribuées en fonction du montant de BTC délégué, du validateur choisi et du total des délégations reçues par ce validateur.
- Les multiplicateurs de palier sont dynamiques et peuvent être ajustés par la gouvernance en réponse aux évolutions du marché.

**Activation d’un niveau supérieur**
Si vous ajoutez davantage de CORE alors que le BTC est déjà staké:

1. Attendez jusqu’au prochain 00:00 UTC.
2. Réclamez les récompenses une fois après 00:00 UTC.

Votre nouveau palier prend effet immédiatement après la réclamation.

**Comment se qualifier**

- Staker à la fois BTC (via transaction timelock) et CORE (via délégation de validateur).
- Utilisez la **même adresse Core** pour le staking de CORE et la collecte des récompenses BTC.

## Réseaux et environnements Core

| Réseaux     |         ID de la chaîne         |  Devise  | RPC                                                                                                                               | Explorateur                                                                                                                        | Site web de staking                                                                                                                                                                             | Faucet                                                                                                                                           |
| ----------- | :-----------------------------: | :------: | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Mainnet** | 1116 (0x45c) |  `CORE`  | https://rpc.coredao.org                                                           | [scan.coredao.org](https://scan.coredao.org/)                                                      | [https://stake.coredao.org/](https://stake.coredao.org/) (Supports Bitcoin Mainnet)                                          | —                                                                                                                                                |
| **Testnet** | 1114 (0x45a) | `tCORE2` | [https://rpc.test2.btcs.network](https://rpc.test2.btcs.network/) | [https://scan.test2.btcs.network](https://scan.test2.btcs.network) | [https://scan.test2.btcs.network/faucet](https://scan.test2.btcs.network/faucet) (Supports Bitcoin Testnet4) | [https://scan.test2.btcs.network/faucet](https://scan.test2.btcs.network/faucet) |

⚠️ **Note**: Core Testnet **1115 is decommissioned**. Always use Core Testnet2 with **1114** chain ID for testing.

Pour plus de détails sur la configuration du réseau, consultez [here](https://docs.coredao.org/docs/Dev-Guide/network-config%20).

## Staking Tools

- **Sites officiels de staking Core**
  - [Mainnet Staking Site](https://stake.coredao.org/) (Supports Bitcoin Mainnet)
  - [Testnet Staking Site](https://stake.test2.btcs.network/) (Supports Bitcoin Testnet 4)

- **Staking Script (Advanced Users)**
  - [Bitcoin Staking Repository](https://github.com/coredao-org/btc-staking-tool)
  - [Core Staking Repo](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/CoreAgent.sol#L166)

## Smart Contracts & ABIs

Tous les ABIs et adresses vérifiés se trouvent dans [core-genesis-contracts](https://github.com/coredao-org/core-genesis-contract).

| Contrat                                                                                                                             | Role                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [PledgeAgent.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/PledgeAgent.sol)       | Ce contrat gère la délégation des utilisateurs, incluant à la fois la délégation de CORE par les détenteurs de jetons et la délégation de puissance de travail (PoW) des mineurs de Bitcoin. Ce contrat est obsolète depuis la version 1.0.12 et a été remplacé par Stakehub.sol ainsi que par d’autres contrats d’agent.                                             |
| [StakeHub.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/StakeHub.sol)             | Ce contrat gère la logique globale du score hybride et la distribution des récompenses. Il remplace le rôle de PledgeAgent.sol pour interagir avec CandidateHub.sol et d’autres contrats du protocole pendant le processus de turnround.                                                                                                                                                                 |
| [CoreAgent.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/CoreAgent.sol)           | Ce contrat gère le staking de CORE.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [BitcoinAgent.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/BitcoinAgent.sol)     | Ce contrat gère le staking de BTC. Ce contrat interagit avec BitcoinStake.sol pour permettre le staking non‑custodial de BTC.                                                                                                                                                                                                                                                                                            |
| [BitcoinStake.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/BitcoinStake.sol)     | Ce contrat gère le staking non‑custodial de BTC.                                                                                                                                                                                                                                                                                                                                                                                                         |
| [BTCLightClient.sol](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/BtcLightClient.sol) | Ce contrat implémente un client léger BTC directement sur la blockchain Core. Les relayers transmettent les en‑têtes de blocs BTC à Core en appelant ce contrat. Il calcule également les puissances des mineurs BTC à chaque tour, utilisées pour le score hybride et la répartition des récompenses. Ce contrat permet également de vérifier les transactions Bitcoin afin de soutenir le staking BTC. |
| [`HashPowerAgent.sol`](https://github.com/coredao-org/core-genesis-contract/blob/master/contracts/HashPowerAgent.sol)               | Ce contrat gère le staking de puissance de hachage Bitcoin, (mesurée en blocs BTC).                                                                                                                                                                                                                                                                                                                                                   |

## Staking CORE et BTC de façon programmatique

Cette section explique comment staker des actifs de façon **programmatique** sur le réseau Core. Depuis la version 1.1.12, du protocole Core, le réseau Core permet le staking des jetons CORE et BTC.

### 1. Jeton natif CORE

#### Stake CORE

Pour staker du CORE, il suffit [CoreAgent.delegateCoin()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/CoreAgent.sol#L166) method:  
`function delegateCoin(address candidate) external payable;`

- `candidate`: adresse de l’opérateur d’un validateur enregistré et actif (il n’est pas nécessaire qu’il soit élu).
- `msg.value`: montant de CORE à staker.

#### Pour retirer votre mise

Pour retirer le CORE staké [CoreAgent.undelegateCoin()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/CoreAgent.sol#L179):  
`function undelegateCoin(address candidate, uint256 amount) public;`

- **Parameters:** l'adresse du validateur (candidate) et le montant de Core à désengager.
- Notez: les récompenses restent sur le contrat et ne sont pas envoyées automatiquement lors du unstaking. Call [StakeHub.claimReward()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/StakeHub.sol#L228) separately to claim them.

#### Transférer votre mise de CORE

Pour déplacer votre mise d’un validateur à un autre sans perdre les récompenses accumulées [CoreAgent.transferCoin()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/CoreAgent.sol#L191):  
`function transferCoin(address sourceCandidate, address targetCandidate, uint256 amount) public;`

- **Parameters:** source validator, target validator, et montant de tokens CORE à transférer.
- Notez: le validateur cible doit être actif.

### 2. Bitcoin (BTC)

Le staking de Bitcoin nécessite de construire une transaction BTC native qui :

- Verrouille les UTXO avec **CheckLockTimeVerify (CLTV)**, et
- Inclut les métadonnées du validateur et de l'adresse de récompense dans une sortie **`OP_RETURN`** .

Pour plus d'informations sur la façon de mettre en jeu et de racheter des actifs Bitcoin sur la blockchain Core, consultez [BTC Staking Design](https://docs.coredao.org/docs/Learn/products/btc-staking/design).

Exemple de dépôt (repository) montrant comment le faire programmatiquement en utilisant TypeScript: [btc-staking-tool](https://github.com/coredao-org/btc-staking-tool).

#### Stake BTC (Timelock)

 Pour soumettre une transaction de stake BTC sur Core, veuillez consulter l’exemple suivant [Stake script](https://github.com/coredao-org/btc-staking-tool/blob/main/src/stake.ts).

#### Redeem BTC

Pour racheter les BTC mis en jeu après l’expiration du timelock, veuillez consulter l’exemple suivant [Redeem script](https://github.com/coredao-org/btc-staking-tool/blob/main/src/redeem.ts).

#### Relayer la transaction de staking BTC

Les relayers, qui font partie de l’infrastructure de la blockchain Core, transmettent les transactions de mise en jeu et de rachat de Bitcoin du réseau Bitcoin au réseau Core. . De plus, les utilisateurs peuvent envoyer des transactions Bitcoin au réseau Core de façon indépendante s’ils le souhaitent. Pour transmettre une transaction de stake,[BitcoinStake.delegate()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/BitcoinStake.sol#L158) doit être appelée. Pour transmettre une transaction de rachat()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/BitcoinStake.sol#L206) la façon de l’invoquer.

#### Transférer le stake BTC

Oui, Core permet de déplacer des BTC mis en stake vers un autre validateur. Pour transférer votre stake BTC vers un nouveau validateur, il suffit d’appeler la fonction[BitcoinStake.transfer()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/BitcoinStake.sol#L353) method:

`function transfer(bytes32 txid, address targetCandidate) external;`

- **Paramètres :** identifiant de la transaction BTC mise en stake (`txid`) et adresse du validateur cible.
- **Note:** Contrairement aux transferts CORE, les transferts BTC entraînent la perte des récompenses pour le jour du transfert.

### 3. Réclamer les récompenses

Pour récupérer les récompenses accumulées, appelez la méthode[StakeHub.claimReward()](https://github.com/coredao-org/core-genesis-contract/blob/v1.1.10/contracts/StakeHub.sol#L228):

`function claimReward() external returns (uint256[] memory rewards);`

- Réclame les récompenses pour **tous les types de stake** (CORE et BTC).
- Le tableau retourné contient les montants dans cet ordre:
  1. CORE rewards
  2. BTC rewards

### 4. Connexion du portefeuille

Le portail de staking officiel ([stake.coredao.org](https://stake.coredao.org)) s’intègre aux bibliothèques de portefeuille standard pour les connexions de portefeuille.

####  Bibliothèque de portefeuille Ledger

```ts
import { AppClient, DefaultWalletPolicy, PsbtV2, DefaultDescriptorTemplate } from 'ledger-bitcoin';
import TransportWebHid from '@ledgerhq/hw-transport-webhid';
const transport = await TransportWebHid.create();
      const app = new AppClient(transport);
      this.app = app;
      const result = await app.getAppAndVersion();
      const appName = isMainnet ? 'Core' : 'Core Testnet';
      if (result.name !== appName) {
        throw new Error(`Connect ledger app correctly ,Please open ${appName} app on your Ledger device`);
      } else {
        return transport;
      }
```

####  Bibliothèque de portefeuille Xverse

```ts
import { AddressPurpose, BitcoinNetworkType, request } from 'sats-connect';
try {
        const response = await request('wallet_connect', null);
        if (response.status === 'success') {
          const network = response.result.network.bitcoin.name;
          if (network !== BitcoinNetworkTypeMap[bitcoinSupportChain()]) {
            const res = await request('wallet_changeNetwork', {
              name: BitcoinNetworkTypeMap[bitcoinSupportChain()]
            });
            if (res.status === 'error') {
              bitcoinStore.setBitcoinAppAccounts(null);
              console.error(res.error);
              throw new Error(res.error.message);
            }
          }
          const addressRes = await request('getAddresses', {
            purposes: [AddressPurpose.Payment]
          });
          if (addressRes.status === 'error') {
            console.error(addressRes.error);
            throw new Error(addressRes.error.message);
          }
          const accounts = addressRes.result.addresses?.filter(
            (i: any) => i.purpose === AddressPurpose.Payment && i.publicKey !== ''
          );
          bitcoinStore.setBitcoinAppAccounts(accounts);
          console.log(JSON.stringify(accounts));
          forEach(accounts, (account) => {
            hardWalletType = account.walletType;
          });
          return { accounts: accounts || [], network: bitcoinSourceNetworkName(), hardWalletType };
        } else {
          bitcoinStore.setBitcoinAppAccounts(null);
          console.error(response.error);
          throw new Error(response.error.message);
        }
      } catch (error: any) {
        bitcoinStore.setBitcoinAppAccounts(null);
        console.error(error);
        throw new Error('Connect XVerse wallet failed, Check your wallet has installed');
      }
```

## API Endpoints

- **Core Scan API Endpoints**
  - [Mainnet API Endpoints](https://docs.coredao.org/docs/api/core-api-mainnet-docs)
  - [Testnet API Endpoints](https://docs.coredao.org/docs/api/core-api-testnet-docs)
- **Staking API Endpoints**
  - [Mainnet Staking API Endpoints](https://staking-api.coredao.org/)
  - [Testnet Staking API Endpoints](https://staking-api.test2.btcs.network/)
- **API Playgrounds**
  - [Mainnet Staking API (Chain ID: 1116)](https://docs.coredao.org/docs/api/mainnet-staking-api-docs)
  - [Testnet Staking API (Chain ID: 1114)](https://docs.coredao.org/docs/api/testnet-staking-api-docs)

## Directives de récupération de données pour l'expérience utilisateur du staking

- **Obtenir les détails de tous les validateurs**: pour l'interface utilisateur de staking, le validateur avec le taux de récompense le plus élevé doit être sélectionné automatiquement par défaut, tel qu'il est récupéré depuis le point d'accès API Validator Details, pour la sélection du validateur.
  - Pour le timelocking de BTC, choisissez l'adresse du validateur avec le plus haut “**estimatedBTCRewardRate**” issu de la réponse de [this endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_status_validators).
  - Pour le staking CORE, choisissez l'adresse du validateur dont le champ “**estimatedCORERewardRate**” est le plus élevé dans la réponse de cet [this endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_status_validators).

- **Affichage du taux de récompense projeté:** pour afficher le taux de récompense projeté, récupérez les données depuis [staking reward rate API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_rewards_reward_rate), saisissez les paramètres clés requis, puis affichez le taux calculé.

- **Exigence de niveau de double staking:** récupérez les exigences de niveau de double staking en utilisant le champ "stakeRate" depuis [Dual Staking Grade API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_dualstaking_grade). Ce champ indique le nombre de jetons CORE qui doivent être mis en jeu pour chaque 1 BTC verrouillé dans le temps afin de satisfaire les critères de chaque niveau de Dual Staking. Veuillez noter que les exigences de niveau de Dual Staking peuvent varier périodiquement en raison de mises à jour du protocole ou des conditions du réseau.

- Taux de récompense du palier Dual Staking : récupérez le taux de récompense du palier Dual Staking en utilisant le champ "percentage" depuis [Dual Staking Grade API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_dualstaking_grade). Ce champ indique l’ajustement appliqué au "estimatedBTCRewardRate" provenant de [Validator details API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_status_validators),où la valeur représente l’ajustement en pourcentage (e.g., 1000 \= 10%, 2000 \= 20%, 3000 \= 30%, up to 50000 \= 500%). Veuillez noter que le taux de récompense du palier Dual Staking peut être ajusté périodiquement en raison de mises à jour du protocole ou des conditions du réseau.

- **Statut de staking actuel:** récupérer le statut de staking actuel pour une adresse Core spécifiée en utilisant le [Staking Summary API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_core).
  - Le champ "**Staked Amount**" indique la quantité de jetons activement mis en jeu
    - Le champ"**Pending Reward**" indique les récompenses CORE gagnées mais non encore réclamées
    - Le champ "**Claimed Reward**" indique les récompenses CORE qui ont été gagnées et retirées

- **CORE supplémentaire pour le prochain palier Dual Staking:** Utilisation de la [Dual Staking Grade API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_dualstaking_grade) and [Staking Summary API endpoint](https://staking-api.coredao.org/#/Staking%20APIs/get_staking_summary_core) Calculer et afficher le montant supplémentaire de jetons CORE qu’il faut mettre en jeu pour que le compte passe au palier Dual Staking suivant.