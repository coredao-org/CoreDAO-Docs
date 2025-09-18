---
sidebar_label: Actualizando Geth
hide_table_of_contents: false
sidebar_position: 2
---

# Cómo Actualizar Geth

---

Actualizar `geth` es muy sencillo. Solo necesitas descargar e instalar la nueva versión de `geth`, apagar tu nodo y luego reiniciarlo con el nuevo software. Geth utilizará automáticamente los datos del nodo anterior y sincronizará los bloques más recientes que se hayan minado desde que se detuvo el software anterior.

### Paso 1: Compila la nueva versión o descarga los nuevos binarios precompilados desde la página de releases

```bash
git clone https://github.com/coredao-org/core-chain

make geth
```

```bash
# Download pre-built binaries

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

### Paso 2: Detén Geth

```
$ pid=`ps -ef | grep geth | grep -v grep | awk '{print $2}'`
$ kill  $pid
```

### Paso 3: Reinicia

:::note
Asegúrate de usar el mismo comando de inicio que utilizabas antes de la actualización.
:::

```bash
##
./geth --config ./config.toml --datadir ./node --cache 8000 --rpc.allow-unprotected-txs --txlookuplimit 0
```