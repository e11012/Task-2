var express = require("express")
const oddeven = express();

oddeven.get("/number", (req, res) => {
    res.send("Go to /number/:num to check if :num is odd or even")
})

oddeven.get('/number/:number', function(req, res) {
  let a=req.params.number;
  if (a%2==0){
    res.send(`The number ${a} is even`)
  }
  else{
    res.send(`The number ${a} is odd`)
  }
});

oddeven.listen(8000, () => console.log('Server running.......'))






