---
sidebar_label: Descripción general
description: Descripción general del Modelo de Distribución de Ingresos Core Rev+
hide_table_of_contents: false
sidebar_position: 2
---

# Modelo de Reparto de Ingresos Rev+ de Core

---

## Introducción

Rev+ es el mecanismo a nivel de protocolo de Core que habilita el reparto de comisiones al distribuir una porción de las tarifas de gas de las transacciones entre distintos participantes, incluyendo emisores de stablecoins, desarrolladores de dApps y DAOs. Esta función innovadora crea nuevos modelos económicos al permitir que diferentes actores reciban una parte de las comisiones de gas de transacciones, alineando directamente los incentivos con el crecimiento y la actividad de la red.

## ¿Qué es Rev+?

El modelo de reparto de ingresos de Core, Rev+, es un marco genérico incorporado en la Core blockchain que distribuye una porción de las tarifas de gas de las transacciones a direcciones de recompensa configuradas cuando se disparan smart contract events específicos. Este sistema habilita flujos de ingresos sostenibles para los participantes del ecosistema, especialmente emisores de stablecoins y desarrolladores, más allá de los rendimientos tradicionales de tesorería o de incentivos basados en tokens.

## Mecanismo de Reparto de Ingresos

El modelo de reparto de ingresos de Core, Rev+, soporta dos mecanismos complementarios:

1. **Distribución Directa:** Una porción de las tarifas de gas de las transacciones se distribuye automáticamente a los destinatarios designados (p. ej., desarrolladores, DAOs, emisores de stablecoins) junto con la ejecución de la transacción. Este mecanismo en tiempo real asegura que el valor se comparta inmediatamente con los contribuyentes en función de la actividad del smart contract.

2. **Reparto mediante Rev+ Pool:** Una porción de las tarifas de gas se acumula en un reward pool compartido. En intervalos regulares (p. ej., mensuales), las comisiones de este pool se distribuyen entre los socios participantes según sus contribuciones relativas al crecimiento y uso de la red. Las contribuciones se evalúan en función de cuatro métricas clave:

   - Número total de transacciones
   - Valor nocional agregado de transacciones
   - Número de direcciones activas únicas
   - Total de comisiones de transacción generadas

Esta arquitectura de doble modelo habilita tanto incentivos alineados con precisión a nivel de contrato como un reparto de ingresos más amplio, basado en datos, en todo el ecosistema.

## Beneficios Clave

### Para los Emisores de Stablecoins

Rev+ transforma la forma en que los emisores de stablecoins generan valor.

- **Nuevas fuentes de ingresos:** Rev+ ofrece un nuevo flujo de ingresos no basado en intereses a partir de la actividad de transacciones, yendo más allá de los rendimientos tradicionales de tesorería
- **Reducción de costos de distribución:** Al generar ingresos a partir de la utilidad de su stablecoin, los emisores pueden reducir efectivamente los costos asociados a la distribución.
- **Incentivos alineados:** Los ingresos están directamente correlacionados con el uso y adopción real de la stablecoin en la red, creando una poderosa alineación de intereses.

### **Para Desarrolladores**

- **Monetización directa:** Recibe automáticamente una parte de las tarifas de gas generadas por el uso de tu dApp, creando una nueva y sostenible fuente de ingresos.
- **Recompensa por crecimiento e innovación:** Tus ganancias escalan directamente con la adopción de usuarios y el volumen de transacciones, asegurando que seas compensado por construir aplicaciones valiosas y fomentar una comunidad vibrante.
- **Enfoque en la calidad del producto:** Rev+ proporciona un camino directo desde la actividad del usuario hasta los ingresos del desarrollador, eliminando la necesidad de tokenomics complejas o especulación. Esto permite a los devs enfocarse en crear experiencias de usuario excepcionales.
- **Modelos de negocio sostenibles:** Construye fuentes adicionales de ingresos recurrentes a partir de la actividad de tu aplicación, creando un modelo de negocio sostenible que no dependa de lanzamientos únicos de tokens o de rondas de financiamiento.
- **Atracción de talento y efecto volante:** El modelo de monetización sostenible atrae más talento a la red, generando un ciclo de crecimiento auto-reforzado que te beneficia a ti y a todo el ecosistema al ofrecer aplicaciones de mayor calidad.

