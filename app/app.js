const express = require('express');
const { getPet, addPet } = require('./modules/pets');
const app = express()
const port = 3000

app.use(express.json());

app.get('/api/pet/:name', async function(req, res) {
  const petName = req.params.name
  const pet = await getPet(petName)
  if (pet.length) {
    res.send(pet[0])
  } else {
    res.send(`A pet named '${petName}' is not founded`)
  }
});

app.post('/api/pet', async function(req, res) {
  const {name, owner, species, sex} = req.body
  if (name && owner && species && sex && typeof name === 'string' && typeof owner === 'string' && typeof species === 'string' && typeof sex === 'string' && sex.length == 1) {
    const result = await addPet(name, owner, species, sex)
    res.send(result)
  }
  else {
    res.send('Body properties missing')
  }
});

app.listen(port, () => {
  console.log(`Pet app listening on port ${port}`)
})

