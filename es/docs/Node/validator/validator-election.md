---
sidebar_label: Elección del validador
hide_table_of_contents: false
sidebar_position: 2
---

# Proceso de elección del validador en la red de la cadena Core

---

## Descripción general

Los validadores son una parte crucial de la red Core. Además del hecho de que manejan la validación de transacciones y la producción de bloques, el proceso de elección del validador es donde se unen todos los componentes, es decir, DPoW, DPoS y Bitcoin sin custodia, del consenso de Satoshi Plus. El proceso de elección del Validador es una característica central del mecanismo de consenso Satoshi Plus empleado por Core Chain. Este proceso garantiza la integridad, seguridad y eficiencia de la cadena de bloques mediante la elección de Validadores responsables de validar las transacciones y crear nuevos bloques.

## Importancia de la elección del validador

- **Seguridad e integridad**: los validadores mantienen la integridad de la cadena de bloques, lo que hace que un proceso de elección sólido sea crucial para garantizar que solo los nodos más confiables administren el libro mayor de la cadena de bloques.

- **Descentralización**: El proceso de elección permite a los mineros y participantes participar en la selección del Validador, promoviendo la descentralización y evitando la concentración del control.

- **Alineación de incentivos**: se incentiva a las partes interesadas a apoyar a validadores eficaces, alineando intereses en toda la red. Los validadores y sus partidarios (mineros y apostadores) reciben recompensas, lo que garantiza la responsabilidad y la participación continua.

- **Eficiencia y escalabilidad**: Los validadores competentes mejoran la capacidad de manejo de transacciones de la red, crucial para el rendimiento y la escalabilidad.

## Flujo de trabajo del proceso de elección del validador

El proceso de elección del Validador en Satoshi Plus implica pasos clave, respaldados por ecuaciones específicas para cuantificar las contribuciones de participación y poder de hash:

1. **Delegación de estaca**:
   - Los poseedores de tokens CORE y BTC apuestan y delegan sus tokens a candidatos a Validador. Esta delegación es una forma de votación, donde el peso de cada voto corresponde al número de tokens apostados.

2. **Delegación de poder hash**:
   - Los mineros de Bitcoin delegan una parte de su poder de hash especificando sus validadores preferidos en los bloques de Bitcoin que extraen. Este proceso integra el poder minero de Bitcoin en el mecanismo de seguridad de Core Chain.

3. **Selección del validador**:
   - Los validadores se seleccionan en función del apoyo total que reciben, calculado combinando tokens apostados (BTC y CORE) y poder de hash de Bitcoin delegado.

4. **Formación del conjunto de validadores**:
   Se forma un conjunto de Validadores a partir de aquellos con las puntuaciones más altas. Este conjunto se actualiza dinámicamente para reflejar los cambios continuos en las delegaciones de participación y las asignaciones de poder hash. Hay dos pasos involucrados en la elección del validador.

5. Las puntuaciones híbridas se calculan para todos los validadores de la red con la siguiente ecuación. La puntuación híbrida para cada validador se calcula según la siguiente fórmula:

$$
 S = \frac{rHp}{tHp} * m + \frac{rSp + rBp * n}{tSp + tBp * n} * (1 - m) 
$$

Donde:

- $rHp$ es el poder de hash de Bitcoin delegado a un validador, medido como el número total de bloques de Bitcoin con la información de ese validador escrita en sus transacciones de coinbase;
- $tHp$ es el poder hash total en Core Chain
- $rSp$ es la cantidad de tokens CORE delegados por los poseedores de tokens CORE a ese validador
- $tSp$ es la cantidad total de tokens CORE apostados en Core Chain
- $rBp$ es la cantidad de tokens BTC delegados por los titulares de BTC a ese validador
- $tBp$ es la cantidad total de BTC apostados en Core Chain
- $m$ es un factor dinámico que controla los pesos generales del poder hash $(0 <m <1)$
- $n$ es un factor dinámico que controla el poder de voto de cada BTC frente a cada token CORE.

2. Al final de cada ronda, los validadores se clasifican según su puntuación híbrida y los **23** validadores con las puntuaciones híbridas más altas se seleccionan para el conjunto de validadores de la siguiente ronda.

