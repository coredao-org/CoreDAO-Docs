---
sidebar_label: Statistics
description: Points de Terminaison Liés aux Données Statistiques
hide_table_of_contents: false
sidebar_position: 2
---

# Statistics

## Get Total Supply of CORE on Core

Returns total supply of CORE.

```bash
https://openapi.coredao.org/api?
   module=stats
   &action=coresupply
   &apikey=YourApiKeyToken
```

> Try this endpoint in your [**browser**](https://openapi.coredao.org/api?module=stats\\&action=coresupply\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

No Request parameters required.

Sample Response

```json
{
   "status":"1",
   "result":2099443937105283971281588483,
   "message":"OK"
}
```

> **Tip :** The `result` is returned in WEI. Easily convert Core units using our [**unit converter.**](https://scan.coredao.org/unit-converter)

## Get Validators List on Core

Returns the top 21 validators on Core blockchain.

```bash
https://openapi.coredao.org/api
   ?module=stats
   &action=validators
   &apikey=YourApiKeyToken
```

> Try this endpoint in your [**browser**](https://openapi.coredao.org/api?module=stats\\&action=validators\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

No Request parameters required.

Sample Response

```json
{
   "status":"1",
   "result":[
      {
         "operatorAddress":"0x84303bb38b87604675f44e75f653b8bd74820efc",
         "consensusAddress":"0xb3d9cbaaa542f3605d7488dfc66d4dbea0266682",
         "feeAddress":"0x84303bb38b87604675f44e75f653b8bd74820efc",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2522286795200000000000000",
         "feePercent":"20"
      },
      {
         "operatorAddress":"0x2d058b58dcf4b0db11168c62d3109f6e02710b02",
         "consensusAddress":"0x258f1d17e3dc298c0276c824238422ddeaca1619",
         "feeAddress":"0x2d058b58dcf4b0db11168c62d3109f6e02710b02",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2503704406300000000000000",
         "feePercent":"20"
      },
      {
         "operatorAddress":"0x0ac4f7063eff8aaaee7d91f0bf381002753edea9",
         "consensusAddress":"0x4bfa260cb855ef3071be244505a10df7819f96a0",
         "feeAddress":"0xf7222f81903fd19fa9475e0f9f77c41999a6fecf",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2500484385000000000000000",
         "feePercent":"25"
      },
      {
         "operatorAddress":"0xa55eef2f95f5c18f521bbc8506b486ff3b84299f",
         "consensusAddress":"0x586261e2ec40c979ae6d24dae8bb044be48b635a",
         "feeAddress":"0xa55eef2f95f5c18f521bbc8506b486ff3b84299f",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2341015609800000000000000",
         "feePercent":"60"
      },
      {
         "operatorAddress":"0x651da43be21fdb85615a58350cc09d019c3f47c4",
         "consensusAddress":"0x51bfc56124f208da6950821dd2e3eb0521735150",
         "feeAddress":"0x651da43be21fdb85615a58350cc09d019c3f47c4",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2294420755600000000000000",
         "feePercent":"30"
      },
      {
         "operatorAddress":"0x83ee5d8b74a1d9310f0c152d30c0772529efedff",
         "consensusAddress":"0xb9d38b37b128bf6a9f0606ce7f6d7b30c3ba97da",
         "feeAddress":"0x79c4e7eb9c887a31808f2dd73048dda038d404d1",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2265602033400000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x7c706ca44a28fdd25761250961276bd61d5aa87b",
         "consensusAddress":"0x4121f067b0f5135d77c29b2b329e8cb1bd96c960",
         "feeAddress":"0xcd52d5624a2d71343a7e64fc99d3ecc456775dfd",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2235814026200000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x307f36ff0aff7000ebd4eea1e8e9bbbfa0e1134c",
         "consensusAddress":"0x1fb9becc1356fcc6e70792b755e5c76e3cb26623",
         "feeAddress":"0x307f36ff0aff7000ebd4eea1e8e9bbbfa0e1134c",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2229260851700000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xebbaf365b0d5fa072e2b2429db23696291f2c038",
         "consensusAddress":"0x49241943421a87b3f627836047a9eded2b48c6f5",
         "feeAddress":"0xebbaf365b0d5fa072e2b2429db23696291f2c038",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2225849031859770582953603",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xa898e2f126b642d6e401bdcb79979c691a8fd90d",
         "consensusAddress":"0x61956d692852c4a3b7277c0ea199847749ad6e8a",
         "feeAddress":"0xa898e2f126b642d6e401bdcb79979c691a8fd90d",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2224029773600000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x5b9b30813264eaab2b70817a36c94733812e591c",
         "consensusAddress":"0x7f461f8a1c35edecd6816e76eb2e84eb661751ee",
         "feeAddress":"0xbe6e47477919df2255a81e8c6239be5a0f0f3eb1",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2215009100831821432700054",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x58d8efc838d2de558eedeabce631c7dff92c947a",
         "consensusAddress":"0x3fb42cab4416024dc1b4c9e21b9acd0dfcef35f6",
         "feeAddress":"0xa615dc7f4391d9bf430caf91d7e73a04749993c4",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2204630962600000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xdbc83c2093def988fbe96993292c058ef7da0784",
         "consensusAddress":"0x2efd3cf0733421aec3e4202480d0a90bd1575149",
         "feeAddress":"0x11c8cfadc494b05786e88779bca58624a1d58532",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2204558939600000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xa37cf4faa0758b26dca666f3e36d42fa15cc0106",
         "consensusAddress":"0x19e3c7d7e69f273f3f91c060bb438a007f6fc33c",
         "feeAddress":"0x4ef030c9b3da177aa34ec215268f3d77d10e4280",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2203340266800000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xf6fdbc19a25dc91454cec19ef7714e8b67c4e0e6",
         "consensusAddress":"0x7ef3a94ad1c443481fb3d86829355ca90477f8b5",
         "feeAddress":"0x685408ee4b0ad214abd9ab08f1f6c3ba9b41db6b",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2202725100200000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xbfbbacbd59c3bd551d40729061dc4d21ccbea792",
         "consensusAddress":"0xe127f110d172a0c4c6209fe045dd71781e8fe9d4",
         "feeAddress":"0xe1b145c69a0d43d9ec65c8108223a6fa0c044fb5",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"2200273233000000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x64db24a662e20bbdf72d1cc6e973dbb2d12897d5",
         "consensusAddress":"0x613b0f519ada008cb99b6130e89122ba416bf159",
         "feeAddress":"0x089743377fc9a771b4be49f1d7c5455af4245a8f",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"1679862257400000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x42fdeae88682a965939fee9b7b2bd5b99694ff64",
         "consensusAddress":"0x729f39a54304fcc6ec279684c71491a385d7b9ae",
         "feeAddress":"0xbb3a67c41b302ed44e835c71d41329c2ec75bdd2",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"1170829677301006456695233",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xa21cbd3caa4fe89bccd1d716c92ce4533e4d4733",
         "consensusAddress":"0xfd806ab93db5742944b7b50ce759e5eee5f6fe50",
         "feeAddress":"0xae3a0106a53dda3f93c94fb1286733c998c0bfa8",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"1146370483713408362220068",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x2953559db5cc88ab20b1960faa9793803d070337",
         "consensusAddress":"0x3511e3b8ac7336b99517d324145e9b5bb33e08a4",
         "feeAddress":"0x8cb0693099f17a7c532ae376395f15c9355834cb",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"1137541880700000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xed7010da131031b36a73bcdb2455f0c36678f99f",
         "consensusAddress":"0x06ef6a5916f36c4d1a1b0eeb5550a9aa17898a68",
         "feeAddress":"0xed7010da131031b36a73bcdb2455f0c36678f99f",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"1",
         "validatorVotingPower":"0",
         "totalDeposit":"76893533300000000000000",
         "feePercent":"500"
      },
      {
         "operatorAddress":"0xc6867d7a2e9b4ee71f11cdaccd4d2ec04a690ec2",
         "consensusAddress":"0x67d1ad48f91e131413bd0b04e823f3ae4f81e853",
         "feeAddress":"0xa6291d8df875ab39f1ec8e3ea1a5d4e3fa52535e",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"0",
         "validatorVotingPower":"0",
         "totalDeposit":"1104559500500000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xe2f8cefcdee51f48e3ce5c4deea3095c43369b36",
         "consensusAddress":"0xe166d7b6a85f05e97c4a0a9b83390e33f8d6b92f",
         "feeAddress":"0xe2f8cefcdee51f48e3ce5c4deea3095c43369b36",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"0",
         "validatorVotingPower":"0",
         "totalDeposit":"1086853036500000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x38b6515c22e3c376fc736f8614bba68439d3a642",
         "consensusAddress":"0xc0925eeb800ff6ba4695ded61562a10102152b5f",
         "feeAddress":"0xafd2b13e483b3d9cef91aab8850370394aa93b33",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"0",
         "validatorVotingPower":"0",
         "totalDeposit":"111931210500000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x79ee8f28969c5f395e11e890e4e8f9cb074b3b0b",
         "consensusAddress":"0xf44a785fd9f23f0abd443541386e71356ce619dc",
         "feeAddress":"0x8e91292c3312e1df275a0fd67afac4c28a99acfe",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"0",
         "validatorVotingPower":"0",
         "totalDeposit":"97740982300000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0xe719c5d2d96606cc3c63ddc51aac52ed32a57efd",
         "consensusAddress":"0xf778dc4a199a440dbe9f16d1e13e185bb179b3b7",
         "feeAddress":"0x20845ca1b89561b362b3e7f82c98bcbebc9d409f",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"0",
         "validatorVotingPower":"0",
         "totalDeposit":"49746484400000000000000",
         "feePercent":"50"
      },
      {
         "operatorAddress":"0x80c1d6973776c12ad408a63635d065d90d1266c8",
         "consensusAddress":"0x4acc9e9fdd03420d6b02d757d7c91710dfb756cb",
         "feeAddress":"0x80c1d6973776c12ad408a63635d065d90d1266c8",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"0",
         "validatorVotingPower":"0",
         "totalDeposit":"12937297800000000000000",
         "feePercent":"500"
      },
      {
         "operatorAddress":"0xbc0fbef688bca8f9ec86c688cdfbe6e0fe6086e9",
         "consensusAddress":"0x562ce8bb399e31e86855ffa99c06ef8c01e8a526",
         "feeAddress":"0xbc0fbef688bca8f9ec86c688cdfbe6e0fe6086e9",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"0",
         "validatorVotingPower":"0",
         "totalDeposit":"2752430000000000000000",
         "feePercent":"150"
      },
      {
         "operatorAddress":"0x90763d7fe4dd02d4795b33c893b5b22629d82330",
         "consensusAddress":"0x771b3976845aaed4c092eb486f54665456065df1",
         "feeAddress":"0x90763d7fe4dd02d4795b33c893b5b22629d82330",
         "associatedAddress":null,
         "btcAddress":null,
         "validatorName":"",
         "validatorStatus":"0",
         "validatorVotingPower":"0",
         "totalDeposit":"1556624000000000000000",
         "feePercent":"100"
      }
   ],
   "message":"OK"
}
```

## Get CORE Last Price

Returns the latest price of 1 CORE.

```bash
https://openapi.coredao.org/api
   ?module=stats
   &action=coreprice
   &apikey=YourApiKeyToken
```

> Try this endpoint in your [**browser**](https://openapi.coredao.org/api?module=stats\\&action=coreprice\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

No Request parameters required.

Sample Response

```json
{
   "status":"1",
   "result":{
      "corebtc":"0.000099",
      "corebtc_timestamp":"1678698195000",
      "coreusd":"2.2",
      "coreusd_timestamp":"1678698291000"
   },
   "message":"OK"
}
```

> ⏳ **Tip :** The `timestamps` are represented in [**Unix timestamp.**](https://www.unixtimestamp.com/)
