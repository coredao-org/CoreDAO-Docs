---
sidebar_label: Elección del validador
hide_table_of_contents: false
sidebar_position: 2
description: Proceso de elección de validadores en Satoshi Plus
---

# Elección de Validadores en Core

---

## Descripción general

El consenso Satoshi Plus de Core obtiene apoyo para los validadores desde tres fuentes de delegación:

- **Delegated Proof of Work (DPoW)** de los mineros de Bitcoin
- **Staking de Bitcoin con autocustodia** de los holders de Bitcoin
- **Delegated Proof of Stake (DPoS)** de los holders del token CORE

Cada fuente contribuye al **hybrid score** de un validador, el cual determina su elección en el conjunto activo de validadores.

## Proceso de Elección

<p align="center">
![validator-election-flow](../../../../static/img/staoshi-plus/Validator-Election-Workflow.png)
</p>

### 1. Delegación de Apoyo

Los validadores reciben apoyo desde tres fuentes:

- **Holders de Bitcoin:** Bloquean su Bitcoin usando CLTV e insertan metadatos del validador en el redeem script para votar por validadores.
- **Mineros de Bitcoin**: Delegan hash power incluyendo votos a validadores en el campo op_return de las transacciones coinbase de Bitcoin.
- **Holders de CORE**: Delegan tokens CORE directamente a los validadores preferidos.

Cada forma de delegación contribuye a la selección del validador y a su elegibilidad para recompensas.

### 2. Cálculo del Puntaje Híbrido

Los validadores son clasificados por un **hybrid score** que combina las tres formas de apoyo:

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

Esta fórmula promueve una influencia proporcional y justa entre todas las fuentes de delegación.

### 3. Selección de Validadores y Producción de Bloques

- Los **top 29 validadores** con los hybrid scores más altos son elegidos en cada **round (1 día)**
- Los validadores producen bloques en un esquema **round-robin**, con cada turno de **3 segundos**
- El **conjunto de validadores se actualiza cada 200 bloques** para promover la consistencia y prevenir interrupciones causadas por validadores con bajo rendimiento o sancionados
- Core mantiene su operatividad siempre que menos de **⅓ de los validadores sean maliciosos**

## Resumen del Flujo

El ciclo de elección de validadores sigue este proceso:

1. **Delegación**: Mineros, stakers de CORE y stakers de Bitcoin delegan su apoyo
2. **Cálculo de Puntajes**: Se computa el hybrid score usando la fórmula definida
3. **Elección**: Se seleccionan los 29 validadores con mayor puntaje
4. **Producción de Bloques**: Los validadores toman turnos para producir bloques
5. **Recompensas**: Los validadores ganan tokens CORE y los distribuyen proporcionalmente a sus delegadores
6. **Repetición del Ciclo**: El conjunto de validadores se actualiza cada 200 bloques
