---
sidebar_label: Geth Proxy
description: Points de terminaison liés au Geth Proxy
hide_table_of_contents: false
sidebar_position: 2
---

# Geth Proxy

## **Geth Proxy**

> Pour la documentation complète des paramètres disponibles et leurs descriptions, veuillez consulter la documentation officielle [\*\*Ethereum JSON-RPC \*\*](https://eth.wiki/json-rpc/API).

***

## eth\_blockNumber

Renvoie le numéro du bloc le plus récent

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_blockNumber
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_blockNumber\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Aucun paramètre de requête requis.

Réponse d’exemple

```json
{
   "id":513137,
   "jsonrpc":"2.0",
   "result":"0x1b94d8"
}
```

## eth\_getBlockByNumber

Renvoie des informations sur un bloc par son numéro.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getBlockByNumber
   &tag=0x1b94d8
   &boolean=true
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getBlockByNumber\&tag=0x1b94d8\&boolean=true\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="130">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>le numéro du bloc, en hexadécimal, par exemple 0x1b94d8</td></tr><tr><td>bool</td><td>la valeur booléenne pour afficher les objets de transaction complets. Si vrai, renvoie les objets de transaction complets et leurs informations ; si faux, renvoie uniquement une liste de transactions.</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":513407,
   "jsonrpc":"2.0",
   "result":{
      "number":"0x1b94d8",
      "hash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
      "parentHash":"0x39fb2b717c64c43a7ac15e8b677e1e76e5c98966543ffc0bc90456c39b5a9d4a",
      "nonce":"0x0000000000000000",
      "sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
      "logsBloom":"0x882406200000002200400500802028001208c00814200400010000000420004000008406108000210400000000000108080080001000000008042000012c00089200004000000100000c000840000622241001310044100854600a0082000000400800a502020080402600000040080000800800c084040000800090052d400000800c00000000000004804082000000002014910404000880008144000400000200a828040022010180000002880800000210044040020000000000201600000800440204000020488c01000000a400011284c8a000001010040052020060020110001202008000092020008100000000540803410040488084040100800042",
      "transactionsRoot":"0x3ba58edc931158f2f18923afa0cee28e8cbc1df1d928e52b28deb03859f27479",
      "stateRoot":"0xeb1a0836a3ab7e5385e1a310cd71942a2d18d016ccbd0c58e36cd49b77beb497",
      "receiptsRoot":"0xaf12a266c993e8090e337a422719969ae2bd3d612b60a47a3da5b9587d0e51c5",
      "miner":"0x1fb9becc1356fcc6e70792b755e5c76e3cb26623",
      "mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000",
      "difficulty":"0x2",
      "totalDifficulty":"0x371aad",
      "extraData":"0xd983010001846765746889676f312e31372e3133856c696e757800007f90ce5d2fc2a63d6b93b3c94ece7e0efee0d191e623d6dfff261b43bb0ae4ec879130c410d7e41d6d2aed47c7394ee93f9c116fc5c3d1b78af0d4d7f448d1d4ea1f887300",
      "size":"0x1daf",
      "gasLimit":"0x1c9c380",
      "gasUsed":"0x23262d",
      "timestamp":"0x640ee364",
      "transactions":[
         {
            "hash":"0xc7defef5084f40bf636f6ed3af0b27ca527d8ce14c707b37cc3dd67191e138ec",
            "nonce":"0x2ba",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x0",
            "from":"0x2edc873c8aebfbd54540497c1c2d3b0b9fcb06ef",
            "to":"0x0000000000000000000000000000000000001003",
            "value":"0x0",
            "gasPrice":"0x2c790c63402",
            "gas":"0x4fe29",
            "input":"0x2b861629000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000003010060632381b398231b0a332f5d0b9ea878009e8dacc81a23eaa9010000000000000000005c6d712b6be548813555720bec0aa3e22c9f07e7f8d77aae1d613b5f1a4f65ca38e30e648176061738590ec3010000000001010000000000000000000000000000000000000000000000000000000000000000ffffffff640335e90b2cfabe6d6d413aa7c15440ac757444759e8206c8bed05a7565e714c83953b0496b94d4862910000000f09f909f092f4632506f6f6c2f6b0000000000000000000000000000000000000000000000000000000000000000000000050066000000000000000456e08b25000000001976a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac0000000000000000266a24aa21a9ed6e37a1c2647a9e3d044213c0bf5b6ea2ae70af4f2eb02373612005103bfd15280000000000000000266a2448617468a8cce9cea2fb3450c89981f0da61d3f8683544b417c5a39764d938c239dd96a600000000000000002c6a4c2952534b424c4f434b3a2f9fa0aedc6bf20f8767682877610e1c6e61555eb36f6cbfad56aa27004e3a32012000000000000000000000000000000000000000000000000000000000000000008a7ba33e0a9d980363f058c052f2d034c3f936e56c71f6a11ff6324c2655ca3dbeb8e2e8264d2a917292e2b08405cc6e38965b455e491226d7bf61e36918f4faede3295d74a58d51288b69dcb6ca9925a9cacd2fbea435878d83a2acb5384f72bec3ca1599489f26595abbfc652afc256ebdb97ef85cc3951fcb83107e9f4c428c34dd3dc951e91301bf53b608ccee6f675267151eca58fde33a48281652c7d1a58cbcbea798132ada84b055a995854216593f538b93bfb1c3852b12f17f673483fdf2522f6cf26237a87e4c993dd54efc68a17260534b229d8d5791574325b149cff6f0bdb4217a3710975c7917633de4d7fae5955fdbf08906510742eefca8639d28b6185f6a416987a1dc99796f226bf9a1a482d76a03c1efcdf649bcccbb99239b03049fc6da36b08ba61ca49ea8796f5a30f89d3e8b60fe367bdee6eb2938c763bbfe00000000000000000000000000000000000000000000000000000000000000",
            "r":"0xe162066609b1f4a4602e6b73e9776bb1fa67bdf4fa9d960ba58496729700cae",
            "s":"0x5c9e0248fed8d6a7cd3a78af8dde469a1dfe67f989e4837317ef83638124530e",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0x156c3de5bbcf4a88ef04f47d0b167043215970654bc5caac65e36192392141b2",
            "nonce":"0x3214",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x1",
            "from":"0x8a3abaeedc045db4051186f8b41bde512669c96a",
            "to":"0x0000000000000000000000000000000000001003",
            "value":"0x0",
            "gasPrice":"0x27735521893",
            "gas":"0x5a0e1",
            "input":"0x2b861629000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000003010060632381b398231b0a332f5d0b9ea878009e8dacc81a23eaa9010000000000000000005c6d712b6be548813555720bec0aa3e22c9f07e7f8d77aae1d613b5f1a4f65ca38e30e648176061738590ec3010000000001010000000000000000000000000000000000000000000000000000000000000000ffffffff640335e90b2cfabe6d6d413aa7c15440ac757444759e8206c8bed05a7565e714c83953b0496b94d4862910000000f09f909f092f4632506f6f6c2f6b0000000000000000000000000000000000000000000000000000000000000000000000050066000000000000000456e08b25000000001976a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac0000000000000000266a24aa21a9ed6e37a1c2647a9e3d044213c0bf5b6ea2ae70af4f2eb02373612005103bfd15280000000000000000266a2448617468a8cce9cea2fb3450c89981f0da61d3f8683544b417c5a39764d938c239dd96a600000000000000002c6a4c2952534b424c4f434b3a2f9fa0aedc6bf20f8767682877610e1c6e61555eb36f6cbfad56aa27004e3a32012000000000000000000000000000000000000000000000000000000000000000008a7ba33e0a9d980363f058c052f2d034c3f936e56c71f6a11ff6324c2655ca3dbeb8e2e8264d2a917292e2b08405cc6e38965b455e491226d7bf61e36918f4faede3295d74a58d51288b69dcb6ca9925a9cacd2fbea435878d83a2acb5384f72bec3ca1599489f26595abbfc652afc256ebdb97ef85cc3951fcb83107e9f4c428c34dd3dc951e91301bf53b608ccee6f675267151eca58fde33a48281652c7d1a58cbcbea798132ada84b055a995854216593f538b93bfb1c3852b12f17f673483fdf2522f6cf26237a87e4c993dd54efc68a17260534b229d8d5791574325b149cff6f0bdb4217a3710975c7917633de4d7fae5955fdbf08906510742eefca8639d28b6185f6a416987a1dc99796f226bf9a1a482d76a03c1efcdf649bcccbb99239b03049fc6da36b08ba61ca49ea8796f5a30f89d3e8b60fe367bdee6eb2938c763bbfe00000000000000000000000000000000000000000000000000000000000000",
            "r":"0x9548e3b43bde6b2d122cb6420bf0e37a1b3a868d3b23e11f83a85c83978b87b0",
            "s":"0x6284aa9b76cb9f8bbfb155d6d9f02c3a18a2b2944e112a12f347287492aecea3",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0x029b2b39ba45fc9db84edf646c7ac1b0c0e9897bf5115781cb83cfd64598f6b1",
            "nonce":"0x639",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x2",
            "from":"0x7d789cf39f4aab3adac2cf167cbb9e1ee2ae4420",
            "to":"0x0000000000000000000000000000000000001003",
            "value":"0x0",
            "gasPrice":"0x737be7600",
            "gas":"0x47b760",
            "input":"0x2b861629000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000003010060632381b398231b0a332f5d0b9ea878009e8dacc81a23eaa9010000000000000000005c6d712b6be548813555720bec0aa3e22c9f07e7f8d77aae1d613b5f1a4f65ca38e30e648176061738590ec3010000000001010000000000000000000000000000000000000000000000000000000000000000ffffffff640335e90b2cfabe6d6d413aa7c15440ac757444759e8206c8bed05a7565e714c83953b0496b94d4862910000000f09f909f092f4632506f6f6c2f6b0000000000000000000000000000000000000000000000000000000000000000000000050066000000000000000456e08b25000000001976a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac0000000000000000266a24aa21a9ed6e37a1c2647a9e3d044213c0bf5b6ea2ae70af4f2eb02373612005103bfd15280000000000000000266a2448617468a8cce9cea2fb3450c89981f0da61d3f8683544b417c5a39764d938c239dd96a600000000000000002c6a4c2952534b424c4f434b3a2f9fa0aedc6bf20f8767682877610e1c6e61555eb36f6cbfad56aa27004e3a32012000000000000000000000000000000000000000000000000000000000000000008a7ba33e0a9d980363f058c052f2d034c3f936e56c71f6a11ff6324c2655ca3dbeb8e2e8264d2a917292e2b08405cc6e38965b455e491226d7bf61e36918f4faede3295d74a58d51288b69dcb6ca9925a9cacd2fbea435878d83a2acb5384f72bec3ca1599489f26595abbfc652afc256ebdb97ef85cc3951fcb83107e9f4c428c34dd3dc951e91301bf53b608ccee6f675267151eca58fde33a48281652c7d1a58cbcbea798132ada84b055a995854216593f538b93bfb1c3852b12f17f673483fdf2522f6cf26237a87e4c993dd54efc68a17260534b229d8d5791574325b149cff6f0bdb4217a3710975c7917633de4d7fae5955fdbf08906510742eefca8639d28b6185f6a416987a1dc99796f226bf9a1a482d76a03c1efcdf649bcccbb99239b03049fc6da36b08ba61ca49ea8796f5a30f89d3e8b60fe367bdee6eb2938c763bbfe00000000000000000000000000000000000000000000000000000000000000",
            "r":"0x506d68da36a53abce7b3b71dfb79c8b0c4b10d948dcde15b7744b23070373841",
            "s":"0x27d9ff5df4d54ac5a11ac72c7694fbce09cec22a217af3f7da20efb9c1ef01a1",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0xd23fc089af56d0a55c47fa6ae491fbe3ece776bc2e2d2b6f52e6fd7d84cb64fa",
            "nonce":"0xcc",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x3",
            "from":"0x6e977315bb8dae844b595797b0af9370f501c284",
            "to":"0xc7887af5f95cdee2b7bbff47554104e8631751df",
            "value":"0x0",
            "gasPrice":"0x12a05f200",
            "gas":"0x7a120",
            "input":"0xe2bbb15800000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000",
            "r":"0x2001b51e1a656e8499759b91a7b11404d5c7132502a6840a7bb056d6669a75c3",
            "s":"0xd5e90ca015208baeabbc8de6abd868402ee09e12bea14cd773375c78b115f7d",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0x44071bac38f9efb43cfb9a8184a7baa03238de8145e0a80398da8ac6baf75fa9",
            "nonce":"0x1e174",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x4",
            "from":"0x0ef606c4903f3d18b8c6bb8283c53deafe60ac18",
            "to":"0xc3da629c518404860c8893a66ce3bb2e16bea6ec",
            "value":"0x0",
            "gasPrice":"0x4a817c80",
            "gas":"0xbd358",
            "input":"0xff0200000000000000000002aa1efb94e000e3a78555e1990a7b790f6b1057be503617da053240375c92d9faf44d2f9db9bd9ba41a3317a2404f0185a6000000018cf4b67f1921eb6106932a561280150b12a2f9039ebab27608bd64aff36f027049aecc69102a0d1e01857400000000",
            "r":"0xcc3a526c915519a0fc8771b804e40adc41b7906a55e6cc4dc0a1ba34c19f45e5",
            "s":"0x763998fbb02b2b87557615f2427e84f5ebe40e9faa7bfde44a97da109f5ad42",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0x9365bb54a3f8d5ac589ff44e4729e70194c461cd9f6e110bce31dfcd8e60609f",
            "nonce":"0x18",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x5",
            "from":"0x8bcd280593f75c14d02a37ea0be8c635f4d25b62",
            "to":"0x42a0f91973536f85b06b310fa9c70215784f35a1",
            "value":"0xde0b6b3a7640000",
            "gasPrice":"0x4a817c80",
            "gas":"0x4a64c",
            "input":"0x7ff36ab500000000000000000000000000000000000000000000000037d2bb820bd1aa3600000000000000000000000000000000000000000000000000000000000000800000000000000000000000008bcd280593f75c14d02a37ea0be8c635f4d25b6200000000000000000000000000000000000000000000000000000000640ee7fc000000000000000000000000000000000000000000000000000000000000000200000000000000000000000040375c92d9faf44d2f9db9bd9ba41a3317a2404f0000000000000000000000003481eed946feb20d0625d06ef3d4b4460ed6e203",
            "r":"0xf2da579cd9ef6132ef503cc1d409787633f33b2a920df85f8ff2379aa3a2a3ab",
            "s":"0x56a438845398691fa7a3b7e742cd17710081a9bc80ff231673e4bb2a0e0bd088",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0xe535d849acd55f42e1dfd05b78dfa03e3eff976f4dbd57ff05ad6747cd71ba26",
            "nonce":"0x70",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x6",
            "from":"0x8c64572512c968fa3d17f95a33bd0f47a0ef1a2d",
            "to":"0x538f3db7d70a2969a1a625b4f1f165e92e46eff5",
            "value":"0x0",
            "gasPrice":"0x4a817c80",
            "gas":"0x7a120",
            "input":"0xe2bbb1580000000000000000000000000000000000000000000000000000000000000009000000000000000000000000000000000000000000000086c1ea7542cc5d27f5",
            "r":"0x7319262dbe3f376f3f43906bc5c9ffce4f5a2be53cba155cee1289fb1ed4e995",
            "s":"0x62674fe365a22e90ba8f566ec591b866ce4206e5682284fb02edd14bf3483376",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0xdc03d9f8e35610861a040311eb209bbcf81c31a2cb36ec4e1b284a7763e62ff0",
            "nonce":"0x68",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x7",
            "from":"0x22304ac61a39531f1a795a88546c4a8b850b5e29",
            "to":"0x42a0f91973536f85b06b310fa9c70215784f35a1",
            "value":"0x0",
            "gasPrice":"0x4a817c80",
            "gas":"0x417e5",
            "input":"0x18cbafe5000000000000000000000000000000000000000000000000b702fab05c8f4a5d00000000000000000000000000000000000000000000000005df5ffad92e1aec00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000022304ac61a39531f1a795a88546c4a8b850b5e2900000000000000000000000000000000000000000000000000000000640ee7f60000000000000000000000000000000000000000000000000000000000000003000000000000000000000000f7a0b80681ec935d6dd9f3af9826e68b99897d6d0000000000000000000000009ebab27608bd64aff36f027049aecc69102a0d1e00000000000000000000000040375c92d9faf44d2f9db9bd9ba41a3317a2404f",
            "r":"0x45723b1df9713b0ada1904874edd6f944d2bec522c25aa5cd76acc4ad162610",
            "s":"0x439b2f1508dae080ad8555a4d99815db44ead1fa2e380144fa2f286780260297",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0xade687c06173a7e16426b3ffd104fa49412c1e87bdcdd3e142a475e06248a5d0",
            "nonce":"0x7",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x8",
            "from":"0xb6421258cbaa34a4cc4d586d474196cb5c502d9e",
            "to":"0x0000000000000000000000000000000000001007",
            "value":"0x107ad8f556c6c0000",
            "gasPrice":"0x3b9aca00",
            "gas":"0x2625a0",
            "input":"0x25e2c700000000000000000000000000307f36ff0aff7000ebd4eea1e8e9bbbfa0e1134c",
            "r":"0x4a034fb0cd8055c5ec845639397a7855984c8dded34607e7b1b3383e28113b23",
            "s":"0x76d6b0b0769dd3e8f9de32bfe85c4d484fc0bf11386ab831a569a7b94c5eeb64",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0x9674cd84b1be6ce923302107f1a944549f689eadd9d4eb0c663e39c07ed4d924",
            "nonce":"0x50",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x9",
            "from":"0xeada2b4872fcc27d10db3743b9d787cb1808039a",
            "to":"0xa98cb43b471db92606182e0d007906d83cb47b90",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0x8063b",
            "input":"0x0938b20b0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000f1ac0b4ef53442a49a09aca4092a1a6f81d6dc54000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000009ae310a422d8df36a78210ba6f6de15d63079807000000000000000000000000eada2b4872fcc27d10db3743b9d787cb1808039a0000000000000000000000000000000000000000000000000fd24828e5c7ee74000000000000000000000000000000000000000000000000198e82ba24fe9cce0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000001b00000000000000000000000069aaaff7419fd2ce58079f05ff06b2ff66d446d20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000299350317ee2950cc393cb1dd6d859746ed6f48100000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009ae310a422d8df36a78210ba6f6de15d63079807000000000000000000000000f1ac0b4ef53442a49a09aca4092a1a6f81d6dc5400000000000000000000000040375c92d9faf44d2f9db9bd9ba41a3317a2404f00000000000000000000000042a0f91973536f85b06b310fa9c70215784f35a10000000000000000000000000000000000000000000000000000000000000000",
            "r":"0xbc2b41387ac6cb5ad27976db1d81c1015d457386a5d0635d789708aa63acc7eb",
            "s":"0x19e61359d1e1464c60eb9a7f26b1dde0283a9ce98c4588294d9af3ae63d384b4",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0xbaa8970cef245c3e3bd7b0a1189162b085894b1788f6c25508a74bb0ad35caae",
            "nonce":"0xc",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0xa",
            "from":"0xf33b26f7ec60497b6b87c6c1b1e637bce7c53590",
            "to":"0x0000000000000000000000000000000000001007",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0x26a73",
            "input":"0x820356c500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a55eef2f95f5c18f521bbc8506b486ff3b84299f",
            "r":"0xf71a40bc90ed20df223765e9c69549d6c4cf44a3903400205a90a2cdd3417d01",
            "s":"0x13e17cb49a57e6889e335c39f916c21d7288b1fd70a7a6793828840d8a3dd519",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0x0ec8b05873e79ce5ed409a95cf03b0d9782bb70078df5fc2f5b3c330328a51c5",
            "nonce":"0x36",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0xb",
            "from":"0xfd4334fdebb3f63fe3247aaee161b0f24ed25355",
            "to":"0x515e40da0ae7f4d5a1dbf4e8dc2c018c35c2537e",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0xd122",
            "input":"0xa9059cbb000000000000000000000000d90c6c2ac77ea192db5ec05f2c16b94c722919c80000000000000000000000000000000000000000000000000083185ac0364000",
            "r":"0x4a878226238c158582ea26f8663fcbcd6612245b3165a332aba4298d30f6393f",
            "s":"0x50b74f19a4b15a63f62ac87ad94efb9f2fc72d13c088fc913371f9867639291b",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0xf150bb3bb8c9dea8e1461f818e8d3bba5b47691b57d584c4fee4f266ebc1c1b6",
            "nonce":"0x9",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0xc",
            "from":"0x3f3da0dafdc74d9b084ded8cd657b6518ac4f6ec",
            "to":"0x0000000000000000000000000000000000001007",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0x8623",
            "input":"0x820356c500000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000a55eef2f95f5c18f521bbc8506b486ff3b84299f",
            "r":"0x659d27a4cb51ce98cf94f1d0b3c62d9bbf1a27fc3f93d5dcea0148684ee285ce",
            "s":"0x2755abc65823916bc878b6594ae395c571b5f27961e0f29ad906d125d545412d",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0xac8da9ac5a41cfdc3c2c42b3362990dd30132b1bbb9397d1ad26d300f912dee0",
            "nonce":"0x1f",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0xd",
            "from":"0x3930f2c0bacc3421b8aad4e52f748274b244e4a3",
            "to":"0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f",
            "value":"0x11661353e4dbd7181",
            "gasPrice":"0x3b9aca00",
            "gas":"0x705e",
            "input":"0xd0e30db0",
            "r":"0xffbeac65e08a6d04dc4bbb0cc45221a1e06417e3a26ae393a228a72147b508ef",
            "s":"0x625020d8a602864b81fe0c0cd276c26d421b029e4cc61e1e280e1d3e36a7573",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0xc9d40a6c33d983c68a5f9dee25710051b3440fa3d522abcc3d396e754d13186a",
            "nonce":"0x2",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0xe",
            "from":"0x064e561c581a10f02e280b63e3a74c2634ea0cd2",
            "to":"0x11fca460f2a4202b467aa6b00c9d3482d69d7c12",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0xf022",
            "input":"0x4e71d92d",
            "r":"0xa9194392ba3526262421433e75592cb8c894be73643376f78b18ea682f63ec97",
            "s":"0x2c7fd8b9bcfee5531c848e5b5f4ef421f047dd169aa6deee3f5f6d53ef8b75c4",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0xe6baca0054e888cab6d876a2a548ea7ec60f34cd76b1a41cd7037270beb88887",
            "nonce":"0x9",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0xf",
            "from":"0x714e4bba7757889acd69b76ab46c67ddb012c5c6",
            "to":"0x0000000000000000000000000000000000001007",
            "value":"0x15af1d78b58c40000",
            "gasPrice":"0x3b9aca00",
            "gas":"0x2625a0",
            "input":"0x25e2c7000000000000000000000000000ac4f7063eff8aaaee7d91f0bf381002753edea9",
            "r":"0x6b7570d9f0b96a0c1a122c012e72a617d94500c9e91cd5fa2f670205b29ec3e8",
            "s":"0x2fade31ab2e01b12b48024a84ecc0a843d7609ff8fa372b94effff8e611d3960",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0xbf1bcedda2b0330208790f91280d4464442c09b616a7b10ca4b2f7f00ef3601c",
            "nonce":"0xbe",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x10",
            "from":"0x5881b11c7cf5ed827c3ebbacc64562cebbfc76cd",
            "to":"0x3a38ef4f445d0e9546d076506ee1a411cf62f879",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0x7a120",
            "input":"0xb6b55f250000000000000000000000000000000000000000000f6262144ce6618c414322",
            "r":"0xde75de73e8aff43d7f4f191f3f41a3ce5af4cc5083319988164a63cf83f3cad1",
            "s":"0x5e731fb0e9e34516e694b4f9b1d057e4167ff8bbaa8c69613c7dd17cb917643b",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0x443c5a09d4f9423ca681859afbe9f98f5e9b1fd144a43fadc95dc3882e8aeed9",
            "nonce":"0x2b",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x11",
            "from":"0x35b54bdbed5e84336ce51f03c709383e0127f82f",
            "to":"0x40375c92d9faf44d2f9db9bd9ba41a3317a2404f",
            "value":"0x8ac7230489e80000",
            "gasPrice":"0x3b9aca00",
            "gas":"0x705e",
            "input":"0xd0e30db0",
            "r":"0xa0e6cf14f84e591797af68039350341f8bf0a91d548fce5ca4549b506be5ebfb",
            "s":"0x222e97a690a8c29035e63345cdc2c7448937327c4f7c0275aa35c83af5387112",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0xf58c0b2940ad426f302457323f0e87b1555970dbb903b5dfc9876d4e0787373d",
            "nonce":"0x30",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x12",
            "from":"0x723b868c73fbc9c187422aa427ef198ef16cbad4",
            "to":"0x1a639e150d2210a4be4a5f0857a9151b241e7ae4",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0xad77",
            "input":"0x095ea7b3000000000000000000000000236994dabb4e7ffb85bf76889cec8ff9ca543ba4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
            "r":"0x6ac56b588a36660ca008a7c2da3c68647f3aa5fb02259973494c04cafa0b9eae",
            "s":"0x5c799e38ae740b557a2353e44a10fb504b8fb75cf0585e36f13f86473d688494",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0x18fbb56b40b8a251c5d52d2bbf1d073ca96428c0f062606506a4bba0c6f65a97",
            "nonce":"0x1",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x13",
            "from":"0x891694213de752842e6224afe287101e8daa1821",
            "to":"0x11fca460f2a4202b467aa6b00c9d3482d69d7c12",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0xf022",
            "input":"0x4e71d92d",
            "r":"0xd66bf2812c92ee1fc107afe9e3a0444d852c7c1008fec20ce6b7fd667df6703c",
            "s":"0x74387f923ff869858052c8bbe9e057c42d4d3b95050d2ecc43cbc308f4c20120",
            "v":2268,
            "type":"0x0"
         },
         {
            "hash":"0x4aa8df3b4d32e9baf3e45889a01a452377a7d1974a7860be6c293c050e25c2e8",
            "nonce":"0xb",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x14",
            "from":"0xf3639593bf87d4b840317ced7bdf17d2d3c17a0b",
            "to":"0x0000000000000000000000000000000000001007",
            "value":"0x0",
            "gasPrice":"0x3b9aca00",
            "gas":"0x10f53",
            "input":"0x820356c5000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000ac4f7063eff8aaaee7d91f0bf381002753edea9",
            "r":"0xe936eb91954e2b0da6ff5e165ad8bef42dc66286c75090dbd2a030d6d0e0bccb",
            "s":"0x7ef061406458cf070da8d6cffb86c5ef4cff046c5973d7c0c8e251d482d80edd",
            "v":2267,
            "type":"0x0"
         },
         {
            "hash":"0xaff219e5bdd98070c2656cb3c4a3eade32c8ac0fe2c6bdcd28fd5d15d21f8a33",
            "nonce":"0xf836",
            "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
            "blockNumber":"0x1b94d8",
            "transactionIndex":"0x15",
            "from":"0x1fb9becc1356fcc6e70792b755e5c76e3cb26623",
            "to":"0x0000000000000000000000000000000000001000",
            "value":"0xf76975700c52392",
            "gasPrice":"0x0",
            "gas":"0x7a120",
            "input":"0xf340fa010000000000000000000000001fb9becc1356fcc6e70792b755e5c76e3cb26623",
            "r":"0xd64409f8564c60e8b961e14395a201c27c248a14327021d04fc4a44c0f805bbd",
            "s":"0x724bc85ea2535e81b5f3a32172b918a0c98fcacaef0de9215af55331467762c9",
            "v":2268,
            "type":"0x0"
         }
      ],
      "uncles":[
         
      ]
   }
}
```

## eth\_getBlockTransactionCountByNumber

Renvoie le nombre de transactions effectuées par une adresse.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getBlockTransactionCountByNumber
   &tag=0x1b94d8
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getBlockTransactionCountByNumber\&tag=0x1b94d8\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="136">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>le numéro du bloc, en hexadécimal, par exemple 0x10FB78</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":513562,
   "jsonrpc":"2.0",
   "result":"0x16"
}
```

## eth\_getTransactionByHash

Renvoie des informations sur une transaction demandée par son hash.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getTransactionByHash
   &txhash=0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getTransactionByHash\&txhash=0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="134">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>txhash</td><td>la chaîne représentant le hash de la transaction</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":1238774,
   "jsonrpc":"2.0",
   "result":{
      "hash":"0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa",
      "nonce":"0xd",
      "blockHash":"0x15dc4f3669b459f06c41f86ad5a05231e38ba0ffea5efc581a8127705b22477d",
      "blockNumber":"0x1b944f",
      "transactionIndex":"0x4",
      "from":"0x9b7ddafa4c62facf03221a12316fdb3b81d321cb",
      "to":"0x191e94fa59739e188dce837f7f6978d84727ad01",
      "value":"0x0",
      "gasPrice":"0x12a05f200",
      "gas":"0x9519",
      "input":"0x2e1a7d4d000000000000000000000000000000000000000000000000d02ab486cedc0000",
      "r":"0xdc4d20ec26ea34fe77766ecc3c999a2d7cb0aa9243bc3747f2585a435c317594",
      "s":"0x70c46ef99d9ccd8429701176665d94f39037d1e065f2e16dba89dfaa269e5215",
      "v":2268,
      "type":"0x0"
   }
}
```

## eth\_getTransactionByBlockNumberAndIndex

Renvoie des informations sur une transaction par numéro de bloc et par position dans le bloc.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getTransactionByBlockNumberAndIndex
   &tag=0x1b94d8
   &index=0x1
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getTransactionByBlockNumberAndIndex\&tag=0x1b94d8\&index=0x1\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="146">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>le numéro du bloc, en hexadécimal, par exemple 0x1b94d8</td></tr><tr><td>index</td><td>la position de l'index de la transaction dans le bloc, en hexadécimal, par exemple 0x1</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":513907,
   "jsonrpc":"2.0",
   "result":{
      "hash":"0x156c3de5bbcf4a88ef04f47d0b167043215970654bc5caac65e36192392141b2",
      "nonce":"0x3214",
      "blockHash":"0x67543c6a0601655a0940865d318137c5fa73ad045629b17634ca76d6ddc8ee4f",
      "blockNumber":"0x1b94d8",
      "transactionIndex":"0x1",
      "from":"0x8a3abaeedc045db4051186f8b41bde512669c96a",
      "to":"0x0000000000000000000000000000000000001003",
      "value":"0x0",
      "gasPrice":"0x27735521893",
      "gas":"0x5a0e1",
      "input":"0x2b861629000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000003010060632381b398231b0a332f5d0b9ea878009e8dacc81a23eaa9010000000000000000005c6d712b6be548813555720bec0aa3e22c9f07e7f8d77aae1d613b5f1a4f65ca38e30e648176061738590ec3010000000001010000000000000000000000000000000000000000000000000000000000000000ffffffff640335e90b2cfabe6d6d413aa7c15440ac757444759e8206c8bed05a7565e714c83953b0496b94d4862910000000f09f909f092f4632506f6f6c2f6b0000000000000000000000000000000000000000000000000000000000000000000000050066000000000000000456e08b25000000001976a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac0000000000000000266a24aa21a9ed6e37a1c2647a9e3d044213c0bf5b6ea2ae70af4f2eb02373612005103bfd15280000000000000000266a2448617468a8cce9cea2fb3450c89981f0da61d3f8683544b417c5a39764d938c239dd96a600000000000000002c6a4c2952534b424c4f434b3a2f9fa0aedc6bf20f8767682877610e1c6e61555eb36f6cbfad56aa27004e3a32012000000000000000000000000000000000000000000000000000000000000000008a7ba33e0a9d980363f058c052f2d034c3f936e56c71f6a11ff6324c2655ca3dbeb8e2e8264d2a917292e2b08405cc6e38965b455e491226d7bf61e36918f4faede3295d74a58d51288b69dcb6ca9925a9cacd2fbea435878d83a2acb5384f72bec3ca1599489f26595abbfc652afc256ebdb97ef85cc3951fcb83107e9f4c428c34dd3dc951e91301bf53b608ccee6f675267151eca58fde33a48281652c7d1a58cbcbea798132ada84b055a995854216593f538b93bfb1c3852b12f17f673483fdf2522f6cf26237a87e4c993dd54efc68a17260534b229d8d5791574325b149cff6f0bdb4217a3710975c7917633de4d7fae5955fdbf08906510742eefca8639d28b6185f6a416987a1dc99796f226bf9a1a482d76a03c1efcdf649bcccbb99239b03049fc6da36b08ba61ca49ea8796f5a30f89d3e8b60fe367bdee6eb2938c763bbfe00000000000000000000000000000000000000000000000000000000000000",
      "r":"0x9548e3b43bde6b2d122cb6420bf0e37a1b3a868d3b23e11f83a85c83978b87b0",
      "s":"0x6284aa9b76cb9f8bbfb155d6d9f02c3a18a2b2944e112a12f347287492aecea3",
      "v":2267,
      "type":"0x0"
   }
}
```

## eth\_getTransactionCount

Renvoie le nombre de transactions effectuées par une adresse.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getTransactionCount
   &address=0x191E94fa59739e188dcE837F7f6978d84727AD01
   &tag=latest
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getTransactionCount\&address=0x191E94fa59739e188dcE837F7f6978d84727AD01\&tag=latest\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="152">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>la chaîne représentant l'adresse pour obtenir le nombre de transactions</td></tr><tr><td>tag</td><td>le numéro du bloc, en hexadécimal, par exemple 0x10FB78</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":1238922,
   "jsonrpc":"2.0",
   "result":"0x1"
}
```

## eth\_getBlockTransactionCountByNumber

Renvoie le nombre de transactions effectuées par une adresse.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getBlockTransactionCountByNumber
   &tag=0x1b94d8
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getBlockTransactionCountByNumber\&tag=0x1b94d8\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="151">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>tag</td><td>le numéro du bloc, en hexadécimal, par exemple 0x1b94d8</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":513987,
   "jsonrpc":"2.0",
   "result":"0x16"
}
```

## eth\_sendRawTransaction

Soumet une transaction pré-signée et la diffuse sur le réseau Core.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_sendRawTransaction
   &hex=0xf904808000831cfde080
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_sendRawTransaction\&hex=0xf904808000831cfde080\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="159">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>hex</td><td>la chaîne représentant les données brutes signées de la transaction à diffuser.</td></tr></tbody></table>

Réponse d’exemple

```json
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

## eth\_getTransactionReceipt

Renvoie le reçu d'une transaction qui a été validée.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getTransactionReceipt
   &txhash=0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getTransactionReceipt\&txhash=0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="131">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>txhash</td><td>la chaîne représentant le hash de la transaction</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":514413,
   "jsonrpc":"2.0",
   "result":{
      "transactionHash":"0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa",
      "transactionIndex":"0x4",
      "blockHash":"0x15dc4f3669b459f06c41f86ad5a05231e38ba0ffea5efc581a8127705b22477d",
      "blockNumber":"0x1b944f",
      "cumulativeGasUsed":"0x54b96",
      "gasUsed":"0x5791",
      "status":"0x1",
      "from":"0x9b7ddafa4c62facf03221a12316fdb3b81d321cb",
      "to":"0x191e94fa59739e188dce837f7f6978d84727ad01",
      "logs":[
         {
            "removed":false,
            "logIndex":"0x5",
            "transactionIndex":"0x4",
            "transactionHash":"0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa",
            "blockHash":"0x15dc4f3669b459f06c41f86ad5a05231e38ba0ffea5efc581a8127705b22477d",
            "blockNumber":"0x1b944f",
            "address":"0x191e94fa59739e188dce837f7f6978d84727ad01",
            "data":"0x000000000000000000000000000000000000000000000000d02ab486cedc0000",
            "topics":[
               "0x7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65",
               "0x0000000000000000000000009b7ddafa4c62facf03221a12316fdb3b81d321cb"
            ]
         }
      ],
      "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000800000000000000000000000000040002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000002000000000000000000000000000000000000000000000000000004100000000000000000",
      "type":"0x0"
   }
}
```

## eth\_call

Exécute immédiatement un nouvel appel de message sans créer de transaction sur la blockchain.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_call
   &to=0x191E94fa59739e188dcE837F7f6978d84727AD01
   &data=0x06fdde03
   &tag=latest
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_call\&to=0x191E94fa59739e188dcE837F7f6978d84727AD01\&data=0x06fdde03\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="136">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>to</td><td>la chaîne représentant l'adresse avec laquelle interagir</td></tr><tr><td>data</td><td>le hachage de la signature de la méthode et des paramètres encodés</td></tr><tr><td>tag</td><td>la chaîne de paramètres de bloc prédéfinie, soit la plus récente, soit en attente, ou la plus ancienne</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":1270165,
   "jsonrpc":"2.0",
   "result":"0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000c5772617070656420434f52450000000000000000000000000000000000000000"
}
```

## eth\_getCode

Renvoie le code présent à une adresse donnée.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getCode
   &address=0x191E94fa59739e188dcE837F7f6978d84727AD01
   &tag=latest
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getCode\&address=0x191E94fa59739e188dcE837F7f6978d84727AD01\&tag=latest\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="166">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>la chaîne représentant l'adresse pour obtenir le code</td></tr><tr><td>tag</td><td>la chaîne de paramètres de bloc prédéfinie, soit la plus récente, soit en attente, ou la plus ancienne</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":1239189,
   "jsonrpc":"2.0",
   "result":"0x6060604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100b8578063095ea7b31461014257806318160ddd1461017857806323b872dd1461019d5780632e1a7d4d146101c5578063313ce567146101db57806370a082311461020457806395d89b4114610223578063a9059cbb14610236578063d0e30db0146100ae578063dd62ed3e14610258575b6100b661027d565b005b34156100c357600080fd5b6100cb6102d3565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101075780820151838201526020016100ef565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014d57600080fd5b610164600160a060020a0360043516602435610371565b604051901515815260200160405180910390f35b341561018357600080fd5b61018b6103dd565b60405190815260200160405180910390f35b34156101a857600080fd5b610164600160a060020a03600435811690602435166044356103eb565b34156101d057600080fd5b6100b6600435610531565b34156101e657600080fd5b6101ee6105df565b60405160ff909116815260200160405180910390f35b341561020f57600080fd5b61018b600160a060020a03600435166105e8565b341561022e57600080fd5b6100cb6105fa565b341561024157600080fd5b610164600160a060020a0360043516602435610665565b341561026357600080fd5b61018b600160a060020a0360043581169060243516610679565b600160a060020a033316600081815260036020526040908190208054349081019091557fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c915190815260200160405180910390a2565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103695780601f1061033e57610100808354040283529160200191610369565b820191906000526020600020905b81548152906001019060200180831161034c57829003601f168201915b505050505081565b600160a060020a03338116600081815260046020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b600160a060020a0330163190565b600160a060020a0383166000908152600360205260408120548290101561041157600080fd5b33600160a060020a031684600160a060020a03161415801561045b5750600160a060020a038085166000908152600460209081526040808320339094168352929052205460001914155b156104c257600160a060020a03808516600090815260046020908152604080832033909416835292905220548290101561049457600080fd5b600160a060020a03808516600090815260046020908152604080832033909416835292905220805483900390555b600160a060020a038085166000818152600360205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b600160a060020a0333166000908152600360205260409020548190101561055757600080fd5b600160a060020a033316600081815260036020526040908190208054849003905582156108fc0290839051600060405180830381858888f19350505050151561059f57600080fd5b33600160a060020a03167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658260405190815260200160405180910390a250565b60025460ff1681565b60036020526000908152604090205481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103695780601f1061033e57610100808354040283529160200191610369565b60006106723384846103eb565b9392505050565b6004602090815260009283526040808420909152908252902054815600a165627a7a72305820464bb8e9f558f2f1261021f7adc34bc4a87369dda609ac92d74aedf01c764ca30029"
}
```

## eth\_getStorageAt

Renvoie la valeur d'une position de stockage à une adresse donnée.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_getStorageAt
   &address=0x191E94fa59739e188dcE837F7f6978d84727AD01
   &position=0x0
   &tag=latest
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_getStorageAt\&address=0x191E94fa59739e188dcE837F7f6978d84727AD01\&position=0x0\&tag=latest\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="170">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>address</td><td>la chaîne représentant l'adresse pour obtenir la valeur de stockage</td></tr><tr><td>position</td><td>le code hexadécimal de la position dans le stockage, par exemple 0x0</td></tr><tr><td>tag</td><td>la chaîne de paramètres de bloc prédéfinie, soit la plus récente, soit en attente, ou la plus ancienne</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "id":1239278,
   "jsonrpc":"2.0",
   "result":"0x5772617070656420434f52450000000000000000000000000000000000000018"
}
```

## eth\_gasPrice

Renvoie le prix actuel par unité de gaz en wei.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_gasPrice
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_gasPrice\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Aucun paramètre de requête requis.

Réponse d’exemple

```json
{
   "jsonrpc":"2.0",
   "id":73,
   "result":"0x12a05f200"
}
```

## eth\_estimateGas

Effectue un appel ou une transaction, qui ne sera pas ajoutée à la blockchain, et renvoie le gaz utilisé.

```bash
https://openapi.coredao.org/api
   ?module=proxy
   &action=eth_estimateGas
   &data=0x4e71d92d
   &to=0xEeee7341f206302f2216e39D715B96D8C6901A1C
   &value=0xff22
   &gasPrice=0x51da038cc
   &gas=0x5f5e0ff
   &apikey=YourApiKeyToken
```

> Essayez ce point de terminaison dans votre [**navigateur**](https://openapi.coredao.org/api?module=proxy\&action=eth\_estimateGas\&data=0x4e71d92d\&to=0xEeee7341f206302f2216e39D715B96D8C6901A1C\&value=0xff22\&gasPrice=0x51da038cc\&gas=0x5f5e0ff\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Paramètres de requête

<table><thead><tr><th width="142">Paramètre</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>le hachage de la signature de la méthode et des paramètres encodés</td></tr><tr><td>to</td><td>la chaîne représentant l'adresse avec laquelle interagir</td></tr><tr><td>value</td><td>la valeur envoyée dans cette transaction, en hexadécimal par exemple 0xff22</td></tr><tr><td>gas</td><td>la quantité de gaz fournie pour la transaction, en hexadécimal par exemple 0x5f5e0ff</td></tr><tr><td>gasPrice</td><td>le prix du gaz payé pour chaque unité de gaz, en wei</td></tr></tbody></table>

Réponse d’exemple

```json
{
   "jsonrpc":"2.0",
   "id":1,
   "result":"0x5248"
}
```
