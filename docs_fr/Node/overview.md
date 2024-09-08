---
sidebar_label: Vue d'Ensemble
hide_table_of_contents: false
sidebar_position: 2
---

# Vue d'ensemble des validateurs

---

Dans l'écosystème Core Chain, les validateurs jouent un rôle essentiel dans le maintien de l'intégrité, de la sécurité et de la continuité de la blockchain. Ils sont responsables du traitement des transactions, de la création de nouveaux blocs et de la participation au processus de consensus. Ce rôle est crucial pour garantir que la Core Chain fonctionne efficacement et reste décentralisée.

## Qui sont les validateurs dans le réseau Core

Dans l'écosystème Core Chain, les validateurs assurent l'intégrité et la sécurité de la blockchain en produisant et validant de nouveaux blocs. Ils participent au mécanisme de consensus Satoshi Plus, un mélange de Preuve de Travail (PoW) et de Preuve d'Enjeu Déléguée (DPoS). Les validateurs sont sélectionnés en fonction d'un système hybride qui prend en compte à la fois les jetons CORE et BTC mis en jeu en leur faveur, ainsi que la puissance de hachage Bitcoin qui leur est déléguée. Ce système garantit que le groupe de validateurs représente un équilibre entre les intérêts des parties prenantes et la puissance de minage, renforçant ainsi la sécurité et la décentralisation du réseau. Les élections des validateurs se déroulent par cycles, appelés époques, au cours desquels un nouveau groupe de validateurs est sélectionné pour gérer les opérations et la gouvernance de la blockchain de manière efficace.

## Économies

Les récompenses des validateurs proviennent de
1. **Les récompenses de base**, sous forme de jetons CORE nouvellement créés;
2. **Les frais collectés lors des transactions dans chaque bloc**;

Les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'un cycle est miné. Actuellement, **90 %** des récompenses vont aux validateurs et **10 %** sont alloués au `Contrat de Récompense du Système`. Sur les **90 %** des récompenses versées aux validateurs, un certain pourcentage est prélevé sous forme de commission par le validateur avant de redistribuer le reste à leurs délégués. Chaque validateur a une probabilité égale de produire des blocs, de sorte qu'à long terme, tous les validateurs stables devraient obtenir une part similaire des récompenses.

Il en va de même pour les frais de transaction collectés sur chaque bloc au cours d'un tour. Ces frais ne sont pas entièrement versés aux validateurs, mais sont calculés de manière similaire aux récompenses de base, c'est-à-dire que 90 % des frais accumulés sont versés aux validateurs, un certain pourcentage est prélevé sous forme de commission par le validateur, et le reste est distribué aux délégués. Les 10 % restants sont déposés dans le System Reward Contract.

Validators share rewards with the entities that delegated to them – including CORE stakers, bitcoin stakers, and PoW delegators – but they decide how much to give back by deciding how much they (the validators) choose to keep for themselves. Validators can take as much or as little of the reward as they want, though they’re incentivized to be generous in order to attract more stake and hash power.

Validators are required to share rewards with the delegators who staked CORE or delegated hash power to them. Given the fact that each validator has an equal probability of producing blocks, all stable validators should get a similar portion of the rewards, in the long run. The portion validators keep for themselves (commission fees) will be distributed directly to their fee addresses at the end of each round.

**_Note that the settlements for rewards is done on daily basis, i.e. a round, instead of per block._**

![validator-reward-distribution](../../../static/img/validator/Reward-Distribution.png)

Let us assume that the base reward for a round is **3000 CORE** and that a certain validator sets its commission rate to **20%**. These tokens do not go directly to the proposer. Instead, they are shared among validators and delegators. These **3000 CORE** will be distributed according to each participant's stake. Assume that the fees generated from all transactions in all the blocks in a round was **100 CORE**.

```maths
    Total Accumulated Reward = Base Reward + Transaction Fees = 3,000 + 100 = 3,100 CORE

    System Reward Contract gets = 3,100 x 10% = 310 CORE  

    Accumulated Validator Reward = (Base Reward + Transaction Fees) x 90% = 3,100 x 90% = 2,790 CORE

    Commission = (Base Reward + Transaction Fees) x 20% = 2,790 x 20% = 558 CORE

    Total Reward Validator gets = Commission = 558 CORE

    All Delegators gets = Accumulated Validator Reward - Commission = 2,790 - 558 = 2,232 CORE
```

:::note
In the Core ecosystem, the rewards are distributed to each validator, from that reward valdiators are required to keep a percentage in the form of commission and distribute the rest to its delegators. Each validator can set its own commission rate. However, there is no self-bonded CORE. Validator only gets commissions if they don't want to stake on their own validator.
:::

## Potential Risks and Penalties for Validators

In the Core Chain ecosystem, validators play a crucial role in maintaining the network's integrity and security. While this role comes with incentives like earning rewards for block validation, it also involves certain risks and potential penalties if validators fail to perform their duties adequately or engage in malicious activities. Here’s a detailed overview of the potential risks and penalties for validators in the Core Chain ecosystem:

1. **Slashing Risks:** Validators in many DPoS based systems, including Core Chain, face the risk of slashing if they act maliciously or negligently. This could involve double signing, downtime (failing to be online and perform validation duties), or any actions that compromise the network's security. Slashing involves a portion of the staked CORE tokens being destroyed or taken away, which directly impacts the validator’s financial holdings.

2. **Stake Lock-up and Liquidity Risk:** Validators must lock up a significant amount of CORE tokens as collateral to participate in the validation process. This stake is subject to lock-up periods during which the funds cannot be accessed, posing a liquidity risk, especially if the market conditions change dramatically.

3. **Jailing of Validators:** Validators who consistently underperform or violate network protocols may be "jailed." This term refers to temporarily removing them from the validator set, preventing them from participating in consensus and earning rewards. This not only affects their revenue but can also tarnish their reputation within the community.

4. **Loss of Delegation:** Validators depend on delegations from CORE token holders to increase their influence and earning potential. Poor performance or high penalty rates can lead delegators to withdraw their support and reallocate their stakes to more reliable validators, leading to a significant decrease in potential earnings.

5. **Operational and Security Risks:** Running a validator node requires technical competence. Validators must ensure their systems are secure and running efficiently 24/7. Failure to manage these operational risks can lead to missed blocks or security breaches, potentially leading to financial losses or reputational damage.