Dejando de lado los detalles matemáticos, se trata esencialmente de un procedimiento de votación bicameral ponderado. Los mineros de Bitcoin pueden votar por validadores a través de su PoW (escribiendo la información del validador en la transacción de coinbase en los bloques que ya han extraído), los poseedores de tokens CORE pueden votar por un validador con su PoS (delegándole sus tokens) y los no- Los apostadores de bitcoins con custodia pueden votar por un validador a través del mismo mecanismo. Este PoW delegado y el PoS delegado se ponderan para determinar la puntuación híbrida.

Este es el "núcleo" de Core blockchain, el mecanismo mediante el cual la red aprovecha la seguridad y descentralización de la red Bitcoin y la escalabilidad y componibilidad de cadenas PoS como Ethereum. Permitir que los mineros de Bitcoin y los apostadores de Bitcoin voten sobre los validadores permite a Core Chain aprovechar la legendaria solidez de Bitcoin; y debido a que Core Chain es compatible con EVM, es posible crear contratos inteligentes, dApps y otras aplicaciones en Core Chain que no podrían realizarse sin cambios en el protocolo Bitcoin subyacente.

5. **Producción de bloques**:
   - Después de la elección, todos los validadores se clasifican aproximadamente según su puntuación híbrida y se turnan para producir bloques **en forma circular** antes de que el proceso comience de nuevo desde el principio. Al _limitar inicialmente el número de validadores a **21**_, Satoshi Plus ofrece una tasa de transacción más alta y una mayor escalabilidad, pero se espera que el número de validadores aumente a **31 validadores para el segundo trimestre de 2025**. En el segundo trimestre de 2024, Core ya amplió su conjunto de validación activa de **21** a **23**. Es más, este mecanismo proporciona seguridad adicional a través de una mayor eficiencia y tolerancia para una gran cantidad de jugadores bizantinos. Core Chain es segura siempre y cuando no más de $1 \más de 3$ de los validadores sean maliciosos.

6. **Distribución de recompensas**:

   - Las recompensas se distribuyen en función de las contribuciones a la seguridad de la red, utilizando la siguiente fórmula:

     $$
        rH = \frac{rHp}{tHp} * \frac{m}{S} * R
     $$

     $$
        rS = \frac{rSp}{tSp + tBp * n} * \frac{(1-m)}{S} * R
     $$

     $$
        rB = \frac{(rBp * n)}{(tSp + tBp * n)} * \frac{(1-m)}{S * R}
     $$

     Donde:

     - $rH$ son las recompensas recibidas por el validador debido al poder hash delegado en él (DPoW)
     - $rS$ son las recompensas recibidas por el validador debido al CORE que se le ha delegado (DPoS)
     - $rB$ son recompensas del validador atribuidas a la participación en BTC
     - $R$ son las recompensas generales atribuidas a todos los delegados.

     Para completar, aquí hay otras tres proporciones de interés:

     $$
        rHu = \frac{rH}{rHp}
     $$

     $$
        rSu = \frac{rS}{rSp}
     $$

     $$
        rBu = \frac{rB}{rBp}
     $$

     Donde:

     - $rHu$ son las recompensas del poder hash del validador por unidad;
     - $rSu$ son las recompensas de apuesta de tokens CORE por unidad;
     - $rBu$ son las recompensas de apuesta de BTC por unidad;

   Estas funciones de división de recompensas están diseñadas para crear un mercado activo de recompensas y al mismo tiempo fomentar la competencia entre el conjunto de validadores tanto para el poder de hash delegado como para la participación delegada (BTC y CORE).

### Diagrama de flujo del proceso de elección del validador

El siguiente diagrama representa visualmente el proceso de elección del Validador en Satoshi Plus:

![flujo-de-elección-validador](../../../static/img/staoshi-plus/flujo-elección-validador.png)

Este diagrama de flujo ilustra la naturaleza cíclica de la elección del validador y sus responsabilidades actuales dentro del mecanismo de consenso de Satoshi Plus. Enfatiza cómo la delegación de participación y poder de hash influye directamente en la selección de validadores, la producción de bloques y la distribución de recompensas, impulsando una red segura, descentralizada y administrada de manera eficiente.
