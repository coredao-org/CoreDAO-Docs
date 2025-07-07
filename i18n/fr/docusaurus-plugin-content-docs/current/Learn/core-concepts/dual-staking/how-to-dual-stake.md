---
sidebar_label: Comment faire du double staking
hide_table_of_contents: false
sidebar_position: 2
---

# Comment faire du double staking

---

Il existe plusieurs façons de participer au staking double avec BTC et CORE, selon vos outils préférés et votre niveau d'expérience :

**Via le site Web officiel de Core**: Une interface conviviale pour la plupart des utilisateurs pour commencer le staking directement.

**Utilisation des outils CLI et des contrats intelligents** : Idéal pour les développeurs et les utilisateurs avancés qui préfèrent interagir directement avec le protocole. Les utilisateurs peuvent miser leur Bitcoin en utilisant l'outil CLI de staking BTC et miser CORE en interagissant directement avec les contrats intelligents de staking.

**Via des dépositaires de confiance** : Staker via des dépositaires institutionnels tels que BitGo, Copper ou Hex Trust pour une sécurité accrue et une commodité opérationnelle.

## Prérequis

Pour démarrer et pouvoir effectuer un double staking CORE et BTC via le site Web officiel de staking de Core, vous devez avoir les prérequis suivants :

**Extension de navigateur de portefeuille Bitcoin prise en charge** : Pour participer au processus de staking Bitcoin, vous devez installer les extensions de navigateur des portefeuilles Bitcoin pris en charge, tels que Xverse, Unisat et/ou OKX Wallet (référez-vous ici pour les derniers portefeuilles pris en charge). Vous devez utiliser la version bureau lorsque vous utilisez le site Web officiel de staking. Vous pouvez également staker directement en utilisant l'application mobile du portefeuille Element.

**Adresse de portefeuille Core pour les récompenses** : Préparez votre adresse de portefeuille Core pour staker CORE et recevoir des récompenses en tokens CORE pour le staking de Bitcoin. Si vous n'avez pas d'adresse de portefeuille Core, vous pouvez rapidement en créer une en vous connectant à MetaMask. Pour plus d'informations sur la configuration de MetaMask pour fonctionner avec le réseau Core, suivez le guide détaillé ici.

## Considérations clés pour le double staking

Les points suivants sont des éléments clés auxquels les utilisateurs doivent faire attention lorsqu'ils stakent leur Bitcoin sur Core.

**Montant minimum de Bitcoin \+ frais de gas :** Le montant minimum de Btc requis pour le staking sur Core dépend de la méthode choisie. Si vous utilisez l'interface utilisateur officielle du site, vous devez staker au moins 0,01 BTC (hors frais de transaction). Il n'y a aucune exigence minimale lors du staking via script. De plus, les utilisateurs doivent prendre en compte les frais de gas en Bitcoin nécessaires aux transactions. Pour un staking de moins d'un mois, il est recommandé de disposer d'au moins 0,05 BTC afin de couvrir une éventuelle congestion du réseau, qui pourrait augmenter les frais de gas au-delà des récompenses de staking perçues.

**Minimum de 1 CORE \+ Frais de Gaz :** Pour staker, vous devez avoir au moins 1 CORE. En plus du montant de staking, les utilisateurs doivent également prendre en compte les frais de gaz en tokens CORE pour le traitement des transactions.

**Comprendre les Différences dans les Adresses de Staking de Bitcoin :**:

L'adresse de staking dans l'invite de transaction de votre portefeuille Bitcoin peut différer de votre adresse Bitcoin d'origine. Cela est dû au fait que l'adresse de staking de Bitcoin est dérivée de la clé privée principale de votre portefeuille Bitcoin, garantissant le contrôle et la sécurité de vos actifs. Vos Bitcoins restent en sécurité dans l'adresse de staking de Bitcoin, non affectés par le staking.

**Délais pour que les Actifs Verrouillés Apparaissent dans votre Portefeuille Bitcoin :**:

Vous pouvez rencontrer des délais avant que votre Bitcoin verrouillé ne soit affiché dans vos portefeuilles Bitcoin. Ce délai résulte principalement de retards dans la confirmation des transactions sur le réseau Bitcoin, qui peuvent prendre plusieurs heures en raison du temps de bloc, du nombre de confirmations de blocs requises et de la congestion du réseau.

Bien que nous travaillions activement avec les partenaires de portefeuilles pour soutenir l'affichage en temps opportun de vos actifs dans vos portefeuilles, vous pouvez vérifier vos actifs verrouillés sur la page "MyStaking" sur le site de staking de Core.

Vous pouvez également visualiser vos fonds stakés en recherchant l'adresse de staking sur un explorateur Bitcoin, comme [Mempool.space](https://mempool.space).

**Considérations pour les Périodes de Verrouillage**

Une fois que vous avez verrouillé vos Bitcoins pour le staking, ils sont inaccessibles jusqu'à la fin de la période de staking. En tenant compte de vos objectifs d'investissement et de votre tolérance au risque, il vous est conseillé de choisir judicieusement votre période de verrouillage. Commencer par des périodes de verrouillage plus courtes peut vous aider à vous familiariser avec le processus avant de vous engager sur des durées plus longues.

