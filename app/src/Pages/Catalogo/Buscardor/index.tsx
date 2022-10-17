import {CgSearch} from 'react-icons/cg';
import styles from './buscador.module.scss';

interface Props{
  busca: string
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

export const Buscador = ({busca,setBusca} : Props ) => {

  return(
    <div className={styles.buscador}>
      <input placeholder="Buscar" value={busca} onChange={e => setBusca(e.target.value)}>
      </input>
      <CgSearch/>
    </div>
  ) ; 
};