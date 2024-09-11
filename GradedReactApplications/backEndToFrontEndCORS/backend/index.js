const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const facts = [
  { fact: "The moon is as big as the earth.", isTrue: false },
  { fact: "There are more stars in the universe than grains of sand on Earth's beaches.", isTrue: true },
  { fact: "Octopuses have three hearts.", isTrue: true },
  { fact: "Bananas grow on trees.", isTrue: false },
  { fact: "Venus is the hottest planet in our solar system.", isTrue: true },
  { fact: "Humans can breathe and swallow at the same time.", isTrue: false },
];

app.get('/fact', (req, res) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.json(randomFact);
});

app.get('/facts', (req, res) => {
  res.json(facts); 
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});