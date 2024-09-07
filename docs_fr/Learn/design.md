---
sidebar_label: Conception
hide_table_of_contents: false
sidebar_position: 2
---

# Conception de coreBTC

Le coreBTC dans la blockchain Core représente une innovation majeure dans le domaine de la technologie blockchain, en particulier pour améliorer l'utilité du Bitcoin dans la finance décentralisée (DeFi). Cette représentation synthétique du Bitcoin sur la chaîne Core permet une interaction transparente avec les applications DeFi tout en maintenant les propriétés fondamentales du Bitcoin.

## Composants clés et leurs rôles

**1. Lockers:**

- **Rôle:** Les Lockers sont responsables de la détention du Bitcoin réel qui garantit le coreBTC. Les utilisateurs envoient leur Bitcoin à l'adresse d'un Locker pour initier le processus d'enveloppement. Toute personne peut s'enregistrer en tant que Locker sur la chaîne Core en fournissant une garantie, et la chaîne Core elle-même exploite l'un des nombreux Lockers.
- **Sécurité:** Les Lockers doivent fournir une quantité significative de garanties en jetons CORE pour assurer la sécurité du Bitcoin qu'ils détiennent. Cette garantie peut être liquidée en cas de mauvaise conduite, offrant ainsi une forte dissuasion contre les activités frauduleuses.

**2. Collatéral:**
\- Les actifs spécifiques et le ratio de collatéral requis sont des paramètres du réseau déterminés par le Core DAO, et le collatéral déposé par les Lockers garantit que le bitcoin verrouillé est toujours soutenu par des actifs d'une valeur supérieure. Si le prix du bitcoin change par rapport à la valeur du collatéral, le Locker doit ajuster son collatéral ou faire face à une liquidation potentielle.
\- Le collatéral peut être réduit si les Lockers transfèrent du bitcoin sans autorisation ou ne renvoient pas rapidement le bitcoin lorsque le coreBTC est brûlé.
\- Les Lockers peuvent se désinscrire et récupérer leur collatéral à tout moment, tant qu'ils n'ont plus de bitcoin résiduel verrouillé et qu'ils n'ont pas de demandes de déverrouillage non satisfaites. En échange des services fournis, les Lockers perçoivent de petites commissions.

**2. Relayeurs:**

- **Role:** Les Relayers surveillent la blockchain Bitcoin pour les transactions de verrouillage dirigées vers les Lockers et valident ces transactions. Ils jouent un rôle crucial pour s'assurer que le Bitcoin verrouillé correspond précisément au coreBTC émis sur la Core Chain.
- **Fonctionnalité:** Dès qu'ils détectent une transaction de verrouillage valide, les Relayeurs soumettent une preuve à la Core Chain pour émettre le montant correspondant de coreBTC, intégrant ainsi le Bitcoin dans l'écosystème de la Core Chain de manière sécurisée.

**3. smart Contract coreBTC:**

- **Role:** Le smart contract coreBTC sur la Core Chain gère l'émission et la destruction des tokens coreBTC. Il interagit avec les Relayers et les Lockers pour garantir que toutes les opérations respectent les règles du protocole.
- **Mécanismes de sécurité:** Le smart contract comprend des mécanismes pour vérifier les preuves de transaction soumises par les Relayeurs, gérer le collatéral déposé par les Lockers, et exécuter les processus d'émission et de rachat du coreBTC.

**4. Liquidateurs:**

- **Rôle:** En cas de fluctuations de prix ou de mauvaise conduite de la part d'un Locker, les Liquidateurs sont chargés de garantir la sécurité et le soutien du coreBTC en appliquant les exigences de collatéral.
- **Fonction:** Les Liquidateurs peuvent forcer la liquidation du collatéral d'un Locker si la valeur du Bitcoin verrouillé baisse ou si le Locker ne parvient pas à maintenir le ratio de collatéral requis. Cela permet de préserver l'intégrité et le soutien du coreBTC.

\*\*5. Gardiens: \*\*

- **Rôle:** L'activité des Lockers est surveillée par les Gardiens, qui vérifient tout comportement inapproprié et appliquent des réductions de collatéral si nécessaire.
- **Fonction:** Un Gardien peut déclencher le smart contract de la Core Chain pour réduire une partie du collatéral du Locker. Dans ce cas, une partie du collatéral du Locker, équivalente à la valeur du coreBTC brûlé par l'utilisateur, est transférée à l'utilisateur. De plus, le Gardien qui a déclenché cette action reçoit une récompense sous forme d'une partie de la valeur de ce collatéral pour son intervention.

## Comment fonctionne le coreBTC

Le coreBTC est un actif synthétique innovant développé au sein de l'écosystème de la blockchain Core, permettant à Bitcoin d'être utilisé de manière transparente dans des applications de finance décentralisée (DeFi) sur la Core Chain. Le processus commence lorsqu'un utilisateur verrouille son Bitcoin avec un dépositaire désigné, appelé un **Locker**, qui détient le Bitcoin réel et fournit une quantité importante de collatéral pour sécuriser la transaction. Ce Bitcoin est ensuite représenté sur la Core Chain sous forme de coreBTC, maintenant une parité stricte de 1:1 pour assurer une cohérence de valeur entre le Bitcoin verrouillé et le coreBTC émis.

