import Products from 'data/Products.json'
import {useNavigate} from 'react-router-dom'
import styles from './home.module.scss'
import carne from 'assets/carne.jpg'

export const Home = () => {
  const pratosRecomedados = [...Products]
  const pratosSort = pratosRecomedados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function Redirecionar(prato: typeof Products[0]) {
    navigate(`/prato/${prato.id}`, {state: {prato}});
  }

  return(
    <section className={styles.section}>
    <div className={styles.h1}>
    <h2 >Recomendações da cozinha</h2>
    </div>
    <div className={styles.recomendados}>
      {pratosSort.map(item => (
        <div className={styles.recomendado} key={item.id}>
          <div className={styles.recomendado__containerh3}>
          <h3 className={styles.recomendado__titulo}>{item.title}</h3>
          </div>
          <div className={styles.recomendado__imagem}>
            <img src={item.photo} alt={item.title} />
          </div>
          <button
            onClick={() => Redirecionar(item)}
            className={styles.recomendado__botao}>
            Ver mais
          </button>
        </div>
      ))}
    </div>
  </section>
  )
}