## Connexion des Portefeuilles Bitcoin et Core

1. Visitez [https://stake.coredao.org](https://stake.coredao.org) et cliquez sur **Stake Now** en haut à droite de l'en-tête.

2. Une fois sur l'onglet **Staking**, cliquez sur l'option **Connect** à côté de "BTC Staking Amount" pour connecter votre portefeuille Bitcoin. Cela devrait être le portefeuille contenant les actifs Bitcoin que vous souhaitez staker. Cliquez sur le portefeuille pris en charge de votre choix pour connecter votre portefeuille Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-1.png)
</p>

3. De même, cliquez sur l'option **Connect** à côté de **CORE Staking Amount** et sélectionnez le portefeuille Core pour staker du CORE et recevoir des récompenses de staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-2.png)
</p>

## Spécifier le Montant de BTC à Staker

Entrez le montant de Bitcoin que vous souhaitez staker. Le montant minimum est de 0,01 BTC si l'utilisateur effectue le staking via l'interface utilisateur du site web. Cependant, aucune exigence minimale n'est imposée pour le staking Btc via le script de staking.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-3.png)
</p>

## Sélection d'un Validateur Core pour la Délégation de Bitcoin

Sous **Delegate to Validator**, dans le menu déroulant, sélectionnez un **validateur actif** à qui vous souhaitez déléguer votre Bitcoin.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-4.png)
</p>

## Spécifier le Montant de CORE à Staker

Entrez le montant de CORE que vous souhaitez staker. Le montant minimum est de 1 CORE.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-5.png)
</p>

## Sélection d'un Validateur Core pour la Délégation de CORE

Après avoir spécifié le montant de CORE à staker, choisissez le validateur auquel vous allez déléguer votre CORE. Assurez-vous de sélectionner un validateur actif dans le menu déroulant.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-6.png)
</p>

## Confirmation des détails de staking CORE et BTC

Vérifiez que le montant de CORE staké et le Validateur sélectionné sont corrects, puis appuyez sur _Confirm\*\*.

De même, vérifiez que le montant de Btc staké et le Validateur sélectionné sont corrects, puis appuyez sur **Confirm**.

## Vérifier l'adresse de staking Btc

Avant de procéder à la confirmation de votre transaction de staking. Cette fonctionnalité de vérification permet aux utilisateurs de vérifier indépendamment leur adresse de staking Btc, contribuant à prévenir les signatures aveugles et à renforcer la sécurité du processus de staking.

Pour procéder à la vérification, cliquez sur le bouton **Verify the Btc Staking Address**. Cela vous redirigera vers le site Web externe.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../../../../static/img/btc-staking/btc-staking-address-verification.png)
</p>

Sur l'interface utilisateur du site Web de vérification, assurez-vous que les données récupérées sont correctes, puis cliquez sur le bouton **Submit**.

<p align="center" style={{zoom:"35%"}}>
![btc-staking-address-verification](../../../../../../../static/img/btc-staking/external-verification-UI.png)
</p>

Le résultat de la vérification apparaîtra dans la section **Verification Result**.

<p align="center" style={{zoom:"60%"}}>
![btc-staking-address-verification](../../../../../../../static/img/btc-staking/btc-staking-address-verification-result.png)
</p>

Une fois vérifié, revenez sur [stake.coredao.org](https://stake.coredao.org) et continuez en cliquant sur **Approve Transaction**.

<p align="center">
![btc-staking-approve-tx](../../../../../../../static/img/btc-staking/approve-tx.png)
</p>

## Ajustement des Ratios CORE:BTC pour des Rendements Plus Élevés

Sur le côté droit du Calculateur de Staking, il y a un onglet **Summary** qui calcule le Taux de Récompense Total et les Récompenses Annuelles Prévues. Ce sont des estimations de retour annuel pour le Bitcoin et le CORE stakés. Le taux de récompense peut fluctuer quotidiennement en fonction des montants totaux et pondérés des délégations que les validateurs reçoivent. Lorsque l'option **Current** est sélectionnée, elle affiche uniquement le taux de récompense de staking estimé en temps réel. Lorsque l'option **Overall** est sélectionnée, elle représente la moyenne de deux composants : les taux de tous les validateurs basés sur les enregistrements de staking précédents et le taux de récompense de staking estimé en temps réel.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-7.png)
</p>

Vous pouvez également utiliser les curseurs dans la section ci-dessous pour voir l'effet du ratio de staking CORE:BTC sur votre Taux de Récompense Total de Staking.

