---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
description: ""
---

# Prueba de Trabajo Delegada (DPoW)

---

## Descripción general

Delegated Proof of Work (DPoW) introduce una forma innovadora de incorporar a los mineros de Bitcoin en el proceso de seguridad y elección de validadores del consenso Satoshi Plus, sin requerir cómputo adicional.

DPoW establece una **relación simbiótica** entre las redes Bitcoin y Core:

- Los mineros de Bitcoin obtienen una segunda recompensa de bloque a través de recompensas en tokens CORE
- Core se beneficia de la seguridad inigualable y de la infraestructura descentralizada de Bitcoin.

<p align="center"></p>

## Conceptos Clave

- No se necesita nuevo hardware ni actividad minera adicional
- Los mineros mantienen sus operaciones estándar de minería de Bitcoin
- Los mineros delegan su hash power para votar por validadores de Core mediante metadatos
- Los mineros ganan recompensas en CORE además de sus recompensas en Bitcoin

## Cómo Funciona DPoW

### Integración con la Minería

Los mineros de Bitcoin continúan sus operaciones habituales.  Para participar en DPoW, deben incluir **metadatos de delegación** en el campo op_return de la transacción coinbase. Estos metadatos incluyen:

- **Dirección del Validador de Core:** el validador que el minero está respaldando
- **Dirección de Recompensa en CORE**: la dirección donde el minero quiere recibir sus recompensas en CORE

Este proceso:

- No requiere energía adicional
- No interfiere con la minería de Bitcoin
- Extiende la protección del minero a la red Core

### Relayers y Flujo de Datos

Para capturar esta información de delegación:

- **Relayers** monitorean en tiempo real la blockchain de Bitcoin
- Un **BTC light client on-chain** extrae los metadatos de delegación
- Los datos son enviados al **Core Delegation Hub**, que:
  - Valida los datos
  - Agrega las delegaciones
  - Asigna peso a los validadores según el hash power de los mineros

### Proceso de Elección de Validadores

Cada día, Core calcula las puntuaciones de los validadores utilizando los datos de delegación de mineros de **una semana antes**. Los validadores con mayor hash power delegado tienen una mayor probabilidad de ser elegidos

### Recompensas e Incentivos

- Los validadores elegidos ganan recompensas en CORE por producir bloques
- Los validadores toman una pequeña comisión
- Las recompensas restantes se reparten entre los delegadores (incluidos los mineros participantes)

**Resultado:** Los mineros ganan ambas recompensas:

- Recompensas en Bitcoin (como de costumbre)
- Recompensas en tokens CORE (a través de la delegación a validadores)

## Beneficios

### Para Mineros de Bitcoin

- **Gana Más**: Obtén tokens CORE sin costo energético adicional
- **Permanece Independiente**: Sigue minando Bitcoin sin cambios operativos
- **Diversifica Retornos**: Gana tokens CORE además de las recompensas en Bitcoin

### Para Core

- **Seguridad de Bitcoin**: Integra PoW real en su elección de validadores
- **Conjunto de Validadores Descentralizado:** Mineros de cualquier parte del mundo pueden ayudar a asegurar Core
- **Alineación del Ecosistema**: Los intereses económicos de los mineros se alinean con la red Core

## Mejores Prácticas para Mineros

- Selecciona validadores confiables de Core
- Asegúrate de usar metadatos correctos en el campo op_return
- Monitorea tu dirección de recompensas CORE para verificar distribuciones entrantes
- Mantén operaciones mineras constantes para asegurar una delegación confiable

## Potential Challenges & Mitigations

| **Challenge**              | **Mitigation**                                   |
| -------------------------- | ------------------------------------------------ |
| Incorrect metadata format  | Core validates metadata before processing        |
| Missed rewards             | Use reliable tooling to monitor reward addresses |
| Validator underperformance | Choose validators with strong historical uptime  |

## Getting Started

**To participate in DPoW:**

1. **Continue your Bitcoin mining** (no changes needed)
2. **Embed delegation metadata** in op_return of coinbase transaction
3. **Choose a Core validator** to delegate to
4. **Add your CORE reward address**
5. **Track rewards and validator performance**

## Why It Matters

DPoW es un componente crítico del consenso Satoshi Plus. Extiende los incentivos de los mineros de Bitcoin para alinearlos con el mecanismo de consenso de Core. Core receives Bitcoin miner participation in its security, and Bitcoin receives better-compensated miners. El resultado es un conjunto de mineros que está más incentivado a proteger tanto Bitcoin como Core.
