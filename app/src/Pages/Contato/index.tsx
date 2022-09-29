import styles from './Contato.module.scss';

export const Contato = () => {
  return (
    <section>
      <div className={styles.container} >
        <h1 className={styles.container__titulo}>Preencha o formulario</h1>
        <p className={styles.container__subtitulo}>Nos envie sua dúvida, sugestão ou elogio, seu contato vale muito para nós. Prometemos responder o mais breve possível.</p>
        <form>
          <div className={styles.container__formdiv1}>
            <div className={styles.container__inputdiv}>
              <label htmlFor="nome" className={styles.container__labels}> Nome</label>
              <input id='nome' className={styles.container__inputpadrao} name='nome' type={'text'} />
            </div>
            <div className={styles.container__inputdiv}>
              <label htmlFor="email" className={styles.container__labels}> E-mail</label>
              <input id='email' className={styles.container__inputpadrao} name='email' type={'email'} />
            </div>
          </div>
          <div className={styles.container__formdiv1}>
            <div className={styles.container__inputdiv}>
              <label htmlFor='Telefone' className={styles.container__labels}>Telefone</label>
              <input id='Telefone' className={styles.container__inputpadrao} name='Telefone' type={'tel'} />
            </div>
            <div className={styles.container__inputdiv}>
              <label htmlFor='mensagem' className={styles.container__labels}> Sobre o que gostaria de falar? </label>
              <input id='mensagem' className={styles.container__inputpadrao} />
            </div>
          </div>
          <div className={styles.container__inputdiv}>
            <label htmlFor='mensagem2' className={styles.container__labels}> Mensagem</label>
            <textarea id='mensagem2' className={styles.container__inputdiferente}/>
          </div>
          <button className={styles.container__botao}>Enviar</button>
        </form>
        <h2 className={styles.container__titulo2}>Onde nos encontrar</h2>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235199.33726426266!2d-43.586408110274185!3d-22.91375278812495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1664386947074!5m2!1spt-BR!2sbr"
            width="900"
            height="500"
            loading="lazy" ></iframe>
        </div>
      </div>
    </section>
  );
};