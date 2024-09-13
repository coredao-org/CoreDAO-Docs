---
sidebar_label: Componentes principales
hide_table_of_contents: false
sidebar_position: 2
description: Conozca los componentes principales del mecanismo Satoshi Plus
---

# Mecanismo de consenso Satoshi Plus

---

El mecanismo de consenso Satoshi Plus representa una innovación revolucionaria en la tecnología blockchain, diseñada específicamente para que la plataforma Core combine sinérgicamente los sólidos atributos de seguridad de Bitcoin con la flexibilidad y escalabilidad de los contratos inteligentes. Este modelo de consenso híbrido combina la prueba de trabajo delegada (DPoW), la prueba de participación delegada (DPoS) y la participación sin custodia de Bitcoin, lo que permite a los mineros de Bitcoin participar directamente en la gobernanza y la seguridad de una plataforma de contrato inteligente descentralizada sin incurrir en costos adicionales. Al aprovechar la infraestructura minera de Bitcoin establecida, Satoshi Plus no solo fomenta un protocolo de seguridad de doble capa, sino que también mejora las estructuras de incentivos en ambos ecosistemas, asegurando una alineación equilibrada de intereses entre todas las partes interesadas involucradas en Core blockchain.

![satoshi-plus](https://github.com/user-attachments/assets/8e90becb-71c2-4798-813c-27bcf6e1badb)

## Componentes principales del mecanismo Satoshi Plus

El mecanismo de consenso Satoshi Plus, diseñado para Core blockchain, integra ingeniosamente características de Prueba de Trabajo Delegada (DPoW), Prueba de Participación Delegada (DPoS) y Participación No Custodial de Bitcoin. Este sistema híbrido está diseñado para aprovechar las fortalezas de la infraestructura minera existente de Bitcoin y al mismo tiempo incorpora la flexibilidad de los mecanismos de participación que prevalecen en muchas cadenas de bloques modernas. A continuación se detallan los distintos componentes, sus funciones y cómo interoperan para mantener la seguridad y la eficiencia de la red. A continuación se muestra un diagrama que ilustra cómo los diferentes componentes principales del mecanismo de consenso Satoshiu plus encajan para proporcionar un ecosistema seguro y sólido.

![component-diagram](../../../../static/img/staoshi-plus/component-diagram.jpg)

### 1 1

**Descripción:**
DPoW amplía el sistema tradicional de prueba de trabajo (PoW) utilizado por Bitcoin para incluir funciones de delegación. Esto permite a los mineros de Bitcoin participar en el mecanismo de consenso de Core blockchain sin alterar significativamente sus operaciones mineras existentes.

**Cómo funciona:**

- **Participación de los mineros:** Los mineros de Bitcoin contribuyen a la seguridad de Core blockchain al asignar una parte de su poder computacional a la red. Esto se facilita a través de una implementación única donde los mineros incluyen metadatos específicos (como la dirección de un Core Validator y el destino de sus recompensas de tokens CORE) en el campo "op_return" de un bloque de Bitcoin.
- **Flujo de trabajo:** Cuando un minero extrae un nuevo bloque de Bitcoin, agrega esta información adicional para indicar su soporte para un Core Validator en particular. Este poder de hash delegado ayuda a proteger la cadena de bloques Core y, a cambio, los mineros obtienen tokens CORE adicionales, que son complementarios a sus recompensas habituales de minería de Bitcoin.
  - **Mineros de Bitcoin**: los mineros de Bitcoin protegen la red Bitcoin a través de PoW y pueden delegar su PoW a un validador central al incluir cierta información en la transacción de coinbase de un bloque mientras está en proceso de minado. Esta delegación no es destructiva, lo que significa que están reorientando su trabajo existente, sin elegir entre proteger Bitcoin y proteger Core.

  - **Retransmisores**: los retransmisores transmiten encabezados de bloques de Bitcoin a la red central. Cualquiera puede convertirse en retransmisor registrándose y bloqueando un depósito de token CORE reembolsable.

### 2. **Prueba de participación delegada (DPoS)**

**Descripción:**
DPoS permite a los poseedores de tokens Bitcoin y CORE participar en la gobernanza de la red apostando sus tokens con Validadores. Este modelo promueve un proceso de consenso más democrático y escalable en comparación con el PoW tradicional.

**Cómo funciona:**

- **Apuesta y votación:** Los poseedores de tokens apuestan sus tokens CORE con Validadores, votando efectivamente para que participen en el proceso de consenso. Cuantos más tokens se apuesten con un Validador, mayor será su influencia en la validación de transacciones y la creación de nuevos bloques.
- **Flujo de trabajo:** Los participantes delegan sus tokens a los validadores a través de un proceso de participación seguro en la plataforma Core. A cambio, reciben recompensas por apostar en forma de tokens CORE. Los tokens apostados contribuyen a los procesos generales de seguridad y toma de decisiones de la red.
  - **Bitcoin Stakers**: la tercera parte del consenso de Satoshi Plus es la participación sin custodia de Bitcoin, que permite a cualquier titular de bitcoin obtener rendimiento apostando sus tokens de bitcoin sin renunciar a la custodia.
  - **CORE Stakers**: todos los poseedores de tokens CORE nativos de Core Chain pueden garantizar la seguridad de la red delegando sus tenencias de tokens a un validador.

### 3. **Apuesta de Bitcoin sin custodia**

**Descripción:**
El tercer componente más importante del mecanismo de consenso de Satoshi Plush es el **Stake de Bitcoin sin custodia**. Esta característica permite a los titulares de Bitcoin participar en la gobernanza de la red apostando su Bitcoin de forma nativa en Bitcoin y luego delegándolos a sus validadores deseados en la red Core. This model promotes a more democratic and scalable consensus process compared to traditional PoW.

**How it works:**

- **Staking and Voting:** Bitcoin holders stake their assets on Bitcoin network and also delegate them to their desired Validators on the Core blockchain, effectively voting for them to participate in the consensus process. The more Bitcoin staked with a Validator, the greater their influence in validating transactions and creating new blocks.
- **Workflow:** Stakers delegate their Bitcoin to Validators through a secure staking process on the Core platform. In exchange, they receive staking rewards in the form of CORE tokens. The staked tokens contribute to the network's overall security and decision-making processes.

### 4. **Validators**

**Description:**
Validators are central to the functioning of the Satoshi Plus mechanism. They perform critical network functions including block production, transaction validation, and consensus achievement. Anyone can become a Core validator by registering with the network and locking up a refundable CORE token deposit.

**How it works:**

- **Block Production:** Validators are responsible for creating new blocks in the Core blockchain. They aggregate transactions into blocks, execute them, and then append these blocks to the blockchain.
- **Workflow:** Validators are chosen to produce blocks based on their total delegated stake (from both DPoW and DPoS). The selection process considers the amount of hash power and token stake delegated to them, ensuring that those with higher support from the community have a higher chance of being selected to create blocks.
  - **Validator Election** - The validator set is determined through election, with validators chosen based on their hybrid score for each round. Any validator in the current validator set which hasn’t been jailed or slashed is considered “_live_”. To ensure a more stable TPS, the live validators are updated every **200** blocks, meaning that if any validators are jailed or slashed, the others can continue mining blocks as usual. Core uses its Validator Election mechanism to rank the top **23** validators based on hybrid scores, creating the validator set for a consensus period of **200** slots, known as an epoch. Each slot presents an opportunity for a block to be created and lasts **3** seconds. As such, each epoch lasts **600** seconds, or **10** minutes, and gives a validator up to **10** chances to create a block once accepted for an epoch.

  - **Hybrid Score** - Every validator node seeking to become part of the validator set is given a hybrid score, which is calculated based on three factors: the DPoW from Bitcoin miners, the DPoS from CORE holders, and bitcoin holders delegating bitcoin to their preferred validators. The validator set is made up of the **23** validators with the highest hybrid scores.

  - **Verifiers** - Verifiers are responsible for reporting malicious behaviors on the network. Successful verification flags may result in slashing a malicious validator’s rewards or stake, or by jailing them outright, and verifiers are compensated for this monitoring activity when block rewards are dispensed. Anyone can act as a verifier on the Core network.

  - **Round** - A round is the period of time during which the Core network updates the validator set and distributes rewards. At present, a round is one day. Every round (i.e. every day), all validators are given a hybrid score, and the **23** validators with the highest hybrid scores are elected to the validator set. The validator set then becomes responsible for producing blocks on the Core network for the entirety of that round. When the last block of each round has been produced, the accumulated rewards for the full round are calculated and distributed, and the validator set for the next round is also determined.

  - **Slot** - Each **1-day** round is divided into slots, and all validators in the validator set take turns producing one block per slot, in a round robin manner. Currently, the slot length is set to three seconds. In each slot, an honest validator either produces a block or fails to do so (if there are network issues, eclipse attacks, etc).

  - **Epoch** - An epoch is the span of time during which the system checks each validator’s status so as to exclude jailed validators from participating in consensus activities. Currently, an epoch is set to **200** slots, which is **600** seconds or **10** minutes. Validator status is checked once per epoch (rather than continuously) in order to keep TPS roughly constant in a given round.

### 5. **Incentive Alignment**

**Description:**
A critical aspect of Satoshi Plus is the alignment of incentives across miners, stakers, and Validators. This ensures all parties are motivated to act in the best interests of the network.

**How it works:**

- **Rewards Distribution:** Both miners and stakers receive rewards in CORE tokens, aligning their interests with the network's health. This dual-reward system encourages ongoing participation and support for the network.
- **Workflow:** Rewards are calculated based on several factors including the amount of computational power or tokens contributed, and are distributed automatically by the Core blockchain protocol. This incentivizes continuous and honest participation in the network.

### 6. **Network Security and Symbiosis**

**Description:**
Satoshi Plus enhances the security of both the Bitcoin and Core networks by creating a symbiotic relationship where security enhancements in one benefit the other.

**How it works:**

- **Shared Security Model:** By allowing Bitcoin miners to participate in Core's security mechanisms, the system leverages Bitcoin's immense hashing power, enhancing the security of Core blockchain without requiring significant additional resources.
- **Workflow:** As miners and stakers contribute to Core Chain’s security, both networks benefit. Miners use their existing setups to support Core blockchain, and stakers provide additional security layers through token delegation, creating a robust and resilient network.

In summary, the Satoshi Plus consensus mechanism cleverly integrates these components into a cohesive system that benefits from the security and decentralization of Bitcoin's mining process and the agility and governance capabilities of modern staking models, fostering a secure, efficient, and scalable blockchain environment.
