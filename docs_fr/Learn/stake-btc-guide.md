---
sidebar_label: Staking BTC sur Core
hide_table_of_contents: false
sidebar_position: 2
---

# Staking Non-Custodial de BTC

Ce guide technique est conçu pour vous guider à travers le processus de staking de vos Bitcoin (BTC) sur la blockchain Core afin de gagner des récompenses en tokens CORE. Avec le staking non-custodial de BTC, vous pouvez gagner un revenu passif en CORE tout en conservant la propriété de vos actifs en Bitcoin. Plongeons dans le fonctionnement du staking et comment vous pouvez commencer dès aujourd'hui.

## Prérequis

Les éléments suivants doivent être satisfaits avant de compléter ce guide:

1. **Portefeuille(s) Xverse et/ou Unisat:** Vous devez ajouter des portefeuille(s) [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB\\&authuser=1) et/ou [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo) via une extension Chrome pour participer au processus de staking. (_Uniquement sur un ordinateur de bureau, les portefeuilles mobiles et physiques ne sont pas encore supportés_)

2. **Adresse de Portefeuille Core pour les Récompenses:** Préparez votre adresse de portefeuille Core où vous recevrez les récompenses en tokens CORE pour le staking de vos BTC. Si vous n'avez pas encore d'adresse Core, vous pouvez en créer une facilement en vous connectant à MetaMask.

**1. Ajouter le réseau Core à MetaMask via Core Explorer:**

- Allez sur [coredao.org](http://coredao.org) et faites défiler jusqu'en bas de la page

![native-staking-guide](../../../../static/img/native-staking/native-staking-1.avif)

- Cliquez sur le bouton ‘Add Core Network‘
- Approuvez dans MetaMask

![native-staking-guide](../../../../static/img/native-staking/native-staking-2.png)

2. Alternativement, vous pouvez également suivre ce guide : [Ajouter Core à MetaMask](https://medium.com/@core\_dao/add-core-to-metamask-7b1dd90041ce) pour des instructions plus détaillées afin d'entrer les informations du réseau manuellement.

## Avant de Commencer le Staking

Clarifions le mécanisme de staking afin que vous sachiez à quoi vous attendre avec le staking non-custodial de BTC.

1. **Minimum de 0,01 BTC + Frais de Gas:**

   - **Pourquoi c'est nécessaire:** Pour assurer une expérience de staking fluide, vous devez avoir un minimum de **0,01 BTC** disponible ainsi que les frais de gas nécessaires pour exécuter les transactions sur le réseau Bitcoin. Les frais de gas couvrent le coût du traitement des transactions sur la blockchain. De plus, nous recommandons d'avoir au moins **0,05 BTC** si vous staker pour moins **d'un mois**. Ce montant supplémentaire sert de marge de sécurité en cas de congestion du réseau, où les prix du gas pourraient dépasser les récompenses de staking gagnées.

2. **Comprendre les Différences d'Adresse de Staking**

   - **Ce qui se passe:** Vous pourriez remarquer que l'adresse de staking fournie diffère de votre adresse Bitcoin originale.
   - **Ce que cela signifie:** L'adresse de staking est dérivée de la clé privée principale de votre portefeuille, garantissant votre contrôle et la sécurité de vos actifs. Vos Bitcoin restent stockés en toute sécurité dans l'adresse de staking contrôlée par votre clé privée, sans être affectés par le staking. Nous travaillons activement avec des partenaires de portefeuilles pour afficher vos actifs stakés dans les portefeuilles en temps opportun.
   - Vous pouvez consulter vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, [Mempool.space](https://mempool.space/) est une option que nous recommandons. Nous travaillons activement pour rendre les actifs stakés visibles dans les portefeuilles.

3. **Considérations pour les Périodes de Verrouillage**

   - **Rappel important:** Une fois que vous avez verrouillé vos Bitcoin pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking.
   - **Choisir judicieusement:** Nous vous conseillons de sélectionner soigneusement votre période de verrouillage en fonction de vos objectifs d'investissement et de votre tolérance au risque. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

   Ces rappels visent à vous apporter clarté et confiance avant de vous lancer dans votre aventure de staking non-custodial de BTC. Votre compréhension et préparation sont essentielles pour une expérience de staking réussie. Passons maintenant à un guide étape par étape pour staker vos Bitcoin sur la blockchain Core et gagner des récompenses en tokens Core.

## Fonctionnement du Staking Non-custodial de BTC

### Aperçu du Processus de Staking

Le staking non-custodial de BTC offre une méthode sécurisée et décentralisée pour que les détenteurs de Bitcoin puissent gagner des récompenses. En verrouillant vos Bitcoin sur le réseau d'origine via un mécanisme à durée déterminée, vous pouvez participer activement au mécanisme de consensus de la blockchain Core tout en stakant. Voici les étapes impliquées dans ce processus.

1. **Initier le Staking:** Commencez par accéder à la plateforme de staking en utilisant soit [l'interface en ligne de commande pour les utilisateurs techniques](https://github.com/coredao-org/btc-staking-tool), soit l'interface web frontend pour les utilisateurs généraux via [https://stake.coredao.org](https://stake.coredao.org)
2. **Staker des BTC avec un Verrouillage Temporel:** Stakez vos Bitcoin en envoyant une transaction sur le réseau Bitcoin avec un paramètre de verrouillage temporel, garantissant que vos BTC restent verrouillés jusqu'à la fin de la période spécifiée. La période de staking minimale est de **10 jours**.
3. **Voter pour des Validateurs:** Déléguez vos BTC stakés au validateur choisi sur la blockchain Core.
4. **Connecter le Portefeuille Core pour les Récompenses:** Vérifiez votre adresse Core dans le champ de retour, où vous recevrez les récompenses en tokens Core.
5. **Réclamer les Récompenses:** Les récompenses en tokens Core apparaîtront lorsque les utilisateurs connecteront leur portefeuille et peuvent être réclamées quotidiennement. Les récompenses en tokens Core apparaîtront sur le [site de staking](https://stake.coredao.org).
6. **Récupérer des BTC:** Une fois la période de verrouillage du staking expirée, les BTC stakés resteront inactifs dans l'adresse de staking jusqu'à ce qu'ils soient récupérés par l'utilisateur.

## Guide de Staking Non-Custodial de BTC

Pour commencer à staker vos Bitcoin sur la blockchain Core et gagner des récompenses en tokens Core, suivez ces étapes:

### Connecter Votre Portefeuille

La connexion de votre portefeuille est la première étape pour accéder à la plateforme de staking et initier le processus. Cela vous permettra d'interagir avec la blockchain Core et de participer au staking non-custodial de BTC.

1. Visitez [https://stake.coredao.org](https://stake.coredao.org)

2. Une fois sur le site, localisez et cliquez sur le bouton "**Connecter le Portefeuille**".

![native-staking-guide](../../../../static/img/native-staking/native-staking-3.avif)

3. **Choisissez un portefeuille disponible**

   - Si vous n'avez pas encore de portefeuille, consultez la section **[Portefeuille Core pour Récompenses](#prerequisites)** dans les prérequis ci-dessus.

4. **Choisir un Validateur pour Déléguer des BTC**

Ici, nous allons sélectionner un validateur auquel déléguer nos BTC. Dans l'exemple donné, nous choisirons le Validateur 4, mais vous êtes libre de choisir n'importe quel validateur actif.

```
1. Cliquez sur le nom du validateur choisi pour le sélectionner
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-4.avif)

```
2. Survolez Déléguer, puis sélectionnez ‘BTC‘ dans le menu déroulant
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-5.avif)

### Connecter le Portefeuille BTC

```
1. Après avoir sélectionné un validateur pour déléguer des BTC à l'étape précédente, vous serez invité à connecter un portefeuille BTC
```

:::info
Dans cet exemple, nous utilisons le portefeuille Unisat, mais il est également compatible avec le portefeuille Xverse. Assurez-vous d'avoir installé l'un de ces deux portefeuilles.
:::

```
2. Sur l'écran contextuel de connexion de portefeuille, sélectionnez un portefeuille disponible.
```

- Pour les développeurs et utilisateurs avancés intéressés par l'utilisation de l'Outil de Staking, veuillez vous référer [ici.](https://github.com/coredao-org/btc-staking-tool?tab=readme-ov-file)

![native-staking-guide](../../../../static/img/native-staking/native-staking-6.png)

```
3. Sur l'écran suivant, cliquez sur **Connecter**
```

![native-staking-guide](../../../../static/img/native-staking/native-staking-7.avif)

### Déléguer des BTC

Lors de l'initiation du processus de délégation, il est important de comprendre et de spécifier plusieurs paramètres clés:

1. **Spécifier le montant de BTC que vous souhaitez déléguer**

- Le montant minimum à déléguer est de **0,01 BTC**
- Dans notre exemple, nous déléguerons **0,05 BTC**, ce qui satisfait cette exigence

![native-staking-guide](../../../../static/img/native-staking/native-staking-8.avif)

2. **Définir le temps de verrouillage:** – Cela détermine quand vos BTC stakés seront déverrouillés et disponibles à nouveau sur votre appareil local.

- Sélectionnez l'intérieur de la boîte de temps de verrouillage pour saisir les valeurs
- Le temps de verrouillage par défaut est fixé à un mois à l'avance. Le temps de verrouillage minimum est de **10 jours.**
- Dans notre exemple, nous avons sélectionné une date 10 jours à l'avance (24 avril)
- Cliquez sur ‘**OK**’ pour continuer

![native-staking-guide](../../../../static/img/native-staking/native-staking-9.avif)

3. Spécifier la priorité du réseau pour votre transaction

![native-staking-guide](../../../../static/img/native-staking/native-staking-10.avif)

4. Finalement, cliquez sur ‘**Confirmer la Délégation**’ pour ‘**déléguer vos BTC**’

![native-staking-guide](../../../../static/img/native-staking/native-staking-11.avif)

5. Avant de signer la transaction dans votre portefeuille, vérifiez les sorties de transaction pour vous assurer qu'elles incluent une sortie OP\_Return.  La sortie OP\_Return est située là où votre redeem\_script est sauvegardé, essentiel pour récupérer vos BTC stakés. Il peut y avoir 2 ou 3 sorties, mais au moins une doit toujours être OP\_Return. Annulez la transaction si elle n'inclut pas la sortie OP\_Return.

![native-staking-guide](../../../../static/img/native-staking/native-staking-12.avif)

6. Vérifier la Soumission de la Transaction

![native-staking-guide](../../../../static/img/native-staking/native-staking-13.avif)

5. Depuis n'importe quel écran CORE, survolez votre portefeuille connecté dans le coin supérieur droit et cliquez sur ‘**Mes Stakings**’.

![native-staking-guide](../../../../static/img/native-staking/native-staking-14.png)

6. Sur l'écran du **Délégateur**, recherchez la colonne **BTC(x)** et cliquez.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-15.avif)

7. Vérifiez que le validateur choisi est en attente de confirmation de la transaction.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-16.avif)

8. Vérifiez que votre validateur choisi indique **Récompense en cours** sous **Temps** de **Récupération**.

   ![native-staking-guide](../../../../static/img/native-staking/native-staking-17.avif)

**Félicitations.** Vous avez réussi à staker vos BTC sur la blockchain Core et gagnerez désormais activement des tokens CORE à partir de vos BTC délégués. Grâce au staking de BTC et au vote pour les validateurs, vous contribuez activement à la gouvernance et à la sécurité du réseau Core, en aidant à maintenir son équilibre et sa décentralisation.

Nous sommes ravis que vous ayez choisi de découvrir BTCfi avec le staking Non-Custodial de BTC sur Core!
