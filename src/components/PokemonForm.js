import { bodyParser } from "json-server";
import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const [pokeName, setPokeName] = useState("")
  const [pokeHp, setPokeHp] = useState(0)
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    let newPoke = {
      name: pokeName,
      hp: pokeHp,
      sprites: {
        front: front,
        back: back
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify(newPoke)
    })
      .then(resp => resp.json())
      .then(formPokemon => addPokemon(formPokemon))
   }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form 
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokeName} onChange={(e) => setPokeName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokeHp} onChange={(e) => setPokeHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
