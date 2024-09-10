---
sidebar_label: Éléments Principaux
hide_table_of_contents: false
sidebar_position: 2
description: Apprendre sur les éléments principaux du mécanisme de Satoshi Plus
---

# Mécanisme de Consensus Satoshi Plus

---

Le mécanisme de consensus Satoshi Plus représente une innovation révolutionnaire dans la technologie de la blockchain, spécifiquement développé pour la plateforme Core Chain afin de combiner de manière synergique la sécurité robuste du bitcoin avec la flexibilité et la scalabilité des contrats intelligents (autrement dit "smart contracts"). Ce modèle de consensus hybride fusionne la Preuve de Travail Déléguée (DPoW), la Preuve d’Enjeu Déléguée (DPoS) et le Staking de Bitcoin non-custodial. Cela permet aux mineurs de Bitcoin de participer directement à la gouvernance et à la sécurité de la plateforme décentralisée des contrats intelligents, sans coût supplémentaire. En s’appuyant sur l’infrastructure déjà en place du minage de Bitcoin, Satoshi Plus apporte non seulement une couche supplémentaire au protocole de sécurité, mais renforce également les structures d’incitation dans les deux écosystèmes, assurant un alignement équilibré des intérêts pour toutes les parties prenantes impliquées dans Core Chain.

