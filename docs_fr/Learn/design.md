---
sidebar_label: Conception
hide_table_of_contents: false
sidebar_position: 2
---

# Conception de coreBTC

Le coreBTC dans la blockchain Core représente une innovation majeure dans le domaine de la technologie blockchain, en particulier pour améliorer l'utilité du Bitcoin dans la finance décentralisée (DeFi). This synthetic representation of Bitcoin on the Core blockchain enables seamless interaction with DeFi applications while maintaining the critical properties of Bitcoin.

## Composants clés et leurs rôles

**1. Lockers:**

- **Rôle:** Les Lockers sont responsables de la détention du Bitcoin réel qui garantit le coreBTC. Les utilisateurs envoient leur Bitcoin à l'adresse d'un Locker pour initier le processus d'enveloppement. Anyone can register as a Locker on Core by locking up collateral.
- **Security:** Lockers must provide a significant amount of collateral in CORE tokens to uphold the security of the Bitcoin they hold. Cette garantie peut être liquidée en cas de mauvaise conduite, offrant ainsi une forte dissuasion contre les activités frauduleuses.

**2. Collateral:**
\- The particular assets and required collateral ratio are network parameters determined by Core DAO, and the collateral deposited by Lockers means that locked bitcoin should always be backed by assets of a higher value. Si le prix du bitcoin change par rapport à la valeur du collatéral, le Locker doit ajuster son collatéral ou faire face à une liquidation potentielle.
\- Le collatéral peut être réduit si les Lockers transfèrent du bitcoin sans autorisation ou ne renvoient pas rapidement le bitcoin lorsque le coreBTC est brûlé.
\- Les Lockers peuvent se désinscrire et récupérer leur collatéral à tout moment, tant qu'ils n'ont plus de bitcoin résiduel verrouillé et qu'ils n'ont pas de demandes de déverrouillage non satisfaites. En échange des services fournis, les Lockers perçoivent de petites commissions.

**2. Relayeurs:**

- **Role:** Les Relayers surveillent la blockchain Bitcoin pour les transactions de verrouillage dirigées vers les Lockers et valident ces transactions. They play a crucial role in verifying that the locked Bitcoin corresponds accurately to the minted coreBTC on the Core blockchain.
- **Functionality:** Upon detecting a valid locking transaction, Relayers submit proof to Core to mint the corresponding amount of coreBTC, bridging Bitcoin to the Core blockchain ecosystem securely.

**3. smart Contract coreBTC:**

- **Role:** The coreBTC smart contract on Core manages the minting and burning of coreBTC tokens. It interacts with Relayers and Lockers to incentivize all operations to adhere to the protocol rules.
- **Mécanismes de sécurité:** Le smart contract comprend des mécanismes pour vérifier les preuves de transaction soumises par les Relayeurs, gérer le collatéral déposé par les Lockers, et exécuter les processus d'émission et de rachat du coreBTC.

**4. Liquidateurs:**

- **Role:** In the event of price fluctuations or Locker misbehavior, Liquidators are responsible for upholding the safety and backing of the coreBTC by enforcing collateral requirements.
- **Fonction:** Les Liquidateurs peuvent forcer la liquidation du collatéral d'un Locker si la valeur du Bitcoin verrouillé baisse ou si le Locker ne parvient pas à maintenir le ratio de collatéral requis. Cela permet de préserver l'intégrité et le soutien du coreBTC.

\*\*5. Gardiens: \*\*

- **Rôle:** L'activité des Lockers est surveillée par les Gardiens, qui vérifient tout comportement inapproprié et appliquent des réductions de collatéral si nécessaire.
- **Function:** A Guardian can trigger Core smart contract to slash some of the Locker’s collateral. Dans ce cas, une partie du collatéral du Locker, équivalente à la valeur du coreBTC brûlé par l'utilisateur, est transférée à l'utilisateur. De plus, le Gardien qui a déclenché cette action reçoit une récompense sous forme d'une partie de la valeur de ce collatéral pour son intervention.

## Comment fonctionne le coreBTC

coreBTC is an innovative synthetic asset developed within the Core blockchain ecosystem that allows Bitcoin to be used seamlessly in decentralized finance (DeFi) applications on the Core blockchain. Le processus commence lorsqu'un utilisateur verrouille son Bitcoin avec un dépositaire désigné, appelé un **Locker**, qui détient le Bitcoin réel et fournit une quantité importante de collatéral pour sécuriser la transaction. This Bitcoin is then represented on Core as coreBTC, maintaining a strict **1:1 peg** to uphold value consistency between the locked Bitcoin and the issued coreBTC.

