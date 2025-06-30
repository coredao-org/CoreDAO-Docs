---
sidebar_label: Sincronización de nodos Core
hide_table_of_contents: false
sidebar_position: 2
---

# Sincronización de nodos Core

---

En la red Core, puede sincronizar su nodo con el último estado de la cadena de bloques Core de varias maneras. En este documento, lo guiamos a través del proceso de sincronización de nodos en la red Core.

## Sincronizar desde instantánea (recomendado)

Descargue los binarios precompilados desde la [página de lanzamiento] (https://github.com/coredao-org/core-chain/releases/latest) o siga las instrucciones a continuación

#### Linux

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth
```

#### MacOs

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_mac |cut -d\" -f4)
mv geth_mac geth
chmod -v u+x geth
```

### Descargue los archivos de configuración

Descargue `genesis.json` y `config.toml` mediante:

```bash
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep mainnet |cut -d\" -f4)
unzip mainnet.zip
```

### Configuración de pares

- **Mainnet**: El archivo `config.toml` incluido en la última versión viene configurado con la información sobre los `Bootstrap Nodes` y los `Static Nodes`, como se muestra a continuación:

```yaml
```

### Descargar instantánea

Descarga la snapshot de datos de la cadena más reciente [aquí](https://github.com/coredao-org/core-snapshots).

### Iniciar el nodo

```bash
./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```

:::note
Asegúrate de usar la versión de geth que descargaste con wget anteriormente y no tu instalación local de geth, la cual podría ser una versión incorrecta.
:::

:::tip
It is recommended to run a fast node, which is a full node with the `--tries-verify-mode none` flag set, if you want high performance and care little about state consistency.

./geth --config ./config.toml --datadir ./node  --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0 --tries-verify-mode none
:::

### Monitorear el estado del nodo

Puede monitorear el registro desde `/node/logs/core.log` de forma predeterminada.

## Sincronización desde Genesis Block (no recomendado)

:::note
Tenga en cuenta que el método recomendado para sincronizar el nodo testnet es sincronizar desde el bloque génesis, ya que actualmente la instantánea no está disponible. Puede descargar el binario más reciente para testnet desde [aquí](https://github.com/coredao-org/core-chain/releases).
:::

Escriba el estado de génesis localmente ejecutando el siguiente comando desde el directorio de su nodo.

```bash
geth --datadir node init genesis.json
```

Deberías ver el siguiente resultado:

```bash
```

Después de completar la configuración del nodo completo, ¡puedes comenzar a ejecutarlo!

Para ejecutar un nodo completo, ejecuta el siguiente comando `geth `:

```bash
## iniciar un nodo completo
geth --config ./config.toml --datadir ./node  --cache 8000
```

## Modo de sincronización

Existen dos modos de sincronización para ejecutar un nodo completo: **snap** y **full**, los cuales se pueden especificar mediante la bandera **--syncmode**.

- El modo **snap** sync se utiliza para la sincronización inicial. Este modo descarga los estados más recientes en lugar de ejecutar los bloques desde el bloque génesis. Una vez completada la sincronización inicial, el nodo cambiará automáticamente al modo full.

- El modo **full** sync también puede utilizarse para la sincronización inicial, pero ejecutará todos los bloques desde el bloque génesis. Pero **no se recomienda**, ya que la cantidad de datos históricos es demasiado grande. En su lugar, se sugiere descargar una snapshot desde el [repositorio oficial](https://github.com/coredao-org/core-snapshots) e iniciar una sincronización completa desde dicha snapshot.

- Si no se proporciona la marca **--syncmode**, el modo de sincronización predeterminado dependerá del estado de la carpeta de datos. Será el modo **snap** si sincroniza desde génesis o el modo **full** si comienza desde un snapshot.