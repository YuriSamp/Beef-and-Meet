import styles from './item.module.scss';
import { PratoI } from 'Types/Prato';
// import { useNavigate } from 'react-router-dom';

export const Item = (props: PratoI) => {
  const { title, description, photo, id } = props;
  // const navigate = useNavigate();
  return (
    <div className={styles.item} >
      <div>
        <img className={styles.item__imagem} src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
          <h2 className={styles.item__descricao__titulo}>{title}</h2>
          <p className={styles.item__descricao__detalhada}>{description}</p>
      </div>
    </div>
  );
};


// onClick={() =>navigate(`/prato/${id}`)}