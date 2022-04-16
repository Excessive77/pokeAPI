import axios from 'axios'
import React from 'react'

const getPokemonByName = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const req = await axios.get(url)
  return req
}

export default getPokemonByName