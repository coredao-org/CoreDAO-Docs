---
sidebar_label: Staking de Bitcoin sur Core
hide_table_of_contents: false
sidebar_position: 2
---

# Staking Non-Custodial de Bitcoin

Ce guide utilisateur est conçu pour vous accompagner dans le staking de votre Bitcoin sur la blockchain Core afin de gagner des récompenses en tokens CORE. Avec le Staking de Bitcoin Non-Custodial, vous pouvez gagner un rendement passif en CORE tout en conservant la propriété complète de vos actifs Bitcoin. Plongeons dans le fonctionnement du staking et comment vous pouvez commencer dès aujourd'hui.

## Prérequis

Pour pouvoir staker, vous devez disposer des éléments suivants :

1. **Extension de navigateur de portefeuille Bitcoin pris en charge :** Pour participer au processus de staking de BTC, vous devez installer les extensions de navigateur de l'un des portefeuilles Bitcoin pris en charge, comme [Xverse](https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg?hl=en-GB\&authuser=1), [Unisat](https://chromewebstore.google.com/detail/unisat-wallet/ppbibelpcjmhbdihakflkdcoccbgbkpo), et/ou [OKX Wallet](https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge) (visitez stake.coredao.org pour les portefeuilles les plus récents pris en charge). Vous devez utiliser une version de bureau, car les portefeuilles mobiles et matériels ne sont pas actuellement pris en charge. Vous pouvez également staker directement en utilisant l'application mobile du [portefeuille Element](https://www.elementwallet.com/).
2. **Adresse de portefeuille Core pour les récompenses :** Préparez votre adresse de portefeuille Core pour recevoir les récompenses en tokens CORE pour le staking de Bitcoin. Si vous n'avez pas d'adresse de portefeuille Core, vous pouvez rapidement en créer une en vous connectant à MetaMask. Pour plus d'informations sur la configuration de MetaMask pour fonctionner avec le réseau Core, suivez le guide détaillé [ici](https://docs.coredao.org/docs/Dev-Guide/core-mainnet-wallet-config).

## **Considérations Clés pour le Staking de BTC**

Les points suivants sont des éléments clés auxquels les utilisateurs doivent faire attention lorsqu'ils stakent leur Bitcoin sur Core.

1. **Minimum de 0,01 Bitcoin \+ Frais de Gaz :** Pour staker avec succès votre Bitcoin sur Core, vous avez besoin d'un minimum de 0,01 Bitcoin. En plus du montant de staking, les utilisateurs doivent prendre en compte les frais de gaz nécessaires en Bitcoin pour exécuter des transactions sur le réseau Bitcoin. Si vous prévoyez de staker pour moins d'un mois, il est conseillé de disposer d'au moins 0,05 Bitcoin. Ce montant supplémentaire aide à couvrir une éventuelle congestion du réseau, qui peut entraîner des prix du gaz plus élevés que les récompenses obtenues du staking.
2. **Comprendre les Différences dans les Adresses de Staking de Bitcoin :**
   - L'adresse de staking dans l'invite de transaction de votre portefeuille Bitcoin peut différer de votre adresse Bitcoin d'origine. Cela est dû au fait que l'adresse de staking de Bitcoin est dérivée de la clé privée principale de votre portefeuille Bitcoin, garantissant le contrôle et la sécurité de vos actifs. Vos Bitcoins restent en sécurité dans l'adresse de staking de Bitcoin, non affectés par le staking.
3. **Délais pour que les Actifs Verrouillés Apparaissent dans votre Portefeuille Bitcoin :**
   - Vous pouvez rencontrer des délais avant que votre Bitcoin verrouillé ne soit affiché dans vos portefeuilles Bitcoin. Ce délai résulte principalement de retards dans la confirmation des transactions sur le réseau Bitcoin, qui peuvent prendre plusieurs heures en raison du temps de bloc, du nombre de confirmations de blocs requises et de la congestion du réseau.
   - Bien que nous travaillions activement avec les partenaires de portefeuilles pour soutenir l'affichage en temps opportun de vos actifs dans vos portefeuilles, vous pouvez vérifier vos actifs verrouillés sur la page "MyStaking" sur le site de staking de Core.
   - Vous pouvez également visualiser vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, comme [Mempool.space](https://mempool.space/).
4. **Considérations pour les Périodes de Verrouillage**
   - Une fois que vous avez verrouillé vos Bitcoins pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking. En tenant compte de vos objectifs d'investissement et de votre tolérance au risque, il vous est conseillé de choisir judicieusement votre période de verrouillage. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

## Déroulement du staking Non-custodial de BTC

Le staking de Bitcoin non-custodial introduit une méthode sécurisée et décentralisée pour que les détenteurs de Bitcoin gagnent des récompenses de staking. En verrouillant votre Bitcoin nativement sur le réseau Bitcoin via un mécanisme lié au temps, vous pouvez participer activement au mécanisme de consensus de la blockchain Core pendant le staking. Voici les étapes impliquées dans ce processus.

1. **Initier le Staking :** Commencez par accéder soit à l'outil de [staking BTC basé sur l'outil CLI](https://github.com/coredao-org/btc-staking-tool) (pour les utilisateurs techniques), soit à la [plateforme de staking en ligne](https://stake.coredao.org/) (pour les utilisateurs généraux).
2. **Staker du Bitcoin avec un Verrouillage Temporel :** Vous stakez vos Bitcoins en envoyant une transaction sur le réseau Bitcoin avec un paramètre de verrouillage temporel, et vos Bitcoin restent verrouillés jusqu'à la fin de la période spécifiée. Assurez-vous de suivre les exigences pour qu'une transaction soit valide et éligible ; référez-vous [ici](https://docs.google.com/document/d/1DfhLwMfANGYhcJe4UiyRJxpw1FvFX6k-QQK4cMYYOls/edit?tab=t.0#heading=h.mwjq55dgslw5) pour plus de détails.
   1. La période de staking minimale est de 10 jours.
   2. Incluez l'adresse du validateur Core pour déléguer vos actifs.
   3. Incluez l'adresse de votre portefeuille Core pour les récompenses.
3. **Voter pour des Validateurs :** En incluant l'adresse des validateurs Core dans votre transaction, vous pouvez déléguer votre Bitcoin staké au validateur choisi sur la blockchain Core.
4. **Connecter un portefeuille Core pour les récompenses :** Dans le champ de retour, vérifiez votre adresse de portefeuille Core ; vous recevrez les récompenses en tokens CORE à cette adresse.
5. **Réclamer les Récompenses :** Les récompenses accumulées en tokens CORE apparaîtront également sur le [site de staking](http://stake.coredao.org/). Les récompenses en tokens CORE apparaîtront lorsque les utilisateurs connecteront leurs portefeuilles et pourront être réclamées quotidiennement.
6. **Récupérer des Bitcoin:** Une fois la période de verrouillage du staking expirée, les Bitcoin stakés resteront inactifs dans l'adresse de staking jusqu'à ce qu'ils soient récupérés par l'utilisateur.

## Guide de Staking Non-Custodial de Bitcoin

Pour commencer à staker votre Bitcoin sur la blockchain Core et gagner des récompenses de staking en tokens CORE, suivez les étapes détaillées ci-dessous pour staker du Bitcoin via le [site officiel de staking](http://stake.coredao.org/) de Core.

### Connecter le Portefeuille Core

1. Visitez [https://stake.coredao.org](https://stake.coredao.org/) et cliquez sur **Validators** dans l'en-tête supérieur.

2. Cliquez sur **Connect Wallet** en haut à droite de l'en-tête pour connecter votre portefeuille Core. Dans la liste des portefeuilles pris en charge, choisissez votre portefeuille Core souhaité. Pour ce guide, nous avons utilisé MetaMask.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-1.png)
</p>

3. Confirmez la notification du portefeuille pour autoriser la connexion au site de staking.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-2.png)
</p>

### Sélection d'un Validateur Core pour la Délégation de Bitcoin

4. Une fois sur la page **Validators**, faites défiler vers le bas pour voir la liste des validateurs Core et choisissez le validateur auquel vous souhaitez déléguer vos Bitcoins. Veuillez vous assurer de choisir des validateurs actifs.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-3.png)
</p>

5. En cliquant sur le nom du validateur souhaité, vous serez dirigé vers la page **Validator Details**. Cette page affiche les détails sur les enregistrements de staking/délégation pour le validateur sélectionné.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-4.png)
</p>

6. Cliquez sur le bouton **Stake**, puis sélectionnez **BTC**

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-5.png)
</p>

7. Pour connecter votre portefeuille Bitcoin, cliquez sur le portefeuille pris en charge de votre choix. Pour ce guide, nous avons sélectionné Unisat.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-6.png)
</p>

8. Une fois votre portefeuille Bitcoin connecté, il est important de comprendre et de spécifier plusieurs paramètres clés :

- Spécifiez le montant de Bitcoin que vous souhaitez déléguer. Le montant minimum à déléguer est de **0,01 Bitcoin**.
- Définir le temps de verrouillage détermine quand votre Bitcoin staké sera déverrouillé et disponible à nouveau pour la récupération ou la redélégation.
  - Vous pouvez entrer des valeurs en sélectionnant à l'intérieur de la boîte de temps de verrouillage ou en cliquant sur l'icône du calendrier pour sélectionner la date et cliquer sur "OK" pour continuer.
  - Le temps de verrouillage par défaut est fixé à un mois à l'avance. Le temps de verrouillage minimum est de **10 jours**.
- Spécifier la priorité du réseau pour votre transaction

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-7.png)
</p>

