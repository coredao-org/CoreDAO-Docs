---
sidebar_label: Elección del validador
hide_table_of_contents: false
sidebar_position: 2
---

# Proceso de elección del validador en la red central

---

## Descripción general

Los validadores son una parte crucial de la red Core. Además de manejar la validación de transacciones y la producción de bloques, el proceso de elección del validador es donde se unen todos los componentes — es decir, DPoW, DPoS y Self-Custodial Bitcoin Staking — del consenso de Satoshi Plus. El proceso de elección del Validador es una característica central del mecanismo de consenso Satoshi Plus empleado por la Core blockchain. Este proceso garantiza la integridad, seguridad y eficiencia de la cadena de bloques mediante la elección de Validadores responsables de validar las transacciones y crear nuevos bloques.

## Importancia de la elección del validador

- **Seguridad e integridad**: los validadores mantienen la integridad de la cadena de bloques, lo que hace que un proceso de elección sólido sea crucial para garantizar que solo los nodos más confiables administren el libro mayor de la cadena de bloques.

- **Descentralización**: El proceso de elección permite a los mineros y participantes participar en la selección del Validador, promoviendo la descentralización y evitando la concentración del control.

- **Alineación de incentivos**: se incentiva a las partes interesadas a apoyar a validadores eficaces, alineando intereses en toda la red. Los validadores y sus partidarios (mineros y apostadores) reciben recompensas, lo que garantiza la responsabilidad y la participación continua.

- **Eficiencia y escalabilidad**: Los validadores competentes mejoran la capacidad de manejo de transacciones de la red, crucial para el rendimiento y la escalabilidad.

## Flujo de trabajo del proceso de elección del validador

El proceso de elección del Validador en Satoshi Plus implica pasos clave, respaldados por ecuaciones específicas para cuantificar las contribuciones de participación y poder de hash:

1. **Delegación de Stake:** Los holdersde tokens CORE y BTC hacen stake y delegan sus tokens a los candidatos a Validador. Esta delegación es una forma de votación, donde el peso de cada voto corresponde al número de tokens apostados.

2. **Delegación de Hash Power:** Los mineros de Bitcoin delegan una porción de su poder de hash especificando sus Validadores preferidos en los bloques de Bitcoin que minan. Este proceso integra el poder minero de Bitcoin en el mecanismo de seguridad de Core.

3. **Selección de Validadores:** Los Validadores son seleccionados en función del apoyo total que reciben, calculado combinando los tokens en stake (BTC y CORE) y el poder de hash de Bitcoin delegado.

4. **Formación del Conjunto de Validadores**: Se forma un conjunto de Validadores a partir de aquellos con las puntuaciones más altas. Este conjunto se actualiza dinámicamente para reflejar los cambios continuos en las delegaciones de participación y las asignaciones de poder hash. Hay dos pasos involucrados en la elección del validador.

  1. Las puntuaciones híbridas se calculan para todos los validadores de la red con la siguiente ecuación. La puntuación híbrida para cada validador se calcula según la siguiente fórmula:

$$
 S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Donde, $$m + k + l = 1$$

- $$rHp$$: poder hash de Bitcoin delegado a un validador.
- $$tHp$$: potencia hash total en Core.
- $$rSp$$: Cantidad de tokens CORE apostados en un validador.
- $$tSp$$: Total de tokens CORE apostados en Core.
- $$rBp$$: Cantidad de tokens BTC apostados en un validador.
- $$tBp$$: Total de tokens BTC apostados en Core.
- $$m$$: Relación asignada al poder hash.
- $$k$$: Ratio asignado a la apuesta CORE.
- $$l$$: Ratio asignado a la participación en BTC.

2. Al final de cada ronda, los validadores son clasificados según su hybrid score, y los **27** validadores con los hybrid scores más altos son seleccionados para el conjunto de validadores en la siguiente ronda.
  Dejando de lado los detalles matemáticos, se trata esencialmente de un procedimiento de votación bicameral ponderado. Los mineros de Bitcoin pueden votar por validadores a través de su PoW (escribiendo la información del validador en la transacción de coinbase en los bloques que ya han extraído), los poseedores de tokens CORE pueden votar por un validador con su PoS (delegándole sus tokens) y los no- Los stakers de Bitcoin con custodia pueden votar por un validador mediante la delegación de sus tokens. Esto incluye delegated Proof-of-Work (PoW), delegated Proof-of-Stake (PoS) y Self-Custodial Bitcoin Staking, los cuales se ponderan para determinar el hybrid score.