### **Para el Ecosistema**

Rev+ está diseñado para crear un ecosistema vibrante y autosostenible donde cada participante esté alineado e incentivado para el crecimiento a largo plazo. Esto se construye sobre tres principios fundamentales: Crecimiento Alineado, Economía Sostenible y Potentes Efectos de Red.

- **Crecimiento alineado:** Todos los participantes de Rev+, desde constructores hasta usuarios, se benefician del aumento en la actividad de la red. Cuanto más se utilice la red, más valor se crea para todos.
- **Economía sostenible:** Este modelo crea una estructura de incentivos a largo plazo que alinea la creación de valor con la captura de valor. Al proporcionar una fuente adicional de ingresos que escala con la adopción de una dApp, se atraen y recompensan más desarrolladores de calidad. Esto incrementa la utilidad y el uso general de la Core blockchain, fortaleciendo el ecosistema en beneficio de la comunidad.
- **Catalizador de innovación:** Fomenta el desarrollo de alta calidad y la adopción
- **Efectos de red:** A medida que más participantes se unen al ecosistema Core, se crea un ciclo virtuoso de crecimiento que beneficia a todos. Esto se refleja en varias formas clave:
  - Una base de usuarios más amplia atrae aplicaciones más diversas e innovadoras, proporcionando mayor utilidad para todos.
  - La mayor utilidad conduce a más uso y liquidez, lo cual a su vez incrementa los ingresos para dApps y liquidity providers (LPs).
  - Este aumento de actividad también genera más comisiones de transacción para los validadores, reforzando aún más la infraestructura de la red.

## Casos de Uso Objetivo

- **Compartición de ingresos de stablecoins:** Permite a emisores de stablecoins, como USDC y AUSD, obtener ingresos de cada operación de mint o burn, creando así modelos de negocio sostenibles más allá de la gestión de tesorería.

- \***Incentivos para desarrolladores de dApps:** Permite a aplicaciones DeFi, DEXs y otros protocolos obtener ingresos continuos a partir de las interacciones de los usuarios, apoyando el desarrollo y mantenimiento a largo plazo.

- \***Monetización de tesorerías de DAOs:** Permite a DAOs en lista blanca, ya sea que gobiernen un protocolo, un servicio o una comunidad, recibir distribuciones de tarifas de protocolo activadas por eventos específicos de contratos. Esto respalda el crecimiento sostenible de la tesorería sin modificar la lógica de los contratos existentes ni imponer cargos directos a los usuarios.

## Impacto Económico

Rev+ aborda desafíos críticos en el ecosistema blockchain actual:

- **Incentivos desalineados**: Los modelos tradicionales obligan a los emisores de stablecoins a pagar altos costos iniciales de distribución sin capturar el valor de las transacciones
- **Sostenibilidad de los desarrolladores**: La mayoría de las dApps enfrentan dificultades con la monetización a largo plazo más allá de la apreciación de tokens
- **Crecimiento del ecosistema**: Crea bucles de retroalimentación positiva donde el aumento del uso beneficia a todos los participantes

El programa de compartición de ingresos a nivel de protocolo de Core, Rev+, está diseñado específicamente para acelerar la adopción de stablecoins, incentivar la actividad de los desarrolladores y generar un volumen sostenido de transacciones en toda la red. Rev+ posiciona a Core como la blockchain más atractiva para emisores de stablecoins, desarrolladores de dApps y constructores del ecosistema al alinear los incentivos económicos con el crecimiento de la red. A través de un lanzamiento progresivo y guiado por gobernanza, Core busca fomentar un ecosistema sólido y de alto rendimiento que genere valor a largo plazo para todos los participantes.

