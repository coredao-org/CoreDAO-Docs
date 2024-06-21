---
sidebar_label: Common Error Messages
description: Common Error Messages while using Core Scan API
hide_table_of_contents: false
sidebar_position: 2
---


# Common Error Messages

An API call that encounters an error will return 0 as its status code and display the cause of the error in the result field.

```json
{
   "status":"0",
   "message":"NOTOK",
   "result":"Max rate limit reached"
}
```

***

## Max rate limit

> "Max rate limit reached"

This error occurs when you exceed the rate limit assigned to your specific API key. To resolve, adhere to your available plan by waiting for a certain amount of time before each request. If you are using a script or application, apply throttling to limit the frequency of calls.

Reference for various API tiers and their rate limits 🚧.

| API Tier |                Rate Limit               |
| :------: | :-------------------------------------: |
|   Free   | 5 calls/second , up to 10,000 calls/day |

***

## Missing or invalid action

> "Error! Missing or invalid action name"

This error occurs when you do not specify, or specify an invalid module and action name. To resolve, double check your API query to use a valid module and action name. If you require some help getting started, try copying the sample queries provided in the documents and pasting them into your browser.

***

## API specific errors

> "Error! Block number already pass" "Error! Invalid address format" "Contract source code not verified"

These error messages returned are specific to certain APIs and related parameters. To resolve, kindly refer to the specific API's documentation, and check for the correct format or values to be specified as parameters.
