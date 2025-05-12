---
sidebar_label: Mecánicas
hide_table_of_contents: false
sidebar_position: 2
---

# Mecánicas de Core

---

## Panel de Control de Core Ignition

<p align="center">
  <img width="500" alt="Ignition_Dashboard_new" src="https://github.com/user-attachments/assets/7956ac48-8450-4cdc-a001-a9a6be4ae309" />
</p>

### Perfil de Core Ignition

El Perfil de Core Ignition es un panel personalizado conectado a la cuenta del usuario, que permite mostrar sus logros y participación. Permite a los usuarios:

1. Mostrar un nombre de usuario y avatar personalizados
2. Conectar X (Twitter) y mostrar su foto de perfil
3. Seguimiento del estado de participación de alto nivel
4. Mostrar las insignias obtenidas

Para actualizar el perfil del usuario, haga clic en el menú de puntos suspensivos del perfil.

<p align="center">
  <img width="288" alt="Ignition Profile meatballs menu" src="https://github.com/user-attachments/assets/d7523504-df48-4f39-93f3-94e472a03a9a"/>
</p>

### Balance de la Billetera Ignition

El balance de la billetera Ignition muestra un subconjunto de activos permitidos que posee la cuenta en Core. Los usuarios pueden ganar Sparks (puntos) al transferir/mantener activos, con un aumento adicional de Sparks en Core.

### Balance de dApp Ignition

El balance de dApp Ignition refleja los activos que el usuario ha depositado dentro de las dApps permitidas en Core. Los usuarios también pueden aumentar Sparks interactuando con estas dApps en Core.

### Activos Permitidos

