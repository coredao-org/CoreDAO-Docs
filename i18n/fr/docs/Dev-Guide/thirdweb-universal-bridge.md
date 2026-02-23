---
sidebar_label: Thirdweb Universal Bridge
hide_table_of_contents: false
sidebar_position: 2
---

# Thirdweb Universal Bridge

---

[**Universal Bridge**](https://thirdweb.com/payments) Une solution de paiement Web3 complète pour aider les développeurs à monétiser n'importe quelle application ou jeu.

Cela permet aux utilisateurs de convertir, de pontifier et d'échanger des jetons ou des devises fiduciaires entre différentes chaînes EVM de manière transparente, grâce à un routage automatique inter-chaînes, éliminant ainsi la complexité de la gestion de plusieurs chaînes.

En simplifiant les paiements inter-chaînes et en débloquant les fonctionnalités multi-chaînes avec un effort d'implémentation minimal, cela offre également aux développeurs des opportunités de monétisation via le partage de frais et prend en charge des fonctionnalités avancées telles que les webhooks et le suivi des transactions.

Cela permet de créer des expériences de paiement multi-chaînes fluides, rapides, fiables et conviviales pour les développeurs.

## Fonctionnalité

- Permettre aux utilisateurs de payer des actifs avec n'importe quel jeton EVM sur n'importe quelle chaîne EVM
- Routage automatique inter-chaînes pour des transactions fluides
- Gagner dès le premier jour grâce au mécanisme de partage de frais
- Accéder à un composant d'interface utilisateur prêt à l'emploi pour une implémentation facile

Learn more in the [Universal Bridge documentation](https://portal.thirdweb.com/payments).

## Commencer

See the [thirdweb documentation](https://portal.thirdweb.com/payments) to get started with Universal Bridge.

## Voir Universal Bridge en action

Vous voulez voir comment fonctionne Universal Bridge ? Découvrez-le sous le capot avec cet exemple :

```tsx
import { createThirdwebClient } from "thirdweb";
import { PayEmbed, BuyWidget } from "thirdweb/react";
import { defineChain } from "thirdweb";

const client = createThirdwebClient({
  clientId: "....",
});

function Example() {
  return (
    <BuyWidget
      client={client}
      chain={defineChain(1116)}
      amount="0.002"
      seller="0x0000000000000000000000000000000000000000"
      paymentMethods={["crypto", "card"]}
      currency="USD"
    />
  );
}
```

Découvrez comment fonctionne le flux d'achat de crypto dans le [playground](https://playground.thirdweb.com/payments/ui-components).
