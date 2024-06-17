const express = require("express");

const app = express();

const users = [{
    name : "John",
    kidneys: [{
        healthy :false
    }]
}];

app.get("/",function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnKidneys.length;
    let numberofHealthyKidneys = 0;
    for(let i =0; i<numberofKidneys;i++)
        {
            if(johnKidneys[i].healthy)
                numberofHealthyKidneys++;
        }
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys ;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })
})

app.use(express.json())

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",function(req,res){
    for(let i=0; i<users[0].kidneys.length; i++)
        {
            users[0].kidneys[i].healthy = true;
        }
    res.json({})
})

app.delete("/",function(req,res){
    const newKidneys = []
    for(let i = 0; i<users[0].kidneys.length; i++)
        {
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg:"done!"})
})

app.listen(3000);