<p align="center" style={{zoom:"60%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-8.png)
</p>

Pour obtenir le maximum de boost de récompense sur votre montant staké, dans la section **Dual Staking Tiers**, ajustez le curseur **Btc Staked** au montant de Btc que vous souhaitez staker et cliquez sur le bouton **Max Boost**. Cela définira automatiquement le montant de CORE correspondant dans le curseur “CORE Staked“ pour débloquer le boost maximum. Vous pouvez également ajuster manuellement le CORE staké puis cliquer à nouveau sur le bouton "Max Boost" pour mettre à jour le montant de BTC recommandé dans la barre "BTC Staked".

<p align="center">
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-9.png)
</p>

À côté de l'onglet **Summary**, vous pouvez trouver la page **Details**, qui affiche les détails du staking, y compris :

- **New Staked BTC :** Le montant de BTC que vous prévoyez de staker et le taux de récompense actuel.
- **New Staked CORE :** Le montant de CORE que vous prévoyez de staker et le taux de récompense actuel.
- **Active Staked BTC :** Le montant de BTC actuellement staké et le taux de récompense moyen gagné auprès des validateurs.
- **Active Staked CORE :** Le montant de CORE actuellement staké et le taux de récompense moyen gagné auprès des validateurs.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-10.png)
</p>

## Finalisation des Transactions de Dual Staking

Une fois que vous avez spécifié le montant de BTC/CORE à staker et les validateurs pour la délégation respectivement, vous pouvez cliquer sur le bouton **Proceed to Stake**.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-11.png)
</p>

Sur la page **Stake CORE**, confirmez le montant de CORE à staker avec le BTC, puis cliquez sur le bouton **Confirm**.

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-12.png)
</p>

En cliquant sur **Confirm**, vous recevrez une notification de votre portefeuille Core connecté pour compléter la transaction.

Une fois que vous avez confirmé la transition, vous recevrez une notification **Transaction Submitted** en haut à droite de votre écran. Vous pouvez cliquer sur **My Staking** pour voir vos enregistrements de staking ou **View on CoreScan** pour revoir cette transaction.

<p align="center">
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-13.png)
</p>

Sur la page "Stake BTC", confirmez le montant de Bitcoin à staker. Avant de finaliser le processus de staking de Bitcoin, il est important de comprendre et de spécifier plusieurs paramètres clés :

**Spécifier le montant de Bitcoin que vous souhaitez déléguer**

Le montant minimum à déléguer est de 0,01 Bitcoin, si la délégation se fait via l'interface officielle du site.
Dans notre exemple, nous déléguerons 0,05 Bitcoin, ce qui satisfait à cette exigence

**Définir le temps de verrouillage détermine quand votre Bitcoin staké sera déverrouillé et disponible à nouveau pour la récupération ou la redélégation.**

Sélectionnez à l'intérieur de la boîte de temps de verrouillage pour entrer des valeurs, ou cliquez sur l'icône du calendrier pour sélectionner la date et cliquez sur ’OK’ pour continuer.
Le temps de verrouillage par défaut est fixé à un mois à l'avance.

**Spécifier la priorité du réseau pour votre transaction**

<p align="center" style={{zoom:"70%"}}>
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-14.png)
</p>

Enfin, cliquez sur **Confirm** pour compléter la transaction.

## Confirmer la Sortie OP_Return

Avant de signer la transaction dans votre portefeuille, vérifiez les sorties de la transaction pour vous assurer qu'elles incluent une sortie `OP_Return`. La sortie `OP_Return` est l'endroit où votre `redeem_script` est enregistré et est essentiellement utilisé pour récupérer votre Bitcoin staké. Il peut y avoir deux ou trois sorties, mais au moins une doit toujours être `OP_Return`. **Abandonnez la transaction si elle n'inclut pas la sortie `OP_Return`.**

<p align="center">
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-15.png)
</p>

Une fois que vous avez confirmé la transition, vous recevrez une notification **Transaction Submitted** en haut à droite de votre écran. Vous pouvez cliquer sur **My Staking** pour voir vos enregistrements de staking ou **View on Btc Explorer** pour revoir cette transaction.

<p align="center">
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-16.png)
</p>

## Vérifier la Soumission de la Transaction et les Enregistrements de Staking

Dans le coin supérieur droit du site de staking, survolez votre portefeuille connecté et cliquez sur **My Staking**.

<p align="center">
![btc-staking-on-core](../../../../../../../static/img/native-staking/updated-ui/staking-guide-8.png)
</p>

La page **My Staking** affiche les enregistrements de toutes vos activités de staking (CORE, BTC, hash). Cliquez sur les onglets respectifs **CORE**, **BTC**, et **Hash** pour voir les détails de votre staking et de vos délégations.

<p align="center">
![dual-staking-on-core](../../../../../../../static/img/dual-staking/dual-staking-16.png)
</p>

## Conclusion

Vous avez staké avec succès votre Bitcoin et votre CORE sur la blockchain Core et gagnerez désormais activement des tokens CORE en tant que récompenses. En stakant du Bitcoin et en votant pour des validateurs, vous contribuez activement à la gouvernance et à la sécurité du réseau Core, soutenant sa décentralisation et sa stabilité. De plus, grâce au Dual Staking, vous aidez à renforcer la connexion entre la blockchain Bitcoin et Core, alignant les incitations et créant de la valeur à travers les deux écosystèmes.
