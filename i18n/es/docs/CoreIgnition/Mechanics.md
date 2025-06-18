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

To update the user profile, click on the profile menu.

<p align="center">
  <img width="288" alt="Ignition Profile meatballs menu" src="https://github.com/user-attachments/assets/d7523504-df48-4f39-93f3-94e472a03a9a"/>
</p>

### Balance de la Billetera Ignition

The Ignition Wallet balance displays a subset of whitelisted assets that the account holds on Core. Users can earn Sparks (points) by bridging/holding assets with an extra Sparks boost on Core.

### Balance de dApp Ignition

The Ignition dApp balance reflects the assets the user has deposited within the whitelisted dApps on Core. Los usuarios también pueden aumentar Sparks interactuando con estas dApps en Core.

### Activos Permitidos

Una lista de tokens elegibles para ganar Sparks en Core Ignition. Refer to the [How to Boost Multipliers](#how-to-boost-multipliers) section for the complete list.

### dApps Permitidas

Una lista de aplicaciones descentralizadas donde las interacciones de los usuarios contribuyen a ganar Sparks en Core Ignition. Visit the '[Explore dApps](https://ignition.coredao.org/dashboard?tab=explore)' tab on the Ignition Dashboard for complete details.

### Pools Permitidos

Pools de liquidez de una dApp DEX permitida que incluyen al menos un token permitido, y que califican para Sparks en Core Ignition.

---

## Leaderboard de Core Ingnition

### 1. Leaderboard

Ranks users based on a combination of assets & dApp engagements, transaction count, and transaction volume, rewarding overall contribution to the ecosystem.

<p align="center">
  <img width="900" alt="Screenshot 2025-05-12 at 8 51 44 PM" src="https://github.com/user-attachments/assets/39d78e16-e6a1-4787-b0f3-14d4dfb1f112" />
</p>

### 2. Leaderboard de Actividad

Clasifica a los usuarios según la cantidad y el volumen de transacciones, recompensando tanto la actividad frecuente como las operaciones de alto valor. Está diseñada para dar un reconocimiento justo a los usuarios cotidianos mediante Spark Boosts, independientemente del tamaño de su wallet.

<p align="center">
  <img width="900" alt="Screenshot 2025-05-12 at 8 52 02 PM" src="https://github.com/user-attachments/assets/674c4743-7299-4d75-877f-823621182cc6" />
</p>

---

## Cómo Aumentar Sparks

Sparks are cumulative points reflecting how active users are in the Core ecosystem, updated daily at 00:00 UTC and appear on the Leaderboard. Los usuarios ganan Sparks diariamente mediante:

#### 1. Assets in Ignition Wallet Balance

The amount and type of whitelisted assets users bridge to Core will be reflected in the user's Ignition Wallet Balance. Al mantener estos activos en Core, los usuarios ganarán Sparks. Sparks are calculated daily based on the user's wallet balance.

#### 2. Activities with Core Ecosystem dApp

Users could also earn Sparks by interacting with whitelisted dApps on Core Ignition. Cada actividad en la cadena con estas dApps contribuirá con puntos Spark a la cuenta del usuario. Más detalles se actualizarán pronto.

| Tipo de Transacción             | Sparks por Transacción | Máximo de Sparks por Día |
| ------------------------------- | ---------------------- | ------------------------ |
| Provisión de Liquidez           | 800                    | 8,000                    |
| Solicitar préstamos             | 400                    | 12,000                   |
| Otorgar préstamos               | 200                    | 4,000                    |
| Swapping                        | 100                    | 3,000                    |
| Interacción con dApps de Gaming | 50                     | 1,000                    |
| Otros                           | 50                     | 2,000                    |
| Coretoshi NFT, Doopidoo         | 200                    | Ilimitado                |

#### 3. Campaign Joined

Core Ignition will feature flash or time-limited campaigns on a rolling basis, offering users special opportunities to supercharge Sparks. Manténgase conectado revisando las secciones de campaña dentro de la aplicación y siguiendo los anuncios oficiales de Core en [X (Twitter)](https://x.com/Coredao_Org) para las últimas actualizaciones.

#### 4. Invite New Users to Join Ignition

For those new to Core Ignition, bridge $50 USD worth of whitelisted assets to Core to unlock a permanent invite link. Para los usuarios que se registraron en la Temporada 2, el código de invitación se desbloquea automáticamente. Al invitar nuevos usuarios a Core Ignition, los usuarios recibirán el 10% de los Sparks diarios obtenidos por los invitados de primer grado y el 2% de los invitados de segundo grado. Tenga en cuenta que puede aplicarse un límite a los Sparks máximos que cada usuario puede ganar mediante referidos.

---

## Cómo Aumentar Multiplicadores

Los multiplicadores son variables dinámicas que multiplican los puntos Spark. The consolidated multiplier displayed on the user's dashboard reflects the total multiplier currently applied to the user's entire asset. Este multiplicador total se calcula promediando los multiplicadores distribuidos entre los distintos activos. Two types of baseline multipliers affect Sparks points through specific activities, independent of any special campaigns:

- **Multiplicadores por Token**: Aumentan los puntos obtenidos con base en actividades relacionadas con los tokens y su tenencia.
- **Multiplicadores por Volumen**: Amplifican los puntos ganados a través de actividades basadas en el volumen de transacciones.

<p align="center">
  <img width="500" alt="image" src="https://github.com/user-attachments/assets/4f7ceee6-6a93-4cce-a382-5e6002ce2819"/>
</p>

### 1. Multiplicadores por Token

Los usuarios pueden beneficiarse de multiplicadores base por token para los activos permitidos que tengan en sus wallets o que hayan depositado en diversas dApps. Los distintos tokens permitidos están asociados a multiplicadores específicos, los cuales varían según el tipo de actividad realizada con estas dApps, como se detalla a continuación:

| Activos Permitidos                                                          | Activos en Billetera | Otorgar préstamos    | Solicitar préstamos  | Provisión de Liquidez |
| --------------------------------------------------------------------------- | -------------------- | -------------------- | -------------------- | --------------------- |
|                                                                             | 1x                   | 2.5x | 3x                   | 3.5x  |
| USDT,USDC                                                                   | 1x                   | 1.5x | 2x                   | 3x                    |
| CORE, WCORE                                                                 | 1x                   | 1.5x | 2x                   | 2.5x  |
| wETH, solvBTC.CORE                                          | n/a                  | 1.4x | 1.6x | 1.8x  |
| aBTC, BTCB, nBTC, oBTC, pumpBTC, rBTC, suBTC, uBTC, wBTC                    | n/a                  | 1.2x | 1.4x | 1.6x  |
| BTC.B, SolvBTC.b, SolvBTC.m | n/a                  | 1x                   | 1.2x | 1.6x  |

> _**Example 1:**_
> If the user holds 10 stCORE in the Ignition wallet balance, the user gets:\
> Daily Asset Sparks = stCORE amount \* stCORE price \* Multiplier = 10 stCORE \* $1.5 (assumed) \* 1 = 15

> _**Example 2:**_
> If the user lends 20 stCORE in a Lending Protocol, the user gets:\
> Daily Asset Sparks = stCORE amount \* stCORE price \* Multiplier = 20 stCORE \* $1.5(assumed) \* 2.5 = 75

### 2. Multiplicadores por Volumen

Los usuarios que interactúan con [pools permitidos](#whitelisted-pools) reciben multiplicadores basados en el equivalente en USD de su volumen de volumen de operaciones por día. El valor del multiplicador aumenta progresivamente a medida que crece el volumen de transacciones, aplicándose distintos valores según los siguientes rangos:

| Rango de Volumen                    | Multiplicador        |
| ----------------------------------- | -------------------- |
| $0 ~ > $100         | 1x                   |
| $100 ~ > $1,000     | 1.5x |
| $1,000 ~ > $10,000  | 2x                   |
| $10,000 ~ > $50,000 | 2.5x |
| $50,000 en adelante                 | 3x                   |

> **Ejemplo de Cálculo:**
> Si un usuario realiza operaciones por un volumen diario equivalente a $51,000, recibirá: Sparks Diarios por Volumen = (51,000 – 50,000) \* 3x + (50,000 – 10,000) \* 2.5x + (10,000 – 1,000) \* 2x + (1,000 – 100) \* 1.5x + 100 \* 1x = 122,450 Sparks

Descubra oportunidades específicas de multiplicadores en la sección Explorar dApps:

<p align="center">
  <img width="500" alt="dApp tab" src="https://github.com/user-attachments/assets/a2067f6d-0202-474f-8acb-c9cd2d4007e9"/>
</p>

Además de mantener tokens estratégicos y desplegar activos en varias dApps, los usuarios también pueden ganar multiplicadores adicionales participando en campañas especiales. The multipliers from campaigns can stack on top of the baseline multipliers highlighted above to boost Sparks further. Los multiplicadores base están sujetos a cambios sin previo aviso.

---

## Tenedores de Coretoshi NFT

Con la nueva Coretoshi Attribution layer, los poseedores de NFTs Coretoshi ahora disfrutan de beneficios adicionales:

1. 200 additional Sparks per transaction with [no limit](#2-activities-with-core-ecosystem-dapp);
2. Multiplicador adicional de 1.5x aplicado automáticamente sobre el multiplicador de Volumen que el usuario ya tenga.

> Ejemplo de Cálculo:
> Si un tenedor de Coretoshi realiza operaciones por un volumen diario equivalente a $51,000, recibirá: Sparks Diarios por Volumen = 1.5x \* [(51,000 – 50,000) \* 3x + (50,000 – 10,000) \* 2.5x + (10,000 – 1,000) \* 2x + (1,000 – 100) \* 1.5x + 100 \* 1x] = 183,675 Sparks

<p align="center">
  <img width="500" alt="Coretoshi_Attribution" src="https://github.com/user-attachments/assets/14619a45-9244-433a-89b5-195e7fa10dc0" />
</p>

Visita el [blog](https://coredao.org/explore/blog/coretoshi-nft-sparks-multiplier-core-ignition-rewards) para obtener más detalles y actualizaciones sobre nuevos beneficios.

---

## Slashing de Sparks

El Slashing de Sparks garantiza recompensas justas al disminuir los Sparks de los usuarios que se vuelven inactivos. Se advierte a los usuarios si su actividad cae significativamente, y los Sparks solo se reducen tras infracciones repetidas. Sin embargo, cualquier nueva actividad detiene la reducción de inmediato.

### 1. Mecanismo de Slashing:

- Usuarios inactivos pierden Sparks: si un usuario gana un 90 % menos Sparks que su promedio semanal, la reducción se aplica a partir de la segunda infracción.
- La reducción aumenta con el tiempo.
- Los usuarios reciben advertencias antes de que se aplique la reducción.
- Slashing Mechanism kicks in 1 month after sign-up.
- El cálculo de la reducción se realiza cada domingo.

### 2. Criterio de Infracción:

Si el promedio diario de Sparks de la semana < Promedio diario de Sparks de la temporada \* 10%.

### 3. Criterio de Slashing:

- Sparks acumulados totales × (0.9^# de infracción– 1)
- 1.ª infracción: Sparks totales × 0.9^0 = SIN reducción
- 2.ª infracción: Sparks totales × 0.9^1 = Reducción del 10 %
- 3.ª infracción: Sparks totales × 0.9^2 = Reducción del 19 %

> **Ejemplo de cálculo:**
> Suponiendo que un usuario obtuvo 50,000 Sparks acumulados al inicio de la temporada 3 y no ha ganado más Sparks desde entonces:
>
> - 1.ª infracción: SIN reducción
> - 2.ª infracción: 50,000 – 50,000 \* (0.9^1) = se descuentan 5,000 Sparks
> - 3.ª infracción: 45,000 – 45,000 \* (0.9^2) = se descuentan 8,550 Sparks
> - 4.ª infracción: 36,450 – 36,450 \* (0.9^3) = se descuentan 9,878 Sparks

Visita el [blog](https://coredao.org/explore/blog/core-ignition-season-3-updates) para más detalles.