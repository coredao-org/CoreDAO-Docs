---
sidebar_label: Elección del validador
hide_table_of_contents: false
sidebar_position: 2
---

# Proceso de Elección de Validadores en la Red Core

---

## Visión general

Los validadores son una parte fundamental de la red Core. Además de encargarse de la validación de transacciones y la producción de bloques, el proceso de elección de validadores es donde convergen todos los componentes del consenso Satoshi Plus —es decir, DPoW, DPoS y el Self-Custodial Bitcoin Staking. Este proceso es una característica central del mecanismo de consenso Satoshi Plus utilizado por la blockchain de Core. Garantiza la integridad, seguridad y eficiencia de la red mediante la elección de validadores responsables de validar transacciones y crear nuevos bloques.

## Importancia de la Elección de Validadores

- **Seguridad e Integridad**: Los validadores mantienen la integridad de la blockchain, por lo que un proceso de elección robusto es esencial para asegurar que solo los nodos más confiables gestionen el libro mayor de la red.

- **Descentralización**: El proceso de elección permite que mineros y stakers participen en la selección de validadores, promoviendo la descentralización y evitando la concentración de poder.

- **Alineación de Incentivos**: Los participantes están incentivados a apoyar validadores efectivos, alineando los intereses en toda la red. Los validadores y sus partidarios (mineros y stakers) reciben recompensas, lo que asegura responsabilidad y participación continua.

- **Eficiencia y Escalabilidad**: Validadores competentes mejoran la capacidad de manejo de transacciones de la red, lo cual es crucial para el rendimiento y la escalabilidad.

## Flujo del Proceso de Elección de Validadores

El proceso de elección de validadores en Satoshi Plus involucra pasos clave, respaldados por ecuaciones específicas que cuantifican las contribuciones tanto de stake como de poder de hash:

1. **Delegación de Stake**: Los poseedores de tokens CORE y BTC hacen staking y delegan sus tokens a los candidatos a validador. Esta delegación funciona como una forma de votación, donde el peso de cada voto corresponde a la cantidad de tokens apostados.

2. **Delegación de Poder de Hash**: Los mineros de Bitcoin delegan una porción de su poder de hash al especificar sus Validadores preferidos en los bloques de Bitcoin que minan. Este proceso integra el poder de minería de Bitcoin en el mecanismo de seguridad de Core.

3. **Selección de Validadores**: Los validadores son seleccionados en función del respaldo total que reciben, calculado al combinar los tokens apostados (BTC y CORE) y el poder de hash de Bitcoin delegado.

4. **Formación del Conjunto de Validadores**: Se forma un conjunto de validadores a partir de aquellos con las puntuaciones más altas. Este conjunto se actualiza dinámicamente para reflejar los cambios continuos en las delegaciones de stake y las asignaciones de poder de hash. Hay dos pasos involucrados en la elección de validadores.

   1. Los hybrid scores se calculan para todos los validadores de la red con la siguiente ecuación. El hybrid score para de cada validador se determina con la siguiente fórmula:

$$
 S = (\frac{rHp}{tHp})* m + (\frac{rSp}{tSp})*k + (\frac{rBp}{tBp})*l
$$

Donde, $$m + k + l = 1$$

- $$rHp$$: poder hash de Bitcoin delegado a un validador.
- $$tHp$$: potencia hash total en Core.
- $$rSp$$: Cantidad de tokens CORE apostados en un validador.
- $$tSp$$: Total de tokens CORE en stake en Core.
- $$rBp$$: Cantidad de tokens BTC apostados en un validador.
- $$tBp$$: Total de tokens BTC en stake en Core.
- $$m$$: Relación asignada al poder hash.
- $$k$$: Ratio asignado al staking de CORE.
- $$l$$: Ratio asignado al staking de BTC.

2. Al final de cada ronda, los validadores se clasifican según su hybrid score y los **27** validadores con las puntuaciones más altas son seleccionados para formar el conjunto de validadores en la siguiente ronda.
   Dejando de lado los detalles matemáticos, este proceso equivale esencialmente a un procedimiento de votación bicameral ponderado. Los mineros de Bitcoin pueden votar por validadores mediante PoW (escribiendo la información del validador en la transacción coinbase de los bloques que han minado), los poseedores de tokens CORE pueden votar por un validador a través de PoS (delegando sus tokens al validador), y stakers de Bitcoin en autocustodia también pueden votar por un validador mediante la delegación de sus tokens. Este sistema incluye Proof-of-Work (PoW) delegado, Proof-of-Stake (PoS) delegado y Bitcoin staking autocustodiado, los cuales se ponderan para determinar el hybrid score de cada validador.

