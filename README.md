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
### Audit reports:
- GET: /api/reports?page=[number>=0]&perPage=[number>=0]
- Response:
```
{
   "page":1,
   "per_page":3,
   "total_pages":10,
   "total":30,
   "data":[
      {
         "id":"k3D24CDrFHMkfi7z6xHrbT27GNcpk2-89iV9aQuvs0A",
         "projectName":"Veritty",
         "reportUrl":"https://github.com/blaize-security/blaize-security-audits/blob/main/v/veritty/Veritty-audit-report-v1-[29-Mar-2023].pdf",
         "lang":[
            "Solidity"
         ],
         "contractPlatform":[
            "Ethereum"
         ],
         "reportDate":"1680037200000",
         "publicationDate":"",
         "caseUrl":""
      },
      {
         "id":"ypG26YIjSmPhqEh9e_FUlHdGvB8r11N1h5gwTnvwX_0",
         "projectName":"Gerobi",
         "reportUrl":"https://github.com/blaize-security/blaize-security-audits/blob/main/g/gerobi/Gerobi-audit-report-v1-[27-Mar-2023].pdf",
         "lang":[
            "Solidity"
         ],
         "contractPlatform":[
            "Aurora"
         ],
         "reportDate":"1679864400000",
         "publicationDate":"1680987600000",
         "caseUrl":"https://blaize.tech/clients/smart-contract-security-audit-for-gerobi/"
      },
      {
         "id":"EYqM-1_S2CfAkNWfiNXBhJKYfHAasALfM1m7fLxf9_s",
         "projectName":"Binaryx",
         "reportUrl":"https://github.com/blaize-security/blaize-security-audits/blob/main/b/binaryx/Binaryx-audit-report-v1-[22-Mar-2023].pdf",
         "lang":[
            "Solidity"
         ],
         "contractPlatform":[
            "Polygon"
         ],
         "reportDate":"1679436000000",
         "publicationDate":"1679608800000",
         "caseUrl":"https://blaize.tech/clients/smart-contract-security-audit-for-binaryx/"
      }
   ]
}
```
