import { BsCodeSlash } from 'react-icons/bs'
import { ReposProps } from '../Types/repos'
import styles from './CardRepo.module.css'
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
const CardRepo = ({name, language, stargazers_count, forks_count, svn_url}: ReposProps) => {
    console.log(name, language, stargazers_count, forks_count, svn_url)
  return (
    <div className={styles.repo} >
        <h3>{name}</h3>
        <p>
          <BsCodeSlash/>{language}
        </p>
        <div className={styles.stats} >
          <div>
            <AiOutlineStar />
            <span>{stargazers_count}</span>
          </div>
          <div>
            <AiOutlineFork />
            <span>{forks_count}</span>
          </div>
        </div>
        <a href={svn_url} target="_blank" className={styles.repo_btn}>
        <span>Ver código</span>
        <RiGitRepositoryLine/>
      </a>
    </div>
  )
}

export default CardRepo