Este es el "núcleo" de la blockchain de Core: el mecanismo mediante el cual la red aprovecha la seguridad y descentralización de la red Bitcoin junto con la escalabilidad y capacidad de composición de cadenas PoS como Ethereum. Permitir que los mineros de Bitcoin y los stakers de Bitcoin voten por validadores le permite a Core aprovechar la legendaria solidez de Bitcoin. Y como Core es compatible con la EVM, es posible construir smart contracts, dApps y otras aplicaciones en Core que no podrían realizarse sin modificar el protocolo subyacente de Bitcoin.

5. **Producción de bloques**: Después de la elección, todos los validadores se ordenan aproximadamente según su hybrid score y toman turnos para producir bloques en un **esquema de round-robin**, antes de que el proceso comience nuevamente desde el principio.
   Al limitar inicialmente el número de validadores a **21**, Satoshi Plus ofrece una mayor tasa de transacciones y una escalabilidad mejorada; se espera que el número de validadores aumente a **34 para el segundo trimestre de 2025**. En el segundo trimestre de 2024, Core ya ha ampliado su conjunto de validadores activos de **21** a **27**. Además, este mecanismo ofrece mayor seguridad gracias a una mayor eficiencia y una tolerancia frente a un gran número de actores Bizantinos. Core es seguro siempre que no más de $1 \over 3$ de los validadores sean maliciosos.

6. **Distribución de Recompensas**:
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
     - $$rS$$: Recompensas atribuidas al staking de CORE (DPoS).
     - $$rB$$: Recompensas atribuidas al staking de BTC.
     - $$R$$: Recompensas totales asignadas a todos los delegadores.
     - $$m$$: Proporción de recompensas asignadas al poder de hash.
     - $$k$$: Proporción de recompensas asignadas al staking de CORE.
     - $$l$$: Proporción de recompensas asignadas al staking de BTC.
     - $$S$$: Hybrid score of the validator.

     Los cálculos de recompensa por unidad determinan las recompensas distribuidas por cada unidad de hash power, CORE o BTC en staking:

     - Recompensa por unidad de hash power: $$rHu$$ =  $$\frac{rH}{rHp}$$
     - Recompensa por unidad de CORE: rSu = $$\frac{rS}{rSp}$$
     - Recompensa por unidad de BTC: $$rBu$$ of **P<sub>n</sub>** =  $$\frac{rB}{rBp}$$ x Multiplicador de Rendimiento para el Nivel<sub>n</sub>

     Donde:

     - $$rHu$$ son las recompensas del poder hash del validador por unidad;
     - $$rSu$$ son las recompensas de apuesta de tokens CORE por unidad;
     - $$rBu$$ de **P<sub>n</sub>** son las recompensas de apuesta de BTC por unidad para el delegado con nivel de rendimiento de PN BTC
     - **Multiplicadores de rendimiento:** Cada nivel de rendimiento aumentado tiene un multiplicador específico (e,f,g,h, ..., etc.) que está determinado por los datos de apuesta del usuario, así como por la configuración de staking dual del sistema. Estas configuraciones están sujetas a cambios y pueden ajustarse mediante votación de gobernanza. Estos cálculos garantizan que las recompensas proporcionales se distribuyan en función de las contribuciones individuales al grupo de delegación de un validador.

#### Impacto del Dual Staking en las recompensas de BTC

Con la introducción del Dual Staking, las recompensas por staking de BTC ahora están escalonadas según la cantidad de CORE apostado en relación con BTC. Las recompensas de BTC ya no se distribuyen de manera uniforme entre todos los participantes. En su lugar, se asignan de forma dinámica con base en umbrales de dual staking, donde los niveles más altos generalmente reciben una mayor proporción de las recompensas. Esta estructura escalonada introduce variabilidad en los rendimientos del staking de BTC, alineando los incentivos en todo el ecosistema de Core mientras se mantiene la proporcionalidad en la distribución de recompensas.

### Diagrama de Flujo del Proceso de Elección de Validadores

El siguiente diagrama representa visualmente el proceso de elección del Validador en Satoshi Plus:

<p align="center">
  ![validator-election-flow](../../../../../../static/img/validator/Validator-Election-Workflow.png)
</p>

Este diagrama de flujo ilustra la naturaleza cíclica de la elección de validadores y sus responsabilidades continuas dentro del mecanismo de consenso Satoshi Plus. Resalta cómo la delegación de stake y poder de hash influyen directamente en la selección de validadores, la producción de bloques y la distribución de recompensas, impulsando una red segura, descentralizada y gestionada de manera eficiente.