---
sidebar_label: Seguridad
hide_table_of_contents: false
sidebar_position: 2
description: Conozca el modelo de seguridad de Core
---

# Seguridad Core

---

## Descripción general

Core, como cadena de bloques EVM alineada con Bitcoin, aprovecha el mecanismo de consenso de Satoshi Plus para mantener una combinación óptima de seguridad, descentralización y escalabilidad. Este enfoque aprovecha las características de seguridad intrínsecas de Bitcoin al tiempo que permite una sólida funcionalidad de contrato inteligente y la integración de DeFi, lo que la convierte en una plataforma pionera en el espacio blockchain.

## Componentes de seguridad

### 1. Prueba de trabajo delegada (DPoW) y prueba de participación delegada (DPoS)

Core incorpora estos dos poderosos mecanismos para formar un entorno blockchain equilibrado y seguro. El DPoW amplía el modelo de seguridad probado de Bitcoin al permitir a los mineros delegar el poder de hash al Core, beneficiándose así de la inmensa tasa de hash y el pedigrí de seguridad de Bitcoin. Por otro lado, DPoS permite que tanto BTC (a través de apuestas sin custodia) como los titulares de tokens CORE apuesten sus activos con validadores en la red Core, promoviendo la gobernanza descentralizada de la red y capas de seguridad adicionales.

### 2. Seguridad del validador

Los validadores son fundamentales para mantener la integridad y seguridad de la cadena de bloques Core. Se seleccionan en función del peso combinado de los tokens apostados (CORE y BTC) y el poder de hash delegado, de modo que solo los nodos más confiables y respaldados manejen el proceso de consenso. Este sistema de soporte dual mitiga el riesgo de centralización y violaciones de seguridad.

### 3. Seguridad a través de incentivos

El mecanismo Satoshi Plus incentiva tanto a los mineros como a los apostadores (CORE y BTC) al proporcionar recompensas en tokens CORE, alineando sus intereses con la longevidad e integridad de la red. Este incentivo económico ayuda a mantener un nivel de participación sólido, crucial para mantener una red segura y descentralizada.

## Protocolos e implementaciones de seguridad

1. **Validación sólida de transacciones**
   Los validadores principales son responsables de verificar las transacciones y crear nuevos bloques. La combinación única de DPoW, DPoS y Stake BTC sin custodia involucra a muchas partes interesadas y un capital significativo en la elección de validadores, lo que incentiva en gran medida la elección de validadores confiables y la participación honesta de esos validadores.

2. **Resiliencia de la red contra ataques**
   La integración del poder hash de Bitcoin con las apuestas de CORE y BTC hace que Core sea excepcionalmente resistente contra varios tipos de ataques. El alto costo de atacar un sistema híbrido de este tipo, combinado con el consenso distribuido logrado a través de mecanismos delegados, mejora significativamente la seguridad de la red.

3. **Actualización y flexibilidad**
   A diferencia de las cadenas de bloques tradicionales que se basan únicamente en una única forma de consenso, el modelo híbrido de Core permite adaptabilidad y actualización. Esta flexibilidad está diseñada para permitir que la red evolucione en respuesta a amenazas de seguridad emergentes o avances en la tecnología blockchain.

## Vectores de ataque y medidas de seguridad en el ecosistema central

Core emplea una arquitectura de seguridad sólida para mitigar amenazas potenciales, integrando salvaguardias tecnológicas e incentivos económicos dentro del mecanismo de consenso de Satoshi Plus. A continuación se ofrece una vista ampliada de cómo se logran estas mitigaciones para cada vector de ataque potencial.

### Ataques de doble gasto

- **Descripción:** El doble gasto implica que un atacante intenta gastar la misma moneda digital dos veces.
- **Mitigación lograda por:**
  - **Integración de PoW y PoS:** La utilización de la red minera de Bitcoin para su componente PoW agrega un poder de hash significativo, lo que hace que reescribir la cadena de bloques sea costosa y poco práctica. El componente PoS requiere que los validadores tengan participación en el juego, lo que hace que las actividades maliciosas perjudiquen financieramente al atacante.
  - **Validación de transacciones mejorada:** Cada transacción es validada tanto por mineros como por participantes, lo que proporciona dos capas de verificación contra inconsistencias o fraude.

### 51% Ataques

