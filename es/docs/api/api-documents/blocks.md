---
sidebar_label: Blocks
description: Endpoints related to block data
hide_table_of_contents: false
sidebar_position: 2
---

# Blocks

## Get Block Rewards by BlockNo

Returns the block rewards for validating a certain block.

```bash
https://openapi.coredao.org/api
   ?module=block
   &action=getblockreward
   &blockno=1807242
   &apikey=YourApiKeyToken
```

> Try this endpoint in your [**browser**](https://openapi.coredao.org/api?module=block\\&action=getblockreward\\&blockno=1807242\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Request Query Parameters

<table><thead><tr><th>Parameter</th><th width="601">Description</th></tr></thead><tbody><tr><td>blockno</td><td>the integer block number to check block rewards for eg. 1807242</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":{
      "blockNumber":"1807242",
      "timeStamp":"Mon Mar 13 08:31:54 UTC 2023",
      "blockMiner":"0x2efd3cf0733421aec3e4202480d0a90bd1575149",
      "blockReward":"3002893221000000000.0",
      "uncles":null,
      "uncleInclusionReward":null
   },
   "message":"OK"
}
```

## Get Estimated Block Countdown Time by BlockNo

Returns the estimated time remaining, in seconds, until a certain block is validated.

```bash
https://openapi.coredao.org/api
   ?module=block
   &action=getblockcountdown
   &blockno=2807242
   &apikey=YourApiKeyToken
```

> Try this endpoint in your [**browser**](https://openapi.coredao.org/api?module=block\\&action=getblockcountdown\\&blockno=2807242\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Request Query Parameters

<table><thead><tr><th width="123">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>blockno</td><td>the integer block number to check the countdown time for eg. 2807242</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":{
      "remainingBlock":"999939",
      "estimateTimeInSec":"2999817",
      "countdownBlock":"2807242",
      "currentBlock":"1807303"
   },
   "message":"OK"
}
```

## Get Block Number by Timestamp

Returns the block number that was validated at a certain timestamp.

```bash
https://openapi.coredao.org/api
   ?module=block
   &action=getblocknobytime
   &timestamp=1678581398
   &closest=before
   &apikey=YourApiKeyToken
```

> Try this endpoint in your [**browser**](https://openapi.coredao.org/api?module=block\\&action=getblocknobytime\\&timestamp=1678581398\\&closest=before\\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Request Query Parameters

<table><thead><tr><th width="136">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>timestamp</td><td>the integer representing the Unix timestamp in seconds.</td></tr><tr><td>closest</td><td>the closest available block to the provided timestamp, either before or after</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":1768937,
   "message":"OK"
}
```
