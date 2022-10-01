import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';

export const NavBar = () =>{
  const navigate = useNavigate();
  return(
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbar__pages}>
          <button className={styles.navbar__pages__buttons} onClick={() => navigate('')}>Home</button>
          <button className={styles.navbar__pages__buttons} onClick={() => navigate('/cardapio')}>Cardapio</button>
          <button className={styles.navbar__pages__buttons} onClick={() => navigate('/contato')}>Contato</button>
        </div>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__titulo}>
          ESSE LUGAR TRAZ FELICIDADE A QUALQUER UM
        </div>
      </header>
    </div>
  );
};
