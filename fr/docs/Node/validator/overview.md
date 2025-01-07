---
sidebar_label: Aperçu
hide_table_of_contents: false
sidebar_position: 2
---

# Vue d'ensemble des validateurs

---

In the Core ecosystem, validators are crucial participants who maintain the integrity, security, and continuity of the blockchain. Ils sont responsables du traitement des transactions, de la création de nouveaux blocs et de la participation au processus de consensus. This role is pivotal in ensuring that the Core blockchain operates efficiently and remains decentralized.

## Qui sont les validateurs dans le réseau Core

In the Core ecosystem, validators play a crucial role in maintaining the integrity and security of the blockchain by producing and validating new blocks. Ils participent au mécanisme de consensus Satoshi Plus, un mélange de Preuve de Travail (PoW) et de Preuve d'Enjeu Déléguée (DPoS). Les validateurs sont sélectionnés en fonction d'un système hybride qui prend en compte à la fois les jetons CORE et BTC mis en jeu en leur faveur, ainsi que la puissance de hachage Bitcoin qui leur est déléguée. Ce système garantit que le groupe de validateurs représente un équilibre entre les intérêts des parties prenantes et la puissance de minage, renforçant ainsi la sécurité et la décentralisation du réseau. Les élections des validateurs se déroulent par cycles, appelés époques, au cours desquels un nouveau groupe de validateurs est sélectionné pour gérer les opérations et la gouvernance de la blockchain de manière efficace.

## Économies

Les récompenses des validateurs proviennent de **Les récompenses de base**, sous forme de jetons CORE nouvellement créés; **Les frais collectés lors des transactions dans chaque bloc**;

Les récompenses de base sont calculées et distribuées lorsque le dernier bloc d'un cycle est miné. Actuellement, **90 %** des récompenses vont aux validateurs et **10 %** sont alloués au `Contrat de Récompense du Système`. Sur les **90 %** des récompenses versées aux validateurs, un certain pourcentage est prélevé sous forme de commission par le validateur avant de redistribuer le reste à leurs délégués. Chaque validateur a une probabilité égale de produire des blocs, de sorte qu'à long terme, tous les validateurs stables devraient obtenir une part similaire des récompenses.

Ces frais ne sont pas entièrement versés aux validateurs, mais sont calculés de manière similaire aux récompenses de base, c'est-à-dire que 90 % des frais accumulés sont versés aux validateurs, un certain pourcentage est prélevé sous forme de commission par le validateur, et le reste est distribué aux délégués. Les 10 % restants sont déposés dans le System Reward Contract.

Les validateurs partagent les récompenses avec les entités qui leur ont délégué des fonds – y compris les stakers de CORE, les stakers de Bitcoin et les délégateurs de PoW – Cependant, ils décident eux-mêmes de la part qu'ils (les validateurs) souhaitent conserver avant de la redistribuer. Ils peuvent choisir de garder plus ou moins de récompenses, bien qu'ils soient incités à être généreux afin d'attirer davantage de mises et de puissance de hachage.

Les validateurs sont tenus de partager les récompenses avec les délégués qui ont staké du CORE ou délégué de la puissance de hachage à leur profit. Étant donné que chaque validateur a une probabilité égale de produire des blocs, tous les validateurs stables devraient recevoir une part similaire des récompenses à long terme. La part que les validateurs gardent pour eux-mêmes (frais de commission) sera directement versée à leurs adresses de frais à la fin de chaque tour.

**_Notez que les règlements des récompenses se font sur une base quotidienne, c'est-à-dire par tour, et non par bloc._**

![validator-reward-distribution](../../../static/img/validator/Reward-Distribution.png)

Prenons l'exemple d'une récompense de base pour un tour de **3 000 CORE**, et supposons qu'un validateur fixe son taux de commission à **20 %**. Ces tokens ne vont pas directement à l'auteur de la proposition. Ils sont plutôt partagés entre les validateurs et les délégués. Ces **3 000 CORE** seront distribués en fonction de la participation de chaque participant. Supposons que les frais générés par toutes les transactions dans tous les blocs d'un tour s'élèvent à **100 CORE**.

```maths
    Récompense totale accumulée = Récompense de base + Frais de transaction = 3 000 + 100 = 3 100 CORE

    System Reward Contract reçoit = 3 100 x 10 % = 310 CORE  

    Récompense accumulée du validateur = (Récompense de base + Frais de transaction) x 90 % = 3 100 x 90 % = 2 790 CORE

    Commission = (Récompense de base + Frais de transaction) x 20 % = 2 790 x 20 % = 558 CORE

    Récompense totale du validateur = Commission = 558 CORE

    Récompense totale des délégués = Récompense accumulée du validateur - Commission = 2 790 - 558 = 2 232 CORE
```

:::note
Dans l'écosystème Core, les récompenses sont distribuées à chaque validateur. À partir de ces récompenses, les validateurs sont tenus de conserver un pourcentage sous forme de commission et de redistribuer le reste à leurs délégués. Chaque validateur peut fixer son propre taux de commission. Cependant, il n'y a pas de CORE auto-staké (self-bonded). Un validateur ne reçoit des commissions que s'il choisit de ne pas staker sur son propre validateur.
:::

## Risques potentiels et pénalités pour les validateurs

In the Core ecosystem, validators play a crucial role in maintaining the network's integrity and security. Bien que ce rôle comporte des incitations, telles que la possibilité de gagner des récompenses pour la validation des blocs, il comporte également certains risques et pénalités potentiels si les validateurs ne remplissent pas correctement leurs fonctions ou s'engagent dans des activités malveillantes. Here’s a detailed overview of the potential risks and penalties for validators in the Core ecosystem:

1. **Slashing Risks:** Validators in many DPoS based systems, including Core, face the risk of slashing if they act maliciously or negligently. Cela peut inclure la signature double, l'inactivité (incapacité à être en ligne et à remplir les fonctions de validation) ou toute action compromettant la sécurité du réseau. Le slashing implique la destruction ou la confiscation d'une partie des tokens CORE mis en jeu, ce qui affecte directement les avoirs financiers du validateur.

2. **Risques de blocage des mises et de liquidité :** Les validateurs doivent bloquer un montant important de tokens CORE en garantie pour participer au processus de validation. Ces tokens sont soumis à des périodes de blocage pendant lesquelles les fonds ne sont pas accessibles, ce qui pose un risque de liquidité, notamment si les conditions du marché changent de manière drastique.

3. **Emprisonnement des validateurs :** Les validateurs qui sous-performent de manière répétée ou violent les protocoles du réseau peuvent être "emprisonnés". Ce terme désigne leur retrait temporaire du set de validateurs, les empêchant de participer au consensus et de gagner des récompenses. Cela affecte non seulement leurs revenus, mais peut également ternir leur réputation au sein de la communauté.

4. **Perte de délégation :** Les validateurs dépendent des délégations des détenteurs de tokens CORE pour augmenter leur influence et leur potentiel de gain. Une mauvaise performance ou des pénalités élevées peuvent pousser les délégués à retirer leur soutien et à réaffecter leurs mises à des validateurs plus fiables, entraînant une baisse significative des gains potentiels.

5. \*\*Risques opérationnels et de sécurité : Exploiter un nœud validateur nécessite des compétences techniques. Les validateurs doivent s'assurer que leurs systèmes sont sécurisés et fonctionnent efficacement 24 heures sur 24, 7 jours sur 7. Un échec dans la gestion de ces risques opérationnels peut entraîner des blocs manqués ou des violations de sécurité, ce qui peut entraîner des pertes financières ou des dommages à leur réputation.
