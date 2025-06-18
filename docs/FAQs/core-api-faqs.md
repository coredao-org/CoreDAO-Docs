---
sidebar_label: Core Scan API FAQs
hide_table_of_contents: false
sidebar_position: 2
---

# Core Scan API FAQs
---

### 1. What is the Core Scan API?

We've developed the Core Scan Open API to give developers direct access to Core Scan's block explorer data and services. Core Scan's APIs are provided as a community service and without warranty; please use only what you need.

Check out the full API docs available [here](https://docs.coredao.org/docs/api).

### 2. How can I access the Core Scan API?

To access the Core Scan API, you need to have an account registered on the Core Scan. Refer to [here](https://docs.coredao.org/docs/api/tutorials/creating-an-account) for a detailed guide on this topic. Additionally, you will need to generate an API key using the registered account; refer to the detailed guide [here](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 3. How to create API Keys for use with the Core Scan API?

To generate API keys using a registered account on Core Scan, refer to the detailed guide [here](https://docs.coredao.org/docs/api/tutorials/generate-an-api-key).

### 4. My API keys are not working; what should I do to resolve the issue?

A technical glitch may have occurred in the key creation process. In this case, try deleting the key and generating a new one.​ If the issue persists after using a freshly generated key, contact us on our official [Discord](https://discord.com/invite/coredaoofficial) server.

### 5. Is there a rate limit on Core Scan API requests?

Yes, there are fixed rate limits on API requests based on the API tier. To avoid rate limit errors, adhere to your available plan by waiting for a certain amount of time before each request. If you are using a script or application, apply throttling to limit the frequency of calls.

| **API Tier** | **Rate Limit** |
| ------------ | -------------- |
| **Free**     | 5 calls/second, up to 10,000 calls/day |

### 6. Are there any rate limits on the Staking API endpoints?

Yes, the Staking API endpoints have a rate limit of 600 transactions per minute per IP.

### 7. What is the status code of an API if an error occurs?

An API call that encounters an error will return **0** as its status code and display the cause of the error in the result field.

```json
{
    "status":"0",
    "message":"NOTOK",
    "result":"Max rate limit reached"
}
```

### 8. What should I do if I encounter issues or bugs with the API?

Refer to official API documentation for [Common issues messages](https://docs.coredao.org/docs/api/tutorials/common-error-messages). If the problem persists, contact us on our official [Discord](https://discord.com/invite/coredaoofficial) server.