![satoshi-plus](https://github.com/user-attachments/assets/8e90becb-71c2-4798-813c-27bcf6e1badb)

## Composants majeurs du mécanisme Satoshi Plus

Le mécanisme de consensus Satoshi Plus, conçu pour la Core Chain, intègre intelligemment à la fois la Preuve de Travail Déléguée (DPoW), la Preuve d’Enjeu Déléguée (DPoS) et le Staking de Bitcoin Non-Custodial. Ce système hybride est conçu pour exploiter les points forts de l’infrastructure du minage de Bitcoin déjà existante tout en intégrant de la flexibilité au mécanisme de staking qui prévalent dans de nombreuses blockchains modernes. Ci-dessous les différents composants, leurs rôles et comment ils interagissent afin de maintenir la sécurité et l’efficacité du réseau. Ci-dessous un diagramme illustrant comment les composants majeurs du mécanisme de consensus Satoshi Plus s’assemblent permettant un écosystème sécurisé et solide.

![component-diagram](../../../../static/img/staoshi-plus/component-diagram.jpg)

### 1. **Preuve de travail déléguée (DPoW)**

**Description:**
DPoW étend le traditionnel système de Preuve de Travail (PoW) utilisé par le Bitcoin afin d’inclure les fonctions de délégation. Cela permet aux mineurs de Bitcoin de participer au mécanisme de consensus de Core Chain sans altérer de manière significative leurs opérations de minages existantes.

**Fonctionnement:**

- **Participation des mineurs:** Les mineurs de Bitcoin contribuent à la sécurité de Core Chain en allouant une partie de leur puissance de calcul au réseau. Ceci est facilité via une implémentation unique où les mineurs incluent des métadonnées spécifiques (tel que l’adresse d’un validateur de Core et la destination de leurs récompenses en token Core) dans le champ op_return d’un bloc Bitcoin.
- **Déroulement des opérations:** Lorsqu’un mineur mine a un nouveau bloc Bitcoin, il ajoute cette information supplémentaire pour indiquer son soutien à un validateur Core. Cette puissance de hashage déléguée aide à la sécurité de Core Chain et, en retour, le mineur est récompensé via des tokens CORE supplémentaires.
  - **Mineurs de Bitcoin** - Les mineurs de Bitcoin sécurisent le réseau Bitcoin via le PoW et peuvent déléguer leur PoW à un validateur Core en incluant certaines informations dans la transaction coinbase d’un bloc comme il est en cours de minage. Cette délégation est non destructrice, cela signifie qu’ils réaffectent leur travail existant, sans choisir entre la sécurité du Bitcoin et celle de Core.

  - **Relayeurs** - Les relayeurs transmettent les entêtes de bloc Bitcoin au réseau Core. N’importe qui peut devenir un relayeur en s’enregistrant et bloquant un dépôt de token CORE remboursable.

### 2. **Preuve d’enjeu déléguée (DPoS)**

**Description:**
Le DPoS permet aux détenteurs de token BTC et CORE de s’engager dans la gouvernance du réseau en stakant leurs tokens avec les validateurs. Ce modèle promeut un processus de consensus plus démocratique et scalable comparé au traditionnel PoW.

**Fonctionnement:**

- **Staking et Vote:**
  Les détenteurs de Token stake leurs tokens CORE avec les validateurs en votant pour eux afin de participer au processus de consensus. Plus le nombre de token staké avec un validateur est élevé, plus l’influence dans les validations de transaction et la création de nouveaux blocs est grande.
- **Déroulement des opérations:** Les stakers délèguent leurs tokens aux validateurs via un processus sécurisé de staking sur la plateforme Core Chain. En échange, ils reçoivent des récompenses de staking sous forme de tokens CORE. Les tokens stakés contribuent à la sécurité globale du réseau et aux processus de prise de décision.
  - **Stakers de Bitcoin** - Le troisième volet du consensus de Satoshi Plus est le staking de Bitcoin non-custodial, qui permet, à n’importe quel détenteur de Bitcoin, de gagner un rendement en stakant leurs tokens bitcoin sans renoncer à leur garde.
  - **Stakers de Core** - Tous les détenteurs de tokens natif CORE de Core Chain sont en mesure de garantir la sécurité du réseau en déléguant leurs tokens à un validateur.

### 3. **Staking de Bitcoin Non-Custodial**

**Description:**
Le troisième composant le plus important du consensus de Satoshi Plus est le **Staking de Bitcoin Non-custodial**. Cette fonctionnalité permet aux détenteurs de BTC de s’engager dans la gouvernance du réseau en stakant leur BTC sur Core Chain et ensuite de les déléguer aux validateurs souhaités. Ce modèle promeut un processus de consensus plus démocratique et scalable comparé au traditionnel PoW.

**Fonctionnement:**

- **Staking et Vote:** Les détenteurs de BTC stake leurs actifs sur Core Chain et les délèguent aussi aux Validateurs souhaités sur Core Chain en votant pour eux afin de participer au processus de consensus. Plus le nombre de BTC staké est élevé avec un validateur, plus il aura de l’influence dans les validations de transactions et la création de nouveaux blocs.
- **Déroulement des opérations:** Les stakers délèguent leurs BTC aux Validateurs via un processus sécurisé de staking sur la plateforme Core Chain. En échange, ils reçoivent des récompenses de staking sous forme de tokens CORE. Les tokens stakés contribuent à la sécurité globale du réseau et aux processus de prise de décision.

### 4. **Validateurs**

**Description:**
Les validateurs sont indispensables au fonctionnement du mécanisme Satoshi Plus. Ils performent des fonctions critiques du réseau en incluant la distribution de bloc, la validation de transaction et la réussite du consensus. N’importe qui peut devenir un validateur Core en s’enregistrant sur le réseau et bloquant un dépôt de token CORE remboursable.

**Fonctionnement:**

- **Production de bloc:** Les validateurs sont responsables de la création de nouveaux blocs dans la blockchain Core Chain. Ils accumulent les transactions dans les blocs, les exécutent pour ensuite intégrer ces blocs à la blockchain.
- **Déroulement des opérations:** Les validateurs sont choisis pour produire des blocs basés sur leur nombre total de stake délégué (issue à la fois de la DPoW et de la DPoS). Le processus de sélection considère la quantité de puissance hashée et le nombre de token staké qui leur sont délégués, assurant que ceux apportant un plus grand support à la communauté aient plus de chance d’être sélectionnés pour la création de blocs.
  - **Election des validateurs** - L'ensemble des validateurs est déterminé par élection, avec des validateurs choisis en fonction de leur score hybride pour chaque tour. Chaque validateur qui est dans l’ensemble actuel des validateurs et qui n’a pas été emprisonné ou pénalisé est considéré "_actif_". Afin d’assurer une plus grande stabilité TPS, les validateurs sont mis-à-jour tous les **200** blocs, cela signifie que si des validateurs sont emprisonnés ou pénalisés, les autres peuvent continuer de miner les blocs normalement. Core utilise son mécanisme d'Élection de Validateur afin de classer le top **23** des validateurs basés sur le score hybride, créant un ensemble de validateurs pour une période de consensus de **200** créneaux, aussi appelé époque. Chaque créneau présente une opportunité de créer un bloc pour une durée de **3** secondes. Ainsi, chaque époque dure **600** secondes, ou **10** minutes, et donne au validateur jusqu’à **10** chances de créer un bloc une fois accepté pour une époque.

  - **Score Hybride** - A chaque nœud de validateur souhaitant faire partie de l’ensemble des validateurs est attribué un score hybride, qui est calculé en se basant sur trois facteurs : le DPoW des mineurs de Bitcoin, le DPoS des détenteurs de CORE, et les détenteurs de bitcoin déléguant leur bitcoin aux validateurs de leur choix. L’ensemble des validateurs est composé de **23** validateurs avec le plus grand score hybride.

  - **Vérificateurs** - Les vérificateurs sont responsables de signaler tout comportement malveillant sur le réseau. Un signalement de la sorte lors d’une vérification peut entraîner une pénalisation du validateur sur ses récompenses ou stakes, ou l’emprisonnement direct, et les vérificateurs sont rémunérés pour ce contrôle d’activité lorsque les récompenses du bloc sont distribuées. N’importe qui peut être vérificateur sur le réseau Core.

  - **Tour** - Un tour est la période durant laquelle le réseau Core met à jour son ensemble de validateurs et distribue ses récompenses. Actuellement, un tour correspond à une journée. Tous les tours (i.e. tous les jours), les validateurs reçoivent un score hybride, et les **23** validateurs avec le plus score hybride sont élus pour faire partie de l’ensemble des validateurs. L’ensemble des validateurs deviennent alors responsables de la production des blocs sur le réseau Core pour l’entièreté du tour. Lorsque le dernier bloc de chaque tour est produit, les récompenses accumulées pour le tour complet sont calculées et distribuées, et l’ensemble des validateurs pour le prochain tour est aussi déterminé.

  - **Créneau** - Chaque tour **d’une journée** est divisé en plusieurs créneaux, et tous les validateurs de l’ensemble des validateurs prennent à tour de rôle la production d’un bloc par créneau, chacun leur tour. Actuellement, la durée des créneaux est fixée à trois secondes. Pour chaque créneau, un validateur honnête peut alors soit réussir à produire un bloc, soit échouer (dans le cas ou il y aurait des soucis sur le réseau, des attaques Éclipses, etc.).

  - **Époque** - Une époque est le laps de temps durant lequel le système vérifie le statut de chaque validateur afin d’exclure les validateurs emprisonnés du consensus d’activité. Actuellement, une époque est fixée à **200** créneaux, c’est-à-dire **600** secondes ou encore **10** minutes. Le statut d’un validateur est vérifié une fois par époque (plutôt que de manière continue) afin de garder le TPS assez constant lors d’un tour donné.

### 5. **Alignement des Incitations**

**Description:**
Un aspect critique de Satoshi Plus est l’alignement des incitations entre les mineurs, stakers et validateurs. Cela assure que chaque partie prenante soit motivée d’agir dans le meilleur intérêt du réseau.

**Fonctionnement:**

- **Distribution des récompenses** Les mineurs tout comme les stakers reçoivent des récompenses en token CORE, alignant leur intérêt avec la santé du réseau. Ce système de double récompense encourage une participation et un soutien continu au réseau.
- **Déroulement des opérations:** Les récompenses sont calculées selon différents facteurs incluant la quantité de puissance de calcul et les tokens ayant contribués, et sont distribuées automatiquement dans le protocole Core Chain. Cela encourage une participation honnête et continue au réseau.

### 6. **Sécurité du Réseau et Symbiose**

**Description:**
Satoshi Plus renforce la sécurité à la fois des réseaux Bitcoin et Core Chain en créant une relation symbiotique où ce renforcement de sécurité est bénéfique à l’un comme l’autre.

**Fonctionnement:**

- **Un modèle de sécurité partagé:** En permettant aux mineurs de Bitcoin de participer au mécanisme de sécurité de Core Chain, le système tire parti de l’immense puissance de hashage du Bitcoin, renforçant ainsi la sécurité de Core Chain sans nécessité de ressource supplémentaire importante.
- **Déroulement des opérations:** Comme les mineurs et les stakers contribuent à la sécurité de Core Chain, les deux réseaux en bénéficient. Les mineurs utilisent leurs configurations existantes pour soutenir Core Chain, et les stakers fournissent des couches de sécurité supplémentaires via la délégation de token, créant un réseau robuste et résilient.

En résumé, le mécanisme de consensus Satoshi Plus intègre intelligemment ces composants dans un système cohérent qui bénéficient de la sécurité et de la décentralisation du processus de minage de Bitcoin ainsi que l’agilité et la capacité de gouvernance d’un modèle de staking moderne, encourageant un environnement blockchain sécurisé, efficace et scalable.