Este es el "núcleo" de Core blockchain, el mecanismo mediante el cual la red aprovecha la seguridad y descentralización de la red Bitcoin y la escalabilidad y componibilidad de cadenas PoS como Ethereum. Permitir que los mineros de Bitcoin y los stakers de Bitcoin voten por validadores permite a Core aprovechar la legendaria robustez de Bitcoin. Debido a que Core es compatible con EVM, es posible construir smart contracts, dApps y otras aplicaciones en Core que no podrían desarrollarse sin realizar cambios en el protocolo base de Bitcoin.

5. **Producción de Bloques:** Después de la elección, todos los validadores son ordenados aproximadamente según su hybrid score y toman turnos para producir bloques en un esquema **round-robin**, antes de que el proceso comience nuevamente desde el inicio.
  Al _limitar inicialmente el número de validadores a **21**_, Satoshi Plus ofrece una tasa de transacción más alta y una mayor escalabilidad; se espera que el número de validadores aumente a **34 validadores para el segundo trimestre de 2025**. En el segundo trimestre de 2024, Core ya amplió su conjunto de validación activa de **21** a **27**. Además, este mecanismo ofrece una mayor seguridad mediante una eficiencia mejorada y una tolerancia a un gran número de actores Bizantinos. Core es seguro siempre que no más de $1 \más de 3$ de los validadores sean maliciosos.

6. **Distribución de recompensas**:
  - Las recompensas se distribuyen en función de las contribuciones a la seguridad de la red, utilizando la siguiente fórmula:

    $$
       rH = \frac{\frac{rHp}{tHp} * m} {S} * R
    $$

    $$
       rS = \frac{\frac{rSp}{tSp} * k} {S} * R
    $$

    $$
       rB = \frac{\frac{rBp}{tBp} * l} {S} * R
    $$

    Donde:

    - $$rH$$: Recompensas atribuidas al poder de hash delegado (DPoW).
    - $$rS$$: Recompensas atribuidas a la participación CORE (DPoS).
    - $$rB$$: Recompensas atribuidas a la apuesta de BTC.
    - $$rB$$: Recompensas atribuidas a la apuesta de Btc.
    - $$m$$: Proporción de recompensas asignadas al poder hash.
    - $$k$$: Proporción de recompensas asignadas a la apuesta CORE.
    - $$l$$: Proporción de recompensas asignadas a la apuesta de BTC.
    - $$S$$: Puntuación híbrida del validador.

    Los cálculos de recompensa por unidad determinan las recompensas distribuidas por cada unidad en stake de poder de hash, CORE o BTC:

    - Recompensa de poder hash por unidad: $$rHu$$ = $$\frac{rH}{rHp}$$
    - Recompensa de poder hash por unidad: $$rHu$$ = $$\frac{rH}{rHp}$$
    - Recompensa BTC por unidad: $$rBu$$ de **P<sub>n</sub>** = $$\frac{rB}{rBp}$$ x multiplicador de rendimiento para el nivel<sub>n</sub>

    Donde:

    - $$rHu$$ son las recompensas del poder hash del validador por unidad;
    - $$rHu$$ son las recompensas del poder hash del validador por unidad;
    - $$rBu$$ de **P<sub>n</sub>** son las recompensas de apuesta de BTC por unidad para el delegado con nivel de rendimiento de PN BTC
    - **Multiplicadores de rendimiento:** Cada nivel de rendimiento aumentado tiene un multiplicador específico (e,f,g,h, ..., etc.) que está determinado por los datos de apuesta del usuario, así como por la configuración de apuesta dual del sistema. Estas configuraciones están sujetas a cambios y pueden ajustarse mediante votación de gobernanza. Estos cálculos garantizan que las recompensas proporcionales se distribuyan en función de las contribuciones individuales al grupo de delegación de un validador.

#### Impacto de la doble apuesta en las recompensas BTC

Con la introducción del Dual Stake, las recompensas de BTC ahora se escalonan según la cantidad de CORE apostado en relación con BTC. Las recompensas BTC ya no se distribuyen uniformemente entre todos los participantes. En cambio, se asignan dinámicamente en función de umbrales de apuesta dual, y los niveles más altos generalmente reciben una mayor proporción de las recompensas. Esta estructura escalonada introduce variabilidad en los rendimientos de las apuestas de BTC, alineando los incentivos en todo el ecosistema Core y manteniendo la proporcionalidad en la distribución de recompensas.

### Diagrama de flujo del proceso de elección del validador

El siguiente diagrama representa visualmente el proceso de elección del Validador en Satoshi Plus:

<p align="center">
  ![validator-election-flow](../../../static/img/validator/Validator-Election-Workflow.png)
</p>

Este diagrama de flujo ilustra la naturaleza cíclica de la elección del validador y sus responsabilidades actuales dentro del mecanismo de consenso de Satoshi Plus. Enfatiza cómo la delegación de stake y poder de hasheo influyen directamente en la selección de validadores, la producción de bloques y la distribución de recompensas, impulsando una red segura, descentralizada y administrada de manera eficiente.