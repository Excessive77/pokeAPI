import React, { useEffect, useState } from 'react'
import getAllTypes from '../services/getAllTypes'


const SelectType = ({handlerOnSelect}) => {

    const [typeArr, setTypeArr] = useState([])
    

    useEffect(() => {
        getAllTypes()
            .then((response) => {
                setTypeArr(response.data.results)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])


    const list = typeArr.map((item) => <option url={item.url} key={item.name}>{item.name}</option>)
    
  return (
    <select onChange={(e) => handlerOnSelect(e.target.value)}>
        {list}
    </select>
  )
}

export default SelectType