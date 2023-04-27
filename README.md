# blaize-cmc-audits-api

## Installation
1. Download project using <code>git clone</code> or use the program <code>GitHub Desktop</code>
2. Create file .env at the root of the project, and fill it with the content from the file env.xmpl
3. Run the following commands in the project console

- <code>yarn </code> <br />
- <code>yarn build</code> <br />
- <code>yarn start</code>

# Env dependencies

| Value             | Description           |
| ----------------- | ----------------------|
| PORT              | Default value is 3000 |

# Endpoints: 
### CMC audits
- GET:  /api/cmc
- Response:
```
[
   {
      "coinId":1,
      "coinName":"Pancake",
      "symbol":"CAKE",
      "auditor":"Name of Audit Company”, //e.g. Certik, Hacken",
      "auditStatus":0,
      "auditTime":"2020-10-13T00:12:12Z",
      "contractAddress":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      "contractPlatform":"BSC",
      "score":93,
      "reportUrl":"xxxxx",
      "overview":[
         {
            "name":"Static Analysis",
            "score":91,
            "msg":"aaaa"
         },
         {
            "name":"On-chain Monitoring",
            "score":91,
            "msg":"aaaa"
         }
      ],
      "communityAlerts":[
         {
            "description":"Flash Loan Attack",
            "detail":"The project suffered from a flash loan attack that resulted in a loss of 114K WBNB and 697K BUNNY.",
            "status":"CONFIRMED"
         }
      ],
      "findings":[
         {
            "id":"MCF-01",
            "title":"Variable Naming Convention",
            "type":"Coding Style",
            "severity":"Informational",
            "resolved":true
         }
      ]
   }
]
```
---
### Aggregation audits:
- GET: /api/aggregation?skip=[number>=0]
- Response:
```
{
   "data":[
      {
         "projectName":"Pancake1",
         "contractPlatform":"BSC",
         "lang":"Rust/Solidity",
         "auditTime":"2020-10-13T00:12:12Z",
         "reportUrl":"xxxxx"
      },
      {
         "projectName":"Pancake2",
         "contractPlatform":"BSC",
         "lang":"Rust/Solidity",
         "auditTime":"2020-10-13T00:12:12Z",
         "reportUrl":"xxxxx"
      },
      {
         "projectName":"Pancake3",
         "contractPlatform":"BSC",
         "lang":"Rust/Solidity",
         "auditTime":"2020-10-13T00:12:12Z",
         "reportUrl":"xxxxx"
      }
   ],
   "skip":0,
   "total":10
}
```
