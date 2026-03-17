---
sidebar_label: Delegar Core
hide_table_of_contents: false
sidebar_position: 2
---

# Delegar Core

---

Al delegar CORE a los validadores, los titulares de CORE pueden ayudar a proteger la red y compartir las recompensas del sistema.

## Selección del validador

Los delegados pueden utilizar el sitio web de apuestas de Core para gestionar sus posiciones:

| red principal                                                                                                                                                                                       | Red de prueba                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [Sitio web de participación en la red principal] (https://stake.coredao.org) | [Sitio web de participación de Testnet](https://stake.test.btcs.network) |

La información del validador aparece en el sitio de apuestas, y todos los validadores se clasifican según su puntuación híbrida actual, como se muestra a continuación. Las explicaciones de los términos clave están disponibles para cada encabezado de columna en el sitio de apuestas, y se pueden ver haciendo clic en el símbolo "i" al lado del encabezado de la columna.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-1.avif)

Al comienzo de cada ronda, el consenso de Satoshi Plus selecciona a los Validadores según sus puntuaciones híbridas. Los nodos se clasifican en orden descendente de esta puntuación, con los **23** nodos superiores seleccionados para formar el conjunto de validadores activo para la ronda actual. Las puntuaciones híbridas se calculan utilizando la siguiente fórmula:

`S = porcentaje_hash * m + porcentaje_moneda * (1 - m)`

Dónde,
`coin_percentage` representa la proporción de los tokens de participación **CORE** y **BTC**
`m` es un factor de ponderación dinámico inicialmente establecido en **2/3**

La información del validador se actualiza diariamente a las **00:00 UTC** al comienzo de cada ronda.

## Delegación

Al seleccionar el nombre de un Validador, se abrirá una página de validador con más información sobre él, como se muestra a continuación.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-2.avif)

Para delegar al Validador, seleccione el botón **Delegar→DelegarCoin** en la parte superior izquierda. Ingrese el monto del depósito en el campo de entrada y seleccione 'Delegar' para enviar su transacción de delegación, como se muestra a continuación. Para ejecutar la transacción, deberá firmarla y enviarla utilizando MetaMask u otra billetera web compatible.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-3.avif)

Después de delegar con éxito a un Validador, puede encontrar el monto total delegado en la pestaña **Coin**, con sus transacciones históricas de delegación enumeradas en la pestaña **CoinRecord**. Puedes delegar en más de un Validador.

Para anular la delegación de su CORE, simplemente seleccione el botón **Anular delegar→Anular delegarCoin** y firme la transacción.

## Reclamar recompensas

Puede ver información de recompensas sobre sus delegaciones activas seleccionando **Mi apuesta** en la parte superior derecha del sitio web de apuestas. Las recompensas de delegación (apuestas) se distribuyen después de cada ronda a las 00:00 a. m. UTC todos los días.

Para reclamar sus recompensas, simplemente seleccione el botón **Reclamar** en la parte superior izquierda y firme la transacción. Después de enviar la transacción, recibirá las recompensas en su dirección vinculada. Las transacciones de reclamaciones históricas se enumeran en la pestaña **Reclamaciones** del sitio web, como se muestra a continuación.

![delegate-core](../../static/img/delegate/delegate-core/delegate-core-4.avif)
