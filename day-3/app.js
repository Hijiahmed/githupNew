let jwt = require("jsonwebtoken");

let fs = require("fs");

let pKey = fs.readFileSync("private.key");

let token = jwt.sign({ name: "hiji" }, pKey);

let paylod = jwt.verify(token,pKey)

console.log(paylod);
