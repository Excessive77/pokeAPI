import axios from 'axios'


const getAllPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    const req = await axios.get(url)
  return req
}

export default getAllPokemons