---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 2
description: Conozca los componentes principales del mecanismo Satoshi Plus
---

# Consenso Satoshi Plus

---

Satoshi Plus es el innovador mecanismo de consenso de Core que combina la seguridad de Bitcoin con la programabilidad de la EVM para asegurar un ecosistema blockchain único y potente. Al integrar tres métodos de participación distintos—contribuciones de mineros de Bitcoin mediante Delegated Proof of Work (DPoW), delegación de tokens CORE mediante Delegated Proof of Stake (DPoS) y timelocking de Bitcoin y delegación de Bitcoin mediante Staking Autocustodiado—Satoshi Plus crea un marco de seguridad robusto que alinea los incentivos tanto en el ecosistema de Bitcoin como en el de Core. Este enfoque multinivel está diseñado para evitar que un solo grupo controle la red, al mismo tiempo que permite a los poseedores de Bitcoin generar rendimientos, a los mineros de Bitcoin recibir recompensas adicionales y a los poseedores de CORE participar en la seguridad de la red, todo ello manteniendo las propiedades fundamentales de seguridad de Bitcoin y extendiéndolas para proteger la funcionalidad de contratos inteligentes de Core.

![satoshi-plus](../../../../static/img/staoshi-plus/consensus-components.png)

## Componentes principales del mecanismo Satoshi Plus

<p align="center">
![component-diagram](../../../../static/img/Core-Architecture.png)
</p>

**Validadores:** Los validadores son responsables de producir bloques y validar transacciones en la red Core. Cualquiera puede convertirse en validador de Core registrándose en la red y bloqueando un depósito de token CORE reembolsable.

**Elección de Validadores:** El conjunto de validadores se determina a través de una elección, en la que se eligen los validadores según su puntuación híbrida en cada ronda. Cualquier validador del conjunto actual que no haya sido jailed o slashed se considera "activo". Para mantener una tasa de transacciones por segundo (TPS) más estable, el conjunto de validadores activos se actualiza cada 200 bloques, lo que permite que, si algún validador es suspendido (jailed) o penalizado (slashed), los demás puedan continuar produciendo bloques con normalidad.

**Puntuación Híbrida:** Cada nodo validador que busca formar parte del conjunto de validadores recibe una puntuación híbrida, calculada en función de tres factores: poder de hash delegado por mineros o pools de minería de Bitcoin (DPoW), tokens CORE delegados por los participantes del staking de CORE (DPoS) y Bitcoin delegado por los participantes de staking de Bitcoin (timelocking). Actualmente, el conjunto de validadores está compuesto por los 27 validadores con las puntuaciones híbridas más altas.

**Mineros de Bitcoin:** Los mineros de Bitcoin aseguran la red de Bitcoin mediante Delegated Proof of Work y pueden delegar su apoyo a un validador de Core incluyendo metadatos específicos en la transacción coinbase de un bloque recién minado. Esta delegación es no destructiva, lo que significa que los mineros continúan su función principal de asegurar Bitcoin mientras apoyan simultáneamente a Core.

**Stakers de CORE:** Los poseedores de tokens CORE nativos pueden participar en la seguridad de la red delegando sus tokens a validadores, ganando recompensas proporcionales a su delegación y a la actividad de los validadores elegidos.

**Stakers de Bitcoin (Timelockers):** Los poseedores de Bitcoin pueden bloquear su Bitcoin en la blockchain de Bitcoin usando la función nativa CLTV, haciendo que su Bitcoin sean temporalmente no gastables durante un periodo determinado. A cambio de bloquear su Bitcoin, obtienen el derecho de participar en la elección de validadores de Core. Cuando los validadores que eligieron aseguran la red de Core, los poseedores de Bitcoin reciben CORE de recompensa.

**Relayers:** Los relayers transmiten encabezados de bloques de Bitcoin hacia la red Core. Cualquiera puede convertirse en retransmisor registrándose y bloqueando un depósito de token CORE reembolsable.

**Verificadores:** Los verificadores monitorean la red para detectar comportamientos maliciosos. Si detectan una violación válida, pueden provocar un slashing de las recompensas o el stake del validador malicioso, o su jailing, recibiendo compensación por su vigilancia. Cualquiera puede actuar como verificador en la red Core.

**Ronda:** Una ronda dura un día, durante la cual los 27 validadores principales (clasificados según su puntaje híbrido) actúan como productores de bloques. Al final de cada ronda, se calculan y distribuyen las recompensas, y se selecciona un nuevo conjunto de validadores para la siguiente ronda.