---
sidebar_label: Visión general
hide_table_of_contents: false
sidebar_position: 2
---

# Dual Staking

---

## Visión general

Dual Staking se refiere al proceso de hacer staking de Bitcoin y tokens CORE simultáneamente, donde mayores proporciones de staking de CORE en relación con Bitcoin otorgan acceso a niveles más altos de rendimiento. **Cuanto más CORE se apueste en comparación con el Bitcoin, mayor será el potencial de rendimiento.** Por lo tanto, tasas atractivas de staking de Bitcoin están siempre disponibles para los participantes más alineados con Core, incentivando a los stakers de Bitcoin a también hacer staking de CORE—alineando incentivos y fortaleciendo la seguridad de la red.

Dual Staking crea una **ventaja matemática** en el sistema de distribución de recompensas de Core, reconociendo que la participación dual proporciona un mayor valor de seguridad para la red que cualquiera de los mecanismos de forma aislada, con rendimientos máximos de ~25-50x mayores que el staking solo de Bitcoin.

**Consulta las tasas de rendimiento en tiempo real en [stake.coredao.org/staking](https://stake.coredao.org/staking)**

## Cómo funciona el Dual Staking

### Participación Dual

El Dual Staking requiere una participación simultánea en dos componentes del consenso tripartito Satoshi Plus de Core:

**Self-Custodial Bitcoin Staking (Timelocking):**

- Bloquea temporalmente Bitcoin usando CLTV en la blockchain de Bitcoin
- Incluye metadatos de votación de validadores en la transacción de timelock
- Mantén la autocustodia completa de tu Bitcoin durante todo el proceso.

**Delegated Proof of Stake (Delegación de CORE):**

- Delega tokens CORE a validadores en la red de Core
- Puedes apoyar al mismo validador que en el staking de Bitcoin o a uno distinto

### Sistema de Rendimiento Escalonado

El protocolo utiliza un **sistema de multiplicadores basado en tiers** para aumentar las recompensas de staking de Bitcoin a favor de los Dual Stakers:

| **Tier**         | **CORE-to-Bitcoin Ratio (R)** | **Label**           | **Description**               |
| ---------------- | ----------------------------- | ------------------- | ----------------------------- |
| **Base Tier**    | R < R₁                        | P<sub>Base</sub>    | No CORE delegation            |
| **Boost Tier**   | R₁ ≤ R < R₂                   | P<sub>Boost</sub>   | Entry-level Dual Staking tier |
| **Super Tier**   | R₂ ≤ R < R₃                   | P<sub>Super</sub>   | Higher CORE-to-Bitcoin ratio  |
| **Satoshi Tier** | R ≥ R₃                        | P<sub>Satoshi</sub> | Highest tier; maximum rewards |

- Los umbrales de nivel (**R₁, R₂, R₃**) son dinámicos y se ajustan según las condiciones de la red.
- Los niveles más altos desbloquean **multiplicadores de recompensas**progresivamente mayores.

### Ejemplo de cálculo

Supongamos que haces staking de **10 Bitcoin**.

Si las relaciones de nivel están definidas como:

- **R₁ = 3,625 CORE/Bitcoin**
- **R₂ = 10,875 CORE/Bitcoin**
- **R₃ = 29,000 CORE/Bitcoin**

Entonces, tus umbrales serían:

| **Tier**     | **CORE Required** |
| ------------ | ----------------- |
| Boost Tier   | 36,250 CORE       |
| Super Tier   | 108,750 CORE      |
| Satoshi Tier | 290,000 CORE      |

Tu nivel de recompensa se determina por la cantidad de CORE que hayas delegado en relación con tu Bitcoin en staking.

## Beneficios

**Rendimientos mejorados:**

- Obtén rendimientos ~25-50x más altos en comparación con el staking de solo Bitcoin
- Accede a recompensas sostenibles y nativas del protocolo
- Benefíciate tanto de emisiones fijas como de ingresos por tarifas de transacción

**Consideraciones de riesgo:**

- El capital en Bitcoin permanece completamente seguro, sin suposiciones de confianza adicionales
- La delegación de CORE opera bajo las mismas suposiciones de confianza que DPoS
- El Dual Staking no cambia cómo haces staking, solo cómo se te recompensa

## Mejores prácticas

- **Supervisa los umbrales de los tiers** con regularidad — se ajustan según la participación
- **Monitorea el rendimiento de los validadores** para maximizar el tiempo activo y los rendimientos
- **Diversifica tu selección de validadores** para reducir la dependencia en un solo proveedor

## Sostenibilidad del rendimiento

- Los tiers se ajustan **dinámicamente** para mantener rendimientos atractivos
- El protocolo equilibra accesibilidad y sostenibilidad a largo plazo, adaptándose a las condiciones del mercado y los niveles de participación

## Por qué es importante

Dual Staking desbloquea rendimientos atractivos y sostenibles para los stakers de Bitcoin que están más comprometidos con Core, representado por la cantidad de staking de CORE en relación con Bitcoin. El sistema incentiva a los holders de Bitcoin a convertirse también en holders de CORE, alineando ambos ecosistemas y generando efectos de red más fuertes, ya que ambos activos trabajan juntos para asegurar y expandir la red Core.

**Comienza con Dual Staking en stake.coredao.org**

:::info
Consulta la sección de [Preguntas Frecuentes de Dual Staking](../../../FAQs/dual-staking-faqs.md) para más preguntas o aclaraciones. Para soporte adicional, puede dirigir sus consultas al [Foro de Desarrolladores de Core](http://forum.coredao.org) o al [Servidor de Discord de Core](https://discord.gg/M2AGJKSG).\
:::