Relayers play a crucial role in monitoring these Bitcoin transactions and validating them on Core. Une fois validée, les détails de la transaction sont envoyés au smart contract du coreBTC, qui émet une quantité équivalente de coreBTC et l'accrédite dans le portefeuille de l'utilisateur. This coreBTC can then be used across various DeFi platforms within the Core ecosystem, enabling Bitcoin holders to engage in lending, borrowing, trading, and other financial activities without actually spending or risking their original Bitcoin holdings.

Le rachat du coreBTC en Bitcoin d'origine implique que l'utilisateur initie un processus de brûlage, où le coreBTC est détruit, et le Bitcoin correspondant est déverrouillé et renvoyé du Locker à l'adresse spécifiée par l'utilisateur. The entire system is safeguarded by rigorous collateral management and liquidation protocols, so Lockers maintain sufficient collateral against the Bitcoin they hold. Additionally, slashing mechanisms are in place to penalize any fraudulent activities by Lockers, protecting the integrity and trustworthiness of coreBTC within the Core ecosystem. Ce design améliore non seulement la liquidité et l'utilité du Bitcoin, mais conserve également ses propriétés fondamentales de décentralisation et de sécurité.

## Création et parité du coreBTC

Verrouiller du Bitcoin et le lier au coreBTC est essentiel pour maintenir l'intégrité et la fiabilité de cet actif synthétique:

- **Stockage sécurisé:** Le Bitcoin verrouillé est stocké dans des adresses contrôlées par les Lockers, qui sont incités à maintenir la sécurité et la transparence grâce à leurs obligations collatéral.
- **Collateralization:** The collateral provided by Lockers underpins the pegging process, so that for every coreBTC in circulation, there is an equivalent amount of Bitcoin securely held by a Locker.

La création du coreBTC commence lorsqu'un utilisateur verrouille son Bitcoin dans le système. L'utilisateur envoie le Bitcoin à une adresse sécurisée contrôlée par un Locker désigné. This action triggers the minting process on the Core blockchain.

- **Lockers:** These are nodes within the Core network responsible for holding the actual Bitcoin. Chaque Locker doit déposer une quantité importante de collatéral, généralement en tokens CORE, pour couvrir d'éventuels défauts ou activités frauduleuses.
- **Relayeurs:** Après l'envoi du Bitcoin à l'adresse du Locker, les Relayeurs surveillent ces transactions. Once a transaction is confirmed, Relayers validate it and submit proof to the coreBTC smart contract on the Core blockchain.
- **Exécution du smart contract:** Dès réception de la preuve nécessaire des Relayeurs, le smart contract du coreBTC fait appel au client léger Bitcoin pour vérifier l'authenticité et la finalité de la transaction Bitcoin concernée, puis crée une quantité équivalente de coreBTC. This minted coreBTC is then issued to the user's wallet on the Core blockchain, reflecting a 1:1 peg with the locked Bitcoin.

![pegging-in-coreBTC](../../../../static/img/coreBTC/pegin-corebtc.png)

## Rachat et parité du coreBTC

Le rachat, ou la sortie de parité, consiste à inverser le processus de création :

- **Brûlage du coreBTC:** Les utilisateurs initient le processus de rachat en envoyant une demande au smart contract du coreBTC pour brûler une quantité spécifiée de coreBTC, en indiquant l'adresse Bitcoin où ils souhaitent recevoir leur Bitcoin.
- **Déblocage du Bitcoin:** Une fois le coreBTC brûlé avec succès, le smart contract signale au Locker de libérer la quantité correspondante de Bitcoin. Le Locker envoie ensuite ce Bitcoin à l'adresse spécifiée par l'utilisateur, complétant ainsi le processus de sortie de parité. Once the bitcoin transaction is confirmed, the Locker transmits it to Core where it is finally verified by the bitcoin Light Client

![pegging-out-coreBTC](../../../../static/img/coreBTC/pegout-corebtc.png)

## Processus de Liquidation

The liquidation process is designed to protect the system from defaults and safeguard that the backing of coreBTC remains secure:

- **Surveillance des ratios collatéraux:** Les liquidateurs surveillent en permanence la valeur du Bitcoin détenu par les Lockers par rapport au coreBTC émis.
- **Déclenchement de la liquidation:** Si la valeur marchande du Bitcoin verrouillé chute de manière significative, ou si un Locker ne parvient pas à maintenir le ratio de collatéral requis, les liquidateurs peuvent initier la vente du collatéral du Locker pour couvrir les pertes potentielles.
- **Mechanism for Liquidation:** Liquidation is conducted through on Core, where the insufficient collateral is sold off to maintain the necessary backing for coreBTC. Pendant le processus, les liquidateurs utilisent du coreBTC pour acheter les tokens CORE collatéralisés à un prix réduit, et le coreBTC est brûlé. Cela augmente le ratio de collatéral et restaure la santé financière du Locker. Lorsque le coreBTC est brûlé, son offre est réduite et il devient plus rare, libérant ainsi le Locker pour reprendre possession d'une quantité de Bitcoin sous-jacent équivalente à la valeur du coreBTC éliminé. Le Locker est ensuite rééquilibré conformément aux exigences de collatéral ; si l'utilisateur initial qui a envoyé le Bitcoin à l'adresse du Locker souhaite récupérer son Bitcoin, il peut choisir n'importe quel Locker pour l'obtenir. Le rachat de coreBTC contre du Bitcoin se fait au niveau systémique, et non pas dans une relation directe entre un utilisateur et un Locker particulier.

![liquidation](../../../../static/img/coreBTC/liquidation-process.png)

## Processus de Slashing

On the Core blockchain, the concept of slashing is crucial to maintaining the integrity and security of coreBTC transactions. Le slashing est une mesure punitive utilisée pour pénaliser les Lockers en cas de mauvaise conduite ou de non-respect des protocoles établis. Il existe deux scénarios principaux où le slashing peut se produire, chacun étant conçu pour protéger le système et ses utilisateurs contre la fraude et les mauvaises pratiques:

### 1. **Mouvement non autorisé du Bitcoin verrouillé**

Dans ce cas, le slashing se produit lorsqu'un Locker déplace du Bitcoin verrouillé sans avoir reçu une demande de brûlage correspondante d'un détenteur de coreBTC. Ce scénario est considéré comme une violation grave, car il menace directement la parité 1:1 et la confiance des détenteurs de coreBTC dans la capacité du système à garantir que leurs tokens sont bien adossés à du Bitcoin réel.

- **Déclencheur:** Le processus de slashing est déclenché lorsqu'un Locker transfère du Bitcoin verrouillé vers une adresse non autorisée ou pour une utilisation non autorisée qui ne correspond pas à une demande légitime et vérifiée de rachat de coreBTC.
- **Detection and Reporting:** This misconduct can be detected through Core's monitoring systems or by other participants in the network, often referred to as Guardians, who observe and report any suspicious Locker activities.
- **Conséquence:** Après confirmation du transfert non autorisé, une partie du collatéral du Locker est saisie et utilisée pour compenser la différence créée dans le système. Cela pénalise non seulement le Locker, mais contribue également à rétablir l'équilibre entre le coreBTC en circulation et son adossement, garantissant ainsi l'intégrité du système.

![slashing](../../../../static/img/coreBTC/slashing-1.png)

### 2. **Echec de livraison du Bitcoin lors du rachat de coreBTC**

Ce scénario se produit lorsqu'un détenteur de coreBTC décide de racheter ses tokens contre le Bitcoin sous-jacent, mais que le Locker responsable de la libération du Bitcoin ne le fait pas dans le délai imparti.

- **Déclencheur:** Un détenteur de coreBTC soumet une transaction de brûlage, détruisant effectivement une certaine quantité de coreBTC avec l'attente de recevoir une quantité équivalente de Bitcoin d'un Locker. Si le Locker ne traite pas cette transaction et ne libère pas le Bitcoin comme requis, un slashing est déclenché.
- **Détection et réponse:** Comme dans le premier cas, cet échec peut être détecté par les moniteurs du réseau ou signalé par les utilisateurs. Après vérification que le Locker n'a pas rempli la demande de rachat dans les délais, le système initie un protocole de slashing.
- **Conséquence:** Une partie importante du collatéral du Locker est réduite à titre de mesure punitive et compensatoire. The slashed collateral is typically used to certify that the user receives their Bitcoin, preserving trust in the coreBTC system and compensating for any potential losses incurred by the delay or failure.

![slashing](../../../../static/img/coreBTC/slashing-2.png)

## Conclusion

The design of coreBTC on Core presents a robust framework for integrating Bitcoin into DeFi applications while maintaining its fundamental characteristics of security and decentralization. Through a well-structured system of minting, redemption, liquidation, and slashing, all backed by strict collateral requirements, coreBTC enables Bitcoin's value to be leveraged in new and innovative ways without compromising the trust and security that define it.
