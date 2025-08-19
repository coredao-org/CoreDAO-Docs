---
sidebar_label: Thirdweb Universal Bridge
hide_table_of_contents: false
sidebar_position: 2
---

# Thirdweb Universal Bridge

---

[**Universal Bridge**](https://thirdweb.com/payments) es una solución integral de pagos Web3 que ayuda a los desarrolladores a monetizar cualquier app o juego.

Permite a los usuarios onramp, bridge y swap tokens o fiat entre cualquier cadena EVM mediante enrutamiento automático cross-chain, eliminando la complejidad de gestionar múltiples cadenas.

Al simplificar los pagos cross-chain y desbloquear la funcionalidad multi-chain con un esfuerzo mínimo de implementación, también ofrece a los desarrolladores oportunidades de monetización a través de fee-sharing y soporta capacidades avanzadas como webhooks y seguimiento de transacciones.

Esto hace que construir experiencias de pago multi-chain fluidas, rápidas, confiables y amigables para desarrolladores sea mucho más sencillo.

## Funcionalidades

- Permite a los usuarios pagar por activos con cualquier token EVM en cualquier cadena EVM
- Enrutamiento automático cross-chain para transacciones fluidas
- Genera ingresos desde el primer día con el mecanismo de fee-sharing
- Acceso a un componente UI listo para usar que facilita la implementación

Aprende más en la [documentación de Universal Bridge](https://portal.thirdweb.com/payments).

## Cómo Empezar

Consulta la [documentación de thirdweb](https://portal.thirdweb.com/payments) para empezar a usar Universal Bridge.

## Ver Universal Bridge en Acción

¿Quieres ver cómo funciona Universal Bridge? Obsérvalo a detalle con este ejemplo:

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

Ve cómo funciona el flujo de Buy Crypto en el [playground](https://playground.thirdweb.com/payments/ui-components).