- **Descripción:** Estos ataques ocurren cuando una sola entidad obtiene el control de más de la mitad del poder computacional o la capacidad de participación de la red.
- **Mitigación lograda por:**
  - **Base de validadores descentralizados:** Al exigir que los validadores estén respaldados por contribuciones sustanciales de participación y hash, el sistema asigna una amplia distribución de control, diluyendo el poder que cualquier minero o grupo podría tener.
  - **Desincentivos económicos:** El costo asociado con la adquisición de recursos suficientes para controlar más de la mitad de los aspectos de minería y participación de la red hace que dichos ataques sean económicamente desventajosos.

### Ataques de sibila

- **Descripción:** Un atacante crea numerosas identidades falsas para obtener una influencia desproporcionada en la red.
- **Mitigación lograda por:**
  - **Barreras económicas:** Los requisitos de participación y minería introducen importantes barreras financieras de entrada, lo que desalienta la proliferación de identidades falsas, ya que cada una debe estar respaldada por importantes recursos reales.
  - **Verificación de identidad mediante participación y minería:** Los validadores son entidades conocidas que deben demostrar continuamente su compromiso mediante minería y participación continuas, por lo que solo los participantes genuinos controlan la red.

### Ataques de largo alcance

- **Descripción:** Los atacantes intentan revertir la cadena de bloques a un estado anterior construyendo una cadena alternativa desde un punto anterior.
- **Mitigación lograda por:**
  - **Puntos de control:** Core implementa puntos de control periódicos donde el estado de la cadena de bloques en ciertos intervalos se solidifica, evitando la reversión más allá de estos puntos.
  - **Mecanismo de finalidad:** La cadena de bloques emplea mecanismos que confieren finalidad a los bloques después de un cierto número de confirmaciones, lo que hace imposible alterar la historia de la cadena más allá de estos bloques confirmados.

### Alineación de incentivos económicos

- **Descripción:** Todos los participantes de la red tienen incentivos económicos para actuar en el mejor interés de la red.
- **Mitigación lograda por:**
  - **Distribución de recompensas:** Los mineros, los participantes y los validadores reciben recompensas que se correlacionan con su contribución a la seguridad de la red, alineando sus incentivos económicos con la salud y seguridad general de la cadena de bloques.
  - **Sanciones por comportamiento deshonesto:** Los validadores y mineros corren el riesgo de perder sus apuestas o su potencial de ganancias futuras si se descubre que están actuando de manera maliciosa, lo que agrega una capa de disuasión financiera contra la mala conducta.

### Ataques a la gobernanza

- **Descripción:** Implican explotar el mecanismo de gobernanza para aprobar propuestas desfavorables o maliciosas.
- **Mitigación lograda por:**
  - **Requisitos de amplio consenso:** Las propuestas requieren un amplio consenso entre un conjunto diverso de partes interesadas, minimizando el riesgo de que un grupo pequeño y concentrado pueda afectar unilateralmente los cambios.
  - **Proceso transparente de propuesta y votación:** Todas las acciones de gobernanza se registran de forma transparente en la cadena de bloques, lo que facilita la trazabilidad y la rendición de cuentas.

### Vulnerabilidades de los contratos inteligentes

- **Descripción:** Las vulnerabilidades en el código de contrato inteligente pueden aprovecharse para realizar robos o manipular servicios.
- **Mitigación lograda por:**
  - **Auditorías de código y revisiones de seguridad:** Las auditorías periódicas y exhaustivas del código de contrato inteligente realizadas por empresas de seguridad independientes ayudan a identificar y rectificar posibles vulnerabilidades.
  - **Programas de recompensas por errores:** Alentar a la comunidad y a los investigadores de seguridad a encontrar e informar errores, de modo que muchas vulnerabilidades potenciales se detecten tempranamente ofreciendo recompensas por su descubrimiento.

## Conclusion

La estrategia de seguridad de Core está profundamente integrada con su mecanismo de consenso único, Satoshi Plus, que aprovecha las fortalezas tanto de las capacidades mineras de Bitcoin como de los mecanismos de participación que prevalecen en las cadenas de bloques modernas. Además, la estrategia de seguridad de Core es multifacética y aborda vulnerabilidades potenciales a través de salvaguardias técnicas, incentivos económicos y procesos impulsados ​​por la comunidad. Este enfoque integral no solo mejora la resiliencia de la red contra ataques sino que también fomenta un ecosistema sólido donde las partes interesadas están motivadas a mantener y proteger la integridad de la red. A medida que Core continúa desarrollando e integrando nuevas funciones, su enfoque fundamental en la seguridad sigue siendo un componente crítico en su diseño y operación, de modo que siga siendo una plataforma segura y confiable tanto para usuarios como para desarrolladores.
