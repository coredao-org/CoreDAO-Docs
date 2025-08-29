---
sidebar_label: Descripción general
hide_table_of_contents: false
sidebar_position: 2
---

# Descripción general del Staking

---

El staking constituye 2/3 del consenso Satoshi Plus de Core, lo que permite tanto a los tenedores de Bitcoin como de tokens CORE ayudar a asegurar la red y ganar recompensas. Core admite dos formas distintas de staking:

- **Staking de Bitcoin Autocustodiado**, que utiliza el timelocking nativo de Bitcoin para permitir a los holders de Bitcoin votar por validadores de Core sin ceder la custodia
- **Staking de tokens CORE**, que permite a los tenedores de CORE delegar su participación a validadores como voto.

## Cómo funciona el Staking

Core admite dos métodos de staking trustless, cada uno contribuyendo a la elección de validadores y a la distribución de recompensas. Ambos métodos te permiten apoyar a validadores y ganar recompensas en tokens CORE a cambio.

### Staking de Bitcoin Autocustodiado

Los holdersde Bitcoin pueden hacer staking de forma nativa sin hacer wrapping, sin bridging y sin renunciar a la custodia. Esto se logra mediante el uso del opcode de Bitcoin CheckLockTimeVerify (CLTV).

**Pasos:**

1. **Bloquea tu Bitcoin temporalmente**
   Usa CLTV para bloquear una cantidad específica de BTC por un período fijo (mínimo: 24 horas). Durante ese tiempo, el Bitcoin estará completamente intransferible.
2. **Especifica el validador y la dirección de recompensas** al crear la transacción timelock, inserta metadatos que:
   - Indiquen qué validador de Core deseas apoyar
   - Especifiquen una dirección de Core para recibir tus recompensas en CORE
3. **Transmite la transacción de Bitcoin** Una vez confirmada en Bitcoin, la transacción con timelock es detectada y registrada por la red de relayers de Core.
4. **Gana recompensas** Si el validador que seleccionaste es elegido y está activo, recibirás una parte de sus recompensas en tokens CORE. Estas se enviarán a la dirección de Core que proporcionaste.
5. **Desbloqueo tras la expiración** Una vez que finaliza el período de bloqueo, tu Bitcoin vuelve a estar disponible para gastar. Para continuar haciendo staking, deberás crear un nuevo timelock.

### Staking de Tokens CORE (Delegated Proof of Stake)

Los tenedores de tokens CORE pueden hacer staking delegando sus tokens a validadores como votos.

**Pasos:**

1. **Selecciona un Validador** Revisa el desempeño, las tasas de comisión y el historial de los validadores para decidir a quién delegar.
2. **Delegar Tokens CORE** Elige la cantidad de tokens CORE que deseas delegar.
3. **Gana Recompensas** Si el validador que seleccionaste es elegido y participa activamente, recibirás una parte de sus recompensas en tokens CORE. Estas se enviarán a la dirección de Core desde la cual realizaste la delegación.
4. **Modificar o Redelegar** Puedes cambiar tu delegación en cualquier momento, incluyendo mover tu participación a otro validador.

## Elección de Validadores

La selección de validadores se basa en un **hybrid score** calculado a partir de:

- **Bitcoin en timelock** (a través de CLTV)
- **Tokens CORE delegados** (mediante DPoS)
- **Poder de minado de Bitcoin delegado** (mediante Delegated Proof of Work)

En cada ronda de elección, los validadores con las puntuaciones híbridas más altas son seleccionados para validar transacciones y producir bloques.

Cuanto mayor sea el apoyo que reciba un validador mediante staking de Bitcoin y CORE, mayor será su probabilidad de ser elegido.

## Recompensas y Economía del Staking

### Fuentes de Recompensas:

- **Recompensas por Bloques**: Nuevos tokens CORE se emiten en un calendario fijo durante 81 años, con una reducción anual del 3.61%.
- **Comisiones por Transacción**: Una parte de las comisiones de transacción en Core se distribuye entre los validadores y sus delegadores.

### Distribución

- Los stakers de Bitcoin y los stakers de CORE reciben recompensas cuando los validadores que han elegido están activos y con buen rendimiento.
- Las recompensas se distribuyen de forma proporcional según la cantidad delegada y la estructura de comisiones del validador.

## Staking Dual

Dual Staking se refiere al proceso de hacer staking de Bitcoin y tokens CORE simultáneamente, donde mayores proporciones de staking de CORE en relación con Bitcoin otorgan acceso a niveles más altos de rendimiento. **Cuanto más CORE se haga stake en relación con el Bitcoin, mayor será el potencial de rendimiento.** Por lo tanto, las tasas atractivas de staking en Bitcoin están siempre disponibles para los participantes más alineados con Core, incentivando a los stakers de Bitcoin a también hacer staking de CORE — alineando los incentivos y fortaleciendo la seguridad de la red.

El Dual Staking crea una **ventaja matemática** en el sistema de distribución de recompensas de Core al reconocer que la participación dual proporciona un mayor valor de seguridad para la red que cualquiera de los mecanismos por separado, con rendimientos máximos ~25-50x superiores al staking de solo Bitcoin.
