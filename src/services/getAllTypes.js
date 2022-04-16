import axios from 'axios'


const getAllTypes = async () => {
    const url = 'https://pokeapi.co/api/v2/type/'
    const req = await axios.get(url)    

  return req
}

export default getAllTypes