Les Relayeurs jouent un rôle crucial en surveillant ces transactions Bitcoin et en les validant pour la Core Chain. Une fois validée, les détails de la transaction sont envoyés au smart contract du coreBTC, qui émet une quantité équivalente de coreBTC et l'accrédite dans le portefeuille de l'utilisateur. Ce coreBTC peut ensuite être utilisé sur diverses plateformes DeFi au sein de l'écosystème Core Chain, permettant aux détenteurs de Bitcoin de s'engager dans des activités de prêt, d'emprunt, de trading, et d'autres activités financières sans réellement dépenser ou risquer leurs avoirs en Bitcoin.

Le rachat du coreBTC en Bitcoin d'origine implique que l'utilisateur initie un processus de brûlage, où le coreBTC est détruit, et le Bitcoin correspondant est déverrouillé et renvoyé du Locker à l'adresse spécifiée par l'utilisateur. Tout le système est sécurisé par une gestion rigoureuse du collatéral et des protocoles de liquidation qui garantissent que les Lockers maintiennent un collatéral suffisant contre le Bitcoin qu'ils détiennent. De plus, des mécanismes de réduction (slashing) sont en place pour pénaliser toute activité frauduleuse des Lockers, protégeant ainsi l'intégrité et la fiabilité du coreBTC au sein de l'écosystème Core Chain. Ce design améliore non seulement la liquidité et l'utilité du Bitcoin, mais conserve également ses propriétés fondamentales de décentralisation et de sécurité.

## Création et parité du coreBTC

Verrouiller du Bitcoin et le lier au coreBTC est essentiel pour maintenir l'intégrité et la fiabilité de cet actif synthétique:

- **Stockage sécurisé:** Le Bitcoin verrouillé est stocké dans des adresses contrôlées par les Lockers, qui sont incités à maintenir la sécurité et la transparence grâce à leurs obligations collatéral.
- **Collatéralisation:** Le collatéral fourni par les Lockers sous-tend le processus de parité, garantissant que pour chaque coreBTC en circulation, une quantité équivalente de Bitcoin est détenue en toute sécurité par un Locker.

La création du coreBTC commence lorsqu'un utilisateur verrouille son Bitcoin dans le système. L'utilisateur envoie le Bitcoin à une adresse sécurisée contrôlée par un Locker désigné. Cette action déclenche le processus de création sur la Core Chain.

- **Lockers:** Ce sont des nœuds de confiance au sein du réseau Core Chain, responsables de la détention du Bitcoin réel. Chaque Locker doit déposer une quantité importante de collatéral, généralement en tokens CORE, pour couvrir d'éventuels défauts ou activités frauduleuses.
- **Relayeurs:** Après l'envoi du Bitcoin à l'adresse du Locker, les Relayeurs surveillent ces transactions. Une fois confirmée, les Relayeurs valident la transaction et soumettent une preuve au smart contract du coreBTC sur la Core Chain.
- **Exécution du smart contract:** Dès réception de la preuve nécessaire des Relayeurs, le smart contract du coreBTC fait appel au client léger Bitcoin pour vérifier l'authenticité et la finalité de la transaction Bitcoin concernée, puis crée une quantité équivalente de coreBTC. Ce coreBTC est ensuite émis dans le portefeuille de l'utilisateur sur la Core Chain, respectant une parité 1:1 avec le Bitcoin verrouillé.

![pegging-in-coreBTC](../../../../static/img/coreBTC/pegin-corebtc.png)

## Rachat et parité du coreBTC

Le rachat, ou la sortie de parité, consiste à inverser le processus de création :

- **Brûlage du coreBTC:** Les utilisateurs initient le processus de rachat en envoyant une demande au smart contract du coreBTC pour brûler une quantité spécifiée de coreBTC, en indiquant l'adresse Bitcoin où ils souhaitent recevoir leur Bitcoin.
- **Déblocage du Bitcoin:** Une fois le coreBTC brûlé avec succès, le smart contract signale au Locker de libérer la quantité correspondante de Bitcoin. Le Locker envoie ensuite ce Bitcoin à l'adresse spécifiée par l'utilisateur, complétant ainsi le processus de sortie de parité. Une fois la transaction Bitcoin confirmée, le Locker la transmet à la Core Chain où elle est finalement vérifiée par le client léger Bitcoin

![pegging-out-coreBTC](../../../../static/img/coreBTC/pegout-corebtc.png)

## Processus de Liquidation

Le processus de liquidation est conçu pour protéger le système des défauts de paiement et garantir que le support du coreBTC reste sécurisé:

