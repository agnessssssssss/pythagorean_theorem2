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
  return Math.sqrt(a * a + b * b);
}

app.get('/pythagorean_theorem', (req, res) => {
    res.render('pythagorean_theorem.njk');
  });

  app.post('/pythagorean_theorem', function (req, res) {
    let a = req.body.a;
    let b = req.body.b;
    let c = calculateHypotenuse(a, b);
    res.render('pythagorean_theorem.njk', {a, b, c});
  });

  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

  });