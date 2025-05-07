---
sidebar_label: Staking de Bitcoin sur Core
hide_table_of_contents: false
sidebar_position: 2
---

# Self-Custodial Bitcoin Staking

This user guide is designed to walk you through staking your Bitcoin on the Core blockchain to earn CORE token rewards.

## Prérequis

Pour pouvoir staker, vous devez disposer des éléments suivants :

1. **Extension de navigateur de portefeuille Bitcoin pris en charge :** Pour participer au processus de staking de BTC, vous devez installer les extensions de navigateur de l'un des portefeuilles Bitcoin pris en charge, comme Xverse, Unisat, et/ou OKX Wallet (visitez stake.coredao.org pour les portefeuilles les plus récents pris en charge). Vous devez utiliser une version de bureau, car les portefeuilles mobiles et matériels ne sont pas actuellement pris en charge. Vous pouvez également staker directement en utilisant l'application mobile du portefeuille Element.
2. **Adresse de portefeuille Core pour les récompenses :** Préparez votre adresse de portefeuille Core pour recevoir les récompenses en tokens CORE pour le staking de Bitcoin. Si vous n'avez pas d'adresse de portefeuille Core, vous pouvez rapidement en créer une en vous connectant à MetaMask. Pour plus d'informations sur la configuration de MetaMask pour fonctionner avec le réseau Core, suivez le guide détaillé [ici](https://docs.coredao.org/docs/Dev-Guide/core-mainnet-wallet-config).

## **Considérations Clés pour le Staking de BTC**

Les points suivants sont des éléments clés auxquels les utilisateurs doivent faire attention lorsqu'ils stakent leur Bitcoin sur Core.

1. **Montant minimum de Bitcoin \+ frais de gas :** Le montant minimum de BTC requis pour le staking sur Core dépend de la méthode choisie. Si vous utilisez l'interface utilisateur officielle du site, vous devez staker au moins 0,01 BTC (hors frais de transaction). Il n'y a aucune exigence minimale lors du staking via script. De plus, les utilisateurs doivent prendre en compte les frais de gas en Bitcoin nécessaires aux transactions. Pour un staking de moins d'un mois, il est recommandé de disposer d'au moins 0,05 BTC afin de couvrir une éventuelle congestion du réseau, qui pourrait augmenter les frais de gas au-delà des récompenses de staking perçues.
2. **Durée minimale de staking :** La durée minimale de staking dépend de la méthode utilisée. L'interface utilisateur officielle impose un minimum de 5 jours, tandis le script ne comporte aucune période de blocage.
3. **Comprendre les Différences dans les Adresses de Staking de Bitcoin :**
  - L'adresse de staking dans l'invite de transaction de votre portefeuille Bitcoin peut différer de votre adresse Bitcoin d'origine. Cela est dû au fait que l'adresse de staking de Bitcoin est dérivée de la clé privée principale de votre portefeuille Bitcoin, garantissant le contrôle et la sécurité de vos actifs. Vos Bitcoins restent en sécurité dans l'adresse de staking de Bitcoin, non affectés par le staking.
