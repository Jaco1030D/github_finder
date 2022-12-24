type SearchProps ={
    loadUser: (userName: string) => Promise<void>;
}
import {BsSearch} from 'react-icons/bs'
import React, { useState, KeyboardEvent } from 'react'
import styles from './Search.module.css'
const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("")
    const handleKeyDown =(e:KeyboardEvent) =>{
        if (e.key === "Enter") {
            loadUser(userName)
        }
    }
  return (
    <div className={styles.search}>
        <h2>Busque um usuario</h2>
        <p>Conheça seus melhores repositorios</p>
        <div className={styles.search_container} >
            <input type="text" placeholder='digite o nome do usuario' 
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown} />
            <button onClick={() => loadUser(userName)} >
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search