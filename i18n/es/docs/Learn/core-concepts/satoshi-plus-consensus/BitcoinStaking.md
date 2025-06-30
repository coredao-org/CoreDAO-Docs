---
sidebar_label: ""
hide_table_of_contents: false
sidebar_position: 0
description: ""
---

# Staking de Bitcoin Autocustodiado (Timelocking)

---

## Visión general

El Staking de Bitcoin Autocustodiado permite a los holders de Bitcoin ganar recompensas en tokens CORE al participar en el consenso de Core, **sin ceder jamás la custodia de su Bitcoin**. Aprovechando el opcode nativo de Bitcoin llamado CheckLockTimeVerify (CLTV), este enfoque convierte el Bitcoin inactivo en un activo productivo, preservando al mismo tiempo sus principios fundamentales de seguridad y soberanía.

No hay wrapping, ni puentes, ni exposición al riesgo de contratos inteligentes.

## Principios Fundamentales

- **100% Autocustodia:** Tu Bitcoin nunca sale de tu wallet
- **Riesgo de Principal Cero**: Los fondos permanecen totalmente seguros bajo las propias reglas de Bitcoin
- **Rendimiento Trustless:** Sin intermediarios de terceros
- **Seguridad Nativa de Bitcoin**: El Bitcoin en staking está protegido completamente por el mecanismo de consenso de Bitcoin

## Cómo Funciona

### Timelocking de Bitcoin vía CLTV

El opcode CheckLockTimeVerify (CLTV) de Bitcoin permite a los holders bloquear su Bitcoin por un periodo determinado:

- **Periodo mínimo de bloqueo**: 24 horas
- **Duración flexible**: Tú decides cuánto tiempo bloquear
- **Aplicación forzada por el protocolo**: Todos los nodos de Bitcoin respetan automáticamente el bloqueo

Durante este tiempo, el Bitcoin queda inutilizable — incluso por el propietario — hasta que expire el tiempo de bloqueo.

### Selección de Validadores mediante Metadata

Al crear la transacción de timelock, se incluye metadata en el redeem script que especifica:

- **Qué validador de Core** deseas apoyar
- **Qué dirección EVM** debe recibir tus recompensas en tokens CORE

Tu poder de voto en Core es **proporcional a la cantidad de Bitcoin** que bloquees en soporte a un validador.

### Integración del Relayer y el Consenso

La red de relayers de Core escanea continuamente la blockchain de Bitcoin para:

- Detectar timelocks CLTV válidos con metadata incrustada del validador
- Validar la transacción
- Transmitir los datos a la lógica de consenso on-chain de Core
- Actualizar los pesos de elección de validadores en función de la cantidad de Bitcoin delegado

Este proceso garantiza una sincronización en tiempo real y trustless entre la actividad en Bitcoin y el consenso en Core.

### Distribución de Recompensas

Cuando un validador que has apoyado es elegido y cumple con sus funciones:

- Gana recompensas en tokens CORE
- Una parte de esas recompensas se distribuye a todos los holders de Bitcoin que hicieron timelock en su apoyo
- Las recompensas se envían automáticamente a la dirección EVM proporcionada en la metadata del timelock

La cantidad de recompensas varía según la actividad del validador y la cantidad de Bitcoin en staking en su apoyo.

### Expiración del Timelock

Una vez que finaliza tu período de bloqueo:

- Tu Bitcoin vuelve a ser completamente gastable
- Tu voto al validador y elegibilidad para recompensas expiran
- Puedes crear un nuevo timelock para reanudar tu participación

**No existe renovación automática** — la participación continua requiere una nueva transacción de timelock.

## Beneficios

### Para Holders de Bitcoin

- Genera rendimiento sin perder el control de tus fondos
- Mantén el Bitcoin en su forma nativa
- Evita bridges, custodios y riesgos de contratos inteligentes

### Para la Red Core

- Elección descentralizada de validadores respaldada por Bitcoin
- Seguridad reforzada por el peso económico real de Bitcoin
- Un sistema alineado con los valores de soberanía y transparencia de Bitcoin

## Por qué es importante

Históricamente, Bitcoin ha sido un activo no productivo, que no genera rendimiento. Al utilizar la función nativa de timelock CLTV de Bitcoin, Core permite a los holders de BTC obtener rendimientos participando de forma trustless en el proceso de consenso de una plataforma de contratos inteligentes de alto rendimiento.

## Consulta los rendimientos actuales

Rendimientos actuales en tiempo real disponibles en **[stake.coredao.org](https://stake.coredao.org)**