4. **Délais pour que les Actifs Verrouillés Apparaissent dans votre Portefeuille Bitcoin :**
  - Vous pouvez rencontrer des délais avant que votre Bitcoin verrouillé ne soit affiché dans vos portefeuilles Bitcoin. Ce délai résulte principalement de retards dans la confirmation des transactions sur le réseau Bitcoin, qui peuvent prendre plusieurs heures en raison du temps de bloc, du nombre de confirmations de blocs requises et de la congestion du réseau.
  - Bien que nous travaillions activement avec les partenaires de portefeuilles pour soutenir l'affichage en temps opportun de vos actifs dans vos portefeuilles, vous pouvez vérifier vos actifs verrouillés sur la page "MyStaking" sur le site de staking de Core.
  - Vous pouvez également visualiser vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, comme [Mempool.space](https://mempool.space/).
5. **Considérations pour les Périodes de Verrouillage**
  - Une fois que vous avez verrouillé vos Bitcoins pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking. En tenant compte de vos objectifs d'investissement et de votre tolérance au risque, il vous est conseillé de choisir judicieusement votre période de verrouillage. Commencer avec des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

## Workflow of Self-Custodial BTC Staking

Self-custodial Bitcoin staking introduces a secure and decentralized method for Bitcoin holders to earn staking rewards. By locking your Bitcoin natively on the Bitcoin network through a time-bound mechanism, you can actively participate in the Core blockchain's consensus mechanism while staking. Voici les étapes impliquées dans ce processus.

1. **Initier le Staking :** Commencez par accéder soit à l'outil de [staking BTC basé sur l'outil CLI](https://github.com/coredao-org/btc-staking-tool) (pour les utilisateurs techniques), soit à la [plateforme de staking en ligne](https://stake.coredao.org/) (pour les utilisateurs généraux).
2. **Staker du Bitcoin avec un Verrouillage Temporel :** Vous stakez vos Bitcoins en envoyant une transaction sur le réseau Bitcoin avec un paramètre de verrouillage temporel, et vos Bitcoin restent verrouillés jusqu'à la fin de la période spécifiée. Assurez-vous de suivre les exigences pour qu'une transaction soit valide et éligible ; référez-vous ici pour (../btc-staking/design#requirements-for-transaction-validity)  plus de détails.
  1. **La durée minimale de staking dépend de la méthode choisie.** L'interface utilisateur officielle du site exige un minimum de 5 jours, tandis que le script ne comporte aucune période de blocage. Par conséquent, assurez-vous de choisir soigneusement vos périodes de blocage.
  2. Incluez l'adresse du validateur Core pour déléguer vos actifs.
  3. Incluez l'adresse de votre portefeuille Core pour les récompenses.
3. **Voter pour des Validateurs :** En incluant l'adresse des validateurs Core dans votre transaction, vous pouvez déléguer votre Bitcoin staké au validateur choisi sur la blockchain Core.
4. **Connecter un portefeuille Core pour les récompenses :** Dans le champ de retour, vérifiez votre adresse de portefeuille Core ; vous recevrez les récompenses en tokens CORE à cette adresse.
5. **Réclamer les Récompenses :** Les récompenses accumulées en tokens CORE apparaîtront également sur le [site de staking](http://stake.coredao.org/). Les récompenses en tokens CORE apparaîtront lorsque les utilisateurs connecteront leurs portefeuilles et pourront être réclamées quotidiennement. Aussi, pour être éligible à recevoir des récompenses, il est nécessaire de compléter un cycle complet de staking (00:00:00 - 23:59:29 UTC).
6. **Récupérer des Bitcoin:** Une fois la période de verrouillage du staking expirée, les Bitcoin stakés resteront inactifs dans l'adresse de staking jusqu'à ce qu'ils soient récupérés par l'utilisateur.

## Self-Custodial Bitcoin Staking Walkthrough

Pour commencer à staker votre Bitcoin sur la blockchain Core et gagner des récompenses de staking en tokens CORE, suivez les étapes détaillées ci-dessous pour staker du Bitcoin via le [site officiel de staking](http://stake.coredao.org/) de Core.

### Connecter le Portefeuille Core

1. Visitez [https://stake.coredao.org](https://stake.coredao.org/) et cliquez sur **Validators** dans l'en-tête supérieur.

2. Cliquez sur **Connect Wallet** en haut à droite de l'en-tête pour connecter votre portefeuille Core. Dans la liste des portefeuilles pris en charge, choisissez votre portefeuille Core souhaité. Pour ce guide, nous avons utilisé MetaMask.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-1.png)
</p>

3. Confirmez la notification du portefeuille pour autoriser la connexion au site de staking.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-2.png)
</p>

### Sélection d'un Validateur Core pour la Délégation de Bitcoin

4. Une fois sur la page **Validators**, faites défiler vers le bas pour voir la liste des validateurs Core et choisissez le validateur auquel vous souhaitez déléguer vos Bitcoins. Veuillez vous assurer de choisir des validateurs actifs.

<p align="center" >
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-3.png)
</p>

5. En cliquant sur le nom du validateur souhaité, vous serez dirigé vers la page **Validator Details**. Cette page affiche les détails sur les enregistrements de staking/délégation pour le validateur sélectionné.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-4.png)
</p>

6. Cliquez sur le bouton **Stake**, puis sélectionnez **BTC**

<p align="center"  style={{zoom:"60%"}}>
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-5.png)
</p>

7. Pour connecter votre portefeuille Bitcoin, cliquez sur le portefeuille pris en charge de votre choix. Pour ce guide, nous avons sélectionné Unisat.

<p align="center" style={{zoom:"80%"}}>
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-6.png)
</p>

8. Une fois votre portefeuille Bitcoin connecté, il est important de comprendre et de spécifier plusieurs paramètres clés :

- Spécifier le montant de Bitcoin que vous souhaitez déléguer
  - Le montant minimum à déléguer est de 0,01 Bitcoin, si la délégation se fait via l'interface officielle du site.
  - Dans notre exemple, nous déléguerons 0,05 Bitcoin, ce qui satisfait à cette exigence
- Définir le temps de verrouillage détermine quand votre Bitcoin staké sera déverrouillé et disponible à nouveau pour la récupération ou la redélégation.
  - Sélectionnez à l'intérieur de la boîte de temps de verrouillage pour entrer des valeurs, ou cliquez sur l'icône du calendrier pour sélectionner la date et cliquez sur ’OK’ pour continuer.
  - Le temps de verrouillage par défaut est fixé à un mois à l'avance.
- Spécifier la priorité du réseau pour votre transaction

<p align="center" style={{zoom:"60%"}}>
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-7.png)
</p>

9. Notez que **l'Adresse de Récompense sur Core** est récupérée depuis le portefeuille Core connecté. Vous devriez connecter le portefeuille Core avec la même adresse sur laquelle vous souhaitez recevoir les récompenses de staking en tokens CORE.
10. Cliquez sur **Confirm** pour compléter la transaction.

:::note
Remarque : Pour le staking de BTC, le transfert du validateur de staking interrompra le staking, entraînant la perte des récompenses pour cette journée.
:::

### Confirmer la Sortie OP\_Return

11. Avant de signer la transaction dans votre portefeuille, vérifiez les sorties de la transaction pour vous assurer qu'elles incluent une sortie OP\_Return. La sortie OP\_Return est l'endroit où votre redeem\_script est enregistré et est essentiellement utilisé pour récupérer votre Bitcoin staké. Il peut y avoir deux ou trois sorties, mais au moins une doit toujours être OP\_Return. Annulez la transaction si elle n'inclut pas la sortie OP\_Return.

<p align="center" style={{zoom:"80%"}}>
![dual-staking-on-core](../../../../static/img/dual-staking/dual-staking-15.png)
</p>

12. Une fois que vous avez confirmé la transition, vous recevrez une notification **Transaction Submitted**. Vous pouvez vérifier votre transaction en cliquant sur **View on BTC Explorer**.

<p align="center" >
![btc-staking-on-core](../../../../static/img/native-staking/native-staking-13.avif)
</p>

### Vérifier l'adresse de staking BTC

13. Avant de procéder à la confirmation de votre transaction de staking. Cette fonctionnalité de vérification permet aux utilisateurs de vérifier indépendamment leur adresse de staking BTC, contribuant à prévenir les signatures aveugles et à renforcer la sécurité du processus de staking.

14. Pour procéder à la vérification, cliquez sur le bouton **Verify the BTC Staking Address**. Cela vous redirigera vers le site Web externe.

<p align="center" style={{zoom:"60%"}}>![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification.png)</p>

15. Sur l'interface utilisateur du site Web de vérification, assurez-vous que les données récupérées sont correctes, puis cliquez sur le bouton _Submit_.

<p align="center" style={{zoom:"35%"}}>![btc-staking-address-verification](../../../../static/img/btc-staking/external-verification-UI.png)</p>

16. Le résultat de la vérification apparaîtra dans la section **Verification Result**.

<p align="center" style={{zoom:"60%"}}>![btc-staking-address-verification](../../../../static/img/btc-staking/btc-staking-address-verification-result.png)</p>

17. Une fois vérifié, revenez sur (stake.coredao.org) et continuez en cliquant sur **Approve Transaction**.

<p align="center">![btc-staking-approve-tx](../../../../static/img/btc-staking/approve-tx.png)</p>

### Visualiser les Enregistrements de Staking

18. Dans le coin supérieur droit du site de staking, survolez votre portefeuille connecté et cliquez sur **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

19. La page **My Staking** affiche les enregistrements de tout votre staking (CORE, BTC et hash). Cliquez sur l'onglet **BTC Records** pour afficher les détails de vos délégations BTC.

<p align="center" style={{zoom:"80%"}}>
![btc-staking-on-core](../../../../static/img/native-staking/updated-ui/staking-guide-9.png)
</p>

**Félicitations!!** Vous avez réussi à staker vos Bitcoins sur la blockchain Core et gagnerez désormais activement des tokens CORE à partir de vos BTC délégués. Through staking Bitcoin and helping to elect validators on Core, you actively contribute to the security of the Core network, supporting its decentralization and stability.
