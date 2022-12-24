import { useNavigate } from 'react-router-dom'
import styles from './Back.module.css'
const Back = () => {
    const navigate = useNavigate()
  return (
    <button className={styles.back_button} onClick={() => navigate(-1)}>Voltar</button>
  )
}

export default Back