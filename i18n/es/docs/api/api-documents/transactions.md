---
sidebar_label: Transactions
description: Endpoints related to Transactions
hide_table_of_contents: false
sidebar_position: 2
---

# Transactions

## Check Transaction Receipt Status

Returns the status code of a transaction execution.

```bash
https://openapi.coredao.org/api
   ?module=transaction
   &action=gettxreceiptstatus
   &txhash=0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa
   &apikey=YourApiKeyToken
```

> Try this endpoint in your [**browser**](https://openapi.coredao.org/api?module=transaction\&action=gettxreceiptstatus\&txhash=0xf5582dff22f92beee00afc22c4d80ca7b7ad4a335019371a67c16adf383b6afa\&apikey=b4d33c1698e4446dbf0f05f520117a76) 🔗

Request Query Parameters

<table><thead><tr><th width="145">Parameter</th><th>Description</th></tr></thead><tbody><tr><td>txhash</td><td>the string representing the transaction hash to check the execution status</td></tr></tbody></table>

Sample Response

```json
{
   "status":"1",
   "result":{
      "status":"1"
   },
   "message":"OK"
}
```
