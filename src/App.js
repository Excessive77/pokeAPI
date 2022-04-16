// import Menu from './Components/Menu';
// import Formulario from './Components/Formulario';
import { useState, useEffect } from 'react';
// import Child from './Components/Child';
// import Child2 from './Components/Child2';
// import getAllPokemons from './services/getAllPokemons';
import getPokemonsByType from './services/getPokemonsByType';
import Pokemon from './Components/Pokemon';
// import { useState } from 'react';
import Search from './Components/Search';
import './App.css';
import SelectType from './Components/SelectType';

function App() {
  const [pokemons, setPokemons] = useState([]);
  // const [searchValue, setSearchValue] = useState('')
  // const [isByType, setIsByType] = useState(false)
  const [currentType, setCurrentType] = useState('normal')


  useEffect(() => {
    
      getPokemonsByType(currentType)
        .then((response) => {
          setPokemons(response.data.pokemon)
        })
        .catch((err) => {
          console.error(err)
        })
    },[currentType])    

  const list = pokemons.map((pokemon) => <Pokemon name={pokemon.pokemon.name} key={pokemon.pokemon.name} />)
      //pokemon.pokemon.name
  // const [value, setValue] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
              {/* <Search/> */}
              {/* { isByType ? `Esta es una busqueda por tipo: ${searchValue}` : `Estoy buscando por nombre: ${searchValue}` } */}
              <SelectType handlerOnSelect={setCurrentType}/>
              {currentType} 
              <Search handlerSearch={setCurrentType } />
              {list}
          {/* //   <input type='checkbox' id='menuToggle' value={value} onChange={(e) => setValue(e.target.checked)}/> 
          //     <label htmlFor='menuToggle'>Desplegar menu</label>
          //     { value ? <Menu /> : null } */}
          {/* {list} */}
          {/* {value}
          <Child handlerValue={setValue} value={value}/>
          <Child2 handlerValue={setValue} value={value}/> */}

     </header>
    </div>
    // <Formulario/>
  );
}

export default App;
