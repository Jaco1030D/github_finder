import {useParams} from "react-router-dom"
import {useEffect, useState} from 'react'
import { ReposProps } from '../Types/repos'
import Erros from '../Components/Erros'
import CardRepo from "../Components/CardRepo"
import styles from './Details.module.css'
import Back from "../Components/Back"
const Details = () => {
    const {id} = useParams()
    const [repo, setRepo] = useState<ReposProps | null>(null)
    const [error, setError] = useState(false)
    let ghj
    const LoadRepos = async() =>{
        
        const res = await fetch(`https://api.github.com/users/${id}/repos`)
        const data = await res.json()
        if (res.status === 404) {
            setError(true)
            return
        }
        let orderedRepos = data.sort(
            (a: ReposProps, b: ReposProps) => b.stargazers_count - a.stargazers_count
          );
    
          orderedRepos = orderedRepos.slice(0, 5);
    
          setRepo(orderedRepos);
        
    }
    const user = (data: ReposProps) =>{
        
        const {name, language, stargazers_count, forks_count, svn_url} = data

        const reposData: ReposProps ={
            name, 
            language, 
            stargazers_count, 
            forks_count, 
            svn_url
        }
        return reposData
    }
    
    useEffect(() => {
        LoadRepos()
    },[])
  return (
    <div className={styles.repo}>
        {error && <Erros/>}
        <Back/>
        <h2>Explore os repositorios do usuario: {id}</h2>
        <div className={styles.repos_container}>
        {repo && (repo as unknown as any[]).map((re, index) =>{
            {ghj = user(re)}
            return <CardRepo key={index} {...ghj} />
        })}
        </div>
    </div>
  )
}

export default Details