A list of token assets eligible for earning Sparks on Core Ignition. Refer to the [How to Boost Multipliers](#how-to-boost-multipliers) section for the full list.

### Whitelisted dApps

A list of decentralized applications where user interactions contribute to earning Sparks on Core Ignition. Visit the '[Explore dApps](https://ignition.coredao.org/dashboard?tab=explore)' tab on the Ignition Dashboard for full details.

### Whitelisted Pools

Liquidity pools from a whitelisted DEX dApp that includes at least one whitelisted token, qualifying for Sparks on Core Ignition.

---

## Cómo Aumentar Sparks

Los Sparks son puntos acumulativos que reflejan cuán activos son los usuarios en el ecosistema de Core. Se actualizan diariamente a las 00:00 UTC y aparecen en el tablero de clasificación. Los usuarios ganan Sparks diariamente mediante:

**1. Activos en el Balance de la Billetera Ignition:**\
La cantidad y tipo de activos permitidos que los usuarios transfieren a Core se reflejarán en su balance de billetera Ignition. Al mantener estos activos en Core, los usuarios ganarán Sparks. Los Sparks se calculan diariamente con base en el balance de la billetera del usuario.

**2. Actividades con dApps del Ecosistema de Core:**\
Los usuarios también pueden ganar Sparks interactuando con las dApps permitidas en Core Ignition. Cada actividad en la cadena con estas dApps contribuirá con puntos Spark a la cuenta del usuario. Más detalles se actualizarán pronto.

| Transaction Type              | Sparks per Transaction | Maximum Sparks per Day |
| ----------------------------- | ---------------------- | ---------------------- |
| Provisión de Liquidez         | 800                    | 8,000                  |
| Préstamo                      | 400                    | 12,000                 |
| Préstamo                      | 200                    | 4,000                  |
| Swapping                      | 100                    | 3,000                  |
| Interacting with Gaming dApps | 50                     | 1,000                  |
| Others                        | 50                     | 2,000                  |
| Coretoshi NFT                 | 200                    | Unlimited              |

**3. Campañas Participadas:**\
Core Ignition contará con campañas flash o de tiempo limitado, ofreciendo a los usuarios oportunidades especiales para potenciar Sparks. Manténgase conectado revisando las secciones de campaña dentro de la aplicación y siguiendo los anuncios oficiales de Core en [X (Twitter)](https://x.com/Coredao_Org) para las últimas actualizaciones.

**4. Invita a nuevos usuarios a unirse a Ignition:**
Si eres nuevo en Core Ignition, transfiere activos de la lista de permitidos por un valor de $50 USD a Core para desbloquear un enlace de invitación permanente. Para los usuarios que se registraron en la Temporada 2, el código de invitación se desbloquea automáticamente. Al invitar nuevos usuarios a Core Ignition, los usuarios recibirán el 10% de los Sparks diarios obtenidos por los invitados de primer grado y el 2% de los invitados de segundo grado. Tenga en cuenta que puede aplicarse un límite a los Sparks máximos que cada usuario puede ganar mediante referidos.

---

## Cómo Aumentar Multiplicadores

Los multiplicadores son variables dinámicas que multiplican los puntos Spark. The consolidated multiplier displayed on the user's dashboard reflects the total multiplier currently applying to the entire asset of the user. This total multiplier is calculated by averaging out the multipliers distributed across the assets. There are two types of baseline multipliers that affect Sparks points through specific activities, independent of any special campaigns:

- **Token Multipliers**: These increase points earned based on token-related activities and holdings.
- **Volume Multipliers**: These amplify points earned through volume-related activities.

<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/4f7ceee6-6a93-4cce-a382-5e6002ce2819"/>
</p>

### 1. Token Multipliers

Users can benefit from baseline token multipliers for whitelisted assets held in their wallets or deposited into various dApps. Different whitelisted tokens are associated with specific multipliers, which vary depending on the type of activity performed with these dApps, as detailed below:

| Whitelisted Assets                                                          | Activos en Billetera | Lending              | Borrowing            | Liquidity Provision  |
| --------------------------------------------------------------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| stCORE, CLND, dualCORE                                                      | 1x                   | 2.5x | 3x                   | 3.5x |
| USDT,USDC                                                                   | 1x                   | 1.5x | 2x                   | 3x                   |
| CORE, WCORE                                                                 | 1x                   | 1.5x | 2x                   | 2.5x |
| wETH, solvBTC.CORE                                          | n/a                  | 1.4x | 1.6x | 1.8x |
| aBTC, BTCB, nBTC, oBTC, pumpBTC, rBTC, suBTC, uBTC, wBTC                    | n/a                  | 1.2x | 1.4x | 1.6x |
| BTC.B, SolvBTC.b, SolvBTC.m | n/a                  | 1x                   | 1.2x | 1.6x |

> _**Example 1:**_
> If the user holds 10 stCORE in Ignition wallet balance, the user gets:\
> Daily Asset Sparks = stCORE amount \* stCORE price \* Multiplier = 10 stCORE \* $1.5 (assumed) \* 1 = 15

> _**Example 2:**_
> If the user lends 20 stCORE in a Lending Protocol, the user get:\
> Daily Asset Sparks = stCORE amount \* stCORE price \* Multiplier = 20 stCORE \* $1.5(assumed) \* 2.5 = 75

### 2. Volume Multipliers

Users who interact with [whitelisted pools](#whitelisted-pools) receive multipliers based on the USD equivalent of their trading volume per day. The multiplier value increases progressively as trading volume grows, with different multiplier values applied according to specific volume thresholds as below:

| Volume Range                        | Multipliers          |
| ----------------------------------- | -------------------- |
| $0 ~ >$100          | 1x                   |
| $10 ~ >$1,000       | 1.5x |
| $1,000 ~ >$10,000   | 2x                   |
| $10,000 ~ >$50,000  | 2.5x |
| $50,000 & above | 3x                   |

> _**Example Calculation:**_
> If a user trades the equivalent of $51,000 in volume a day, the user will receive:\
> Daily Volume Sparks: (51,000 - 50,000) \* 3x + (50,000 -10,000) \* 2.5x + (10,000-1,000) \* 2x + (1,000-100) 1.5x + 100 \* 1x = 122,450

Descubra oportunidades específicas de multiplicadores en la sección Explorar dApps:

<p align="center">
  <img width="500" alt="dApp tab" src="https://github.com/user-attachments/assets/a2067f6d-0202-474f-8acb-c9cd2d4007e9"/>
</p>

Además de mantener tokens estratégicos y desplegar activos en varias dApps, los usuarios también pueden ganar multiplicadores adicionales participando en campañas especiales. Los multiplicadores de las campañas pueden acumularse sobre los multiplicadores base destacados anteriormente para potenciar aún más Sparks. Los multiplicadores base están sujetos a cambios sin previo aviso.

---

## Coretoshi NFT Holders

With the new Coretoshi Attribution layer, Coretoshi NFT holders now enjoy extra benefits:

1. 200 additional Sparks per transaction with [no limit](#activities-with-core-ecosystem-dapp);
2. 1.5x extra Sparks Multiplier automatically applied on top of users' existing Volume Multiplier.

> _**Example Calculation:**_
> If a Coretoshi holder trades the equivalent of $51,000 in volume a day, this holder will receive:\
> Daily Volume Sparks: 1.5x \* [(51,000 - 50,000) \* 3x + (50,000 -10,000) \* 2.5x + (10,000-1,000) \* 2x + (1,000-100) 1.5x + 100 \* 1x]  = 18,675

<p align="center">
  <img width="500" alt="Coretoshi_Attribution" src="https://github.com/user-attachments/assets/14619a45-9244-433a-89b5-195e7fa10dc0" />
</p>

Visit the [blog](https://coredao.org/explore/blog/coretoshi-nft-sparks-multiplier-core-ignition-rewards) for more details and updates for new benefits.

---

## Sparks Slashing

Sparks Slashing ensures fair rewards by reducing Sparks for users who become inactive. Users are warned if their activity drops significantly, and Sparks are only slashed after repeated violations, but any new activity stops slashing immediately.

### 1. Slashing mechanism:

- Inactive users lose Sparks: If a user earns 90% fewer Sparks than their average for a week, Sparks are slashed starting on the 2nd violation.
- Slashing increases over time.
- Users receive warnings before the slashing occurs.
- Slashing Mechanism kicks in 1-month after sign-up.
- Slashing calculation happens every Sunday.

### 2. Violation criteria:

If the average daily Sparks for that week < Average daily sparks for the season \* 10%

### 3. Slashing criteria:

- Total accumulated Sparks  \* (0.9^# of violation - 1)
- 1st violation: Total Sparks \* 0.9^0 = NO slashing
- 2nd violation: total sparks \* 0.9^1 = 10% slashing
- 3rd violation: total sparks \* 0.9^2 = 19% slashing

> _**Example Calculation:**_\
> Assuming that a user got 50,000 total Sparks at the start of season 3 and no Sparks since then:
>
> - 1st violation: NO slashing
> - 2nd violation: 50,000 - 50,000 \* (0.9 ^1) = 5,000 Sparks are deducted
> - 3rd violation: 45000 - 45000\*(0.9^2) = 8,550 Sparks are deducted
> - 4th violation: 36,450 -36,450\*(0.9^3) = 9,878 Sparks are deducted

Visit the [blog](https://coredao.org/explore/blog/core-ignition-season-3-updates) for more details.
