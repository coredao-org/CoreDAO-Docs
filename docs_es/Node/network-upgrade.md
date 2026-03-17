---
sidebar_label: Actualizando Geth
hide_table_of_contents: false
sidebar_position: 2
---

# Cómo actualizar Geth

Actualizar `geth` es tan fácil como parece. Sólo necesita descargar e instalar la versión más reciente de `geth`, apagar su nodo y reiniciar con el nuevo software. Geth utilizará automáticamente los datos de su nodo anterior y sincronizará los últimos bloques que se extrajeron desde que cerró el software anterior.

### Paso 1: Compile la nueva versión o descargue nuevos archivos binarios precompilados desde el lanzamiento

```bash
git clone https://github.com/coredao-org/core-chain

make geth
```

```bash
# Download pre-build binaries

# Linux
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_linux |cut -d\" -f4)
mv geth_linux geth
chmod -v u+x geth

# MacOS
wget   $(curl -s https://github.com/coredao-org/core-chain/releases/latest |grep browser_ |grep geth_mac |cut -d\" -f4)
mv geth_mac geth
chmod -v u+x geth
make geth
```

### Paso 2: detener a Geth

```

$ pid=`ps -ef | grep geth | grep -v grep | awk '{print $2}'`
$ kill  $pid

```

### Paso 3: reiniciar

:::note
Asegúrese de utilizar el mismo comando de inicio que utilizó antes de la actualización.
:::

```bash
##
./geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```