9. Notez que **l'Adresse de Récompense sur Core Chain** est récupérée depuis le portefeuille Core connecté. Vous devriez connecter le portefeuille Core avec la même adresse sur laquelle vous souhaitez recevoir les récompenses de staking en tokens CORE.
10. Cliquez sur **Confirm** pour compléter la transaction.

### Confirmer la Sortie OP\_Return

11. Avant de signer la transaction dans votre portefeuille, vérifiez les sorties de la transaction pour vous assurer qu'elles incluent une sortie OP\_Return. La sortie OP\_Return est l'endroit où votre redeem\_script est enregistré et est essentiellement utilisé pour récupérer votre Bitcoin staké. Il peut y avoir deux ou trois sorties, mais au moins une doit toujours être OP\_Return. Annulez la transaction si elle n'inclut pas la sortie OP\_Return.

<p align="center">
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

12. Une fois que vous avez confirmé la transition, vous recevrez une notification **Transaction Submitted**. Vous pouvez vérifier votre transaction en cliquant sur **View on BTC Explorer**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/native-staking-13.avif)
</p>

### Visualiser les Enregistrements de Staking

13. Dans le coin supérieur droit du site de staking, survolez votre portefeuille connecté et cliquez sur **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

14. La page **My Staking** affiche les enregistrements de tout votre staking (CORE, BTC et hash). Cliquez sur l'onglet **BTC Records** pour afficher les détails de vos délégations BTC.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-9.png)
</p>

**Félicitations!!** Vous avez réussi à staker vos Bitcoins sur la blockchain Core et gagnerez désormais activement des tokens CORE à partir de vos BTC délégués. En stakant du Bitcoin et en votant pour des validateurs sur Core, vous contribuez activement à la gouvernance et à la sécurité du réseau Core, soutenant sa décentralisation et sa stabilité.