- **Surveillance des ratios collatéraux:** Les liquidateurs surveillent en permanence la valeur du Bitcoin détenu par les Lockers par rapport au coreBTC émis.
- **Déclenchement de la liquidation:** Si la valeur marchande du Bitcoin verrouillé chute de manière significative, ou si un Locker ne parvient pas à maintenir le ratio de collatéral requis, les liquidateurs peuvent initier la vente du collatéral du Locker pour couvrir les pertes potentielles.
- **Mécanisme de liquidation:** La liquidation est effectuée via la plateforme Core Chain, où le collatéral insuffisant est vendu pour maintenir le soutien nécessaire pour le coreBTC. Pendant le processus, les liquidateurs utilisent du coreBTC pour acheter les tokens CORE collatéralisés à un prix réduit, et le coreBTC est brûlé. Cela augmente le ratio de collatéral et restaure la santé financière du Locker. Lorsque le coreBTC est brûlé, son offre est réduite et il devient plus rare, libérant ainsi le Locker pour reprendre possession d'une quantité de Bitcoin sous-jacent équivalente à la valeur du coreBTC éliminé. Le Locker est ensuite rééquilibré conformément aux exigences de collatéral ; si l'utilisateur initial qui a envoyé le Bitcoin à l'adresse du Locker souhaite récupérer son Bitcoin, il peut choisir n'importe quel Locker pour l'obtenir. Le rachat de coreBTC contre du Bitcoin se fait au niveau systémique, et non pas dans une relation directe entre un utilisateur et un Locker particulier.

![liquidation](../../../../static/img/coreBTC/liquidation-process.png)

## Processus de Slashing

Sur la Core Chain, le concept de slashing est essentiel pour maintenir l'intégrité et la sécurité des transactions coreBTC. Le slashing est une mesure punitive utilisée pour pénaliser les Lockers en cas de mauvaise conduite ou de non-respect des protocoles établis. Il existe deux scénarios principaux où le slashing peut se produire, chacun étant conçu pour protéger le système et ses utilisateurs contre la fraude et les mauvaises pratiques:

### 1. **Mouvement non autorisé du Bitcoin verrouillé**

Dans ce cas, le slashing se produit lorsqu'un Locker déplace du Bitcoin verrouillé sans avoir reçu une demande de brûlage correspondante d'un détenteur de coreBTC. Ce scénario est considéré comme une violation grave, car il menace directement la parité 1:1 et la confiance des détenteurs de coreBTC dans la capacité du système à garantir que leurs tokens sont bien adossés à du Bitcoin réel.

- **Déclencheur:** Le processus de slashing est déclenché lorsqu'un Locker transfère du Bitcoin verrouillé vers une adresse non autorisée ou pour une utilisation non autorisée qui ne correspond pas à une demande légitime et vérifiée de rachat de coreBTC.
- **Détection et signalement:** Cette mauvaise conduite peut être détectée par les systèmes de surveillance de la Core Chain ou par d'autres participants au réseau, souvent appelés Gardiens, qui surveillent et signalent toute activité suspecte des Lockers.
- **Conséquence:** Après confirmation du transfert non autorisé, une partie du collatéral du Locker est saisie et utilisée pour compenser la différence créée dans le système. Cela pénalise non seulement le Locker, mais contribue également à rétablir l'équilibre entre le coreBTC en circulation et son adossement, garantissant ainsi l'intégrité du système.

![slashing](../../../../static/img/coreBTC/slashing-1.png)

### 2. **Echec de livraison du Bitcoin lors du rachat de coreBTC**

Ce scénario se produit lorsqu'un détenteur de coreBTC décide de racheter ses tokens contre le Bitcoin sous-jacent, mais que le Locker responsable de la libération du Bitcoin ne le fait pas dans le délai imparti.

- **Déclencheur:** Un détenteur de coreBTC soumet une transaction de brûlage, détruisant effectivement une certaine quantité de coreBTC avec l'attente de recevoir une quantité équivalente de Bitcoin d'un Locker. Si le Locker ne traite pas cette transaction et ne libère pas le Bitcoin comme requis, un slashing est déclenché.
- **Détection et réponse:** Comme dans le premier cas, cet échec peut être détecté par les moniteurs du réseau ou signalé par les utilisateurs. Après vérification que le Locker n'a pas rempli la demande de rachat dans les délais, le système initie un protocole de slashing.
- **Conséquence:** Une partie importante du collatéral du Locker est réduite à titre de mesure punitive et compensatoire. Le collatéral slashé est généralement utilisé pour garantir que l'utilisateur reçoive son Bitcoin, préservant ainsi la confiance dans le système coreBTC et compensant les pertes potentielles causées par le retard ou l'échec.

![slashing](../../../../static/img/coreBTC/slashing-2.png)

## Conclusion

La conception du coreBTC sur la Core Chain propose un cadre solide pour l'intégration du Bitcoin dans les applications DeFi tout en conservant ses caractéristiques fondamentales de sécurité et de décentralisation. Grâce à un système bien structuré de création, rachat, liquidation et slashing, soutenu par des exigences de collatéral strictes, coreBTC garantit que la valeur du Bitcoin peut être exploitée de manière innovante, sans compromettre la confiance et la sécurité qui le définissent.
