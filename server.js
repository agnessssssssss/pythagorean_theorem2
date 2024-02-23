const express = require('express');
const nunjucks = require('nunjucks');
const port = 3000;
const app = express();
app.use(express.urlencoded( { 
  extended:true
}));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.urlencoded());

function calculateHypotenuse(a, b) {
    return Math.sqrt(a**2 + b**2);
  }

app.get('/pythagorean_theorem', (req, res) => {
    res.render('pythagorean_theorem.njk');
  });

  app.post('/a', function (req,res) {
    let a = req.body.a;
    let b = req.body.b;
    let c = calcHypotenuse(a, b);
    res.render('answer.njk', {a, b, c});
  });

  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);

  });