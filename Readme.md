##Angular http-example with json-server

install json-server with

`npm i json-server -g`

proxy setup for json-server localhost:3000

`{
  "/heroes":
   { `  
   "target": "http://localhost:3000",`
    `"secure": false`
 `
  `}
}`

install concurrently

`npm i concurrently`

literature:

[medium: Mock Data for Angular 6 applications with JSON Server — Part 1 ](https://medium.com/@kaustubhtalathi/mock-data-for-angular-5-applications-with-json-server-part-1-d377eced223b)