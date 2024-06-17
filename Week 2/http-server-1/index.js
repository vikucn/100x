const express = require("express");
const bodyParser = require("body-parser");
const port = 3000
const app = express();

app.use(bodyParser.json());
app.post('/',function(req,res) {
    console.log(req.body);
    res.send('Hello World!')
})

// app.post('/hello',function(req,res) {
//     res.send({
//         msg: " 2 + 2 = 4 "
//     })
// })


app.listen(port, function() {
    console.log(`Example app listening on port ${port}`)
})