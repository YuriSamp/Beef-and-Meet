import styles from './style.module.scss';
import { Buscador } from './Buscardor';
import { useState } from 'react';
import { Filtros } from './Filtro';
import { Itens } from './Itens';


export const Catalogo = () => {
  const [filtro, setFiltro] = useState<number | null>(null);
  const [busca, setBusca] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.h1}>
        Nossos produtos
      </div>
      <div className={styles.h1__buscador}>
        <Buscador busca={busca} setBusca={setBusca} />
        <Filtros filtro={filtro} setFiltro={setFiltro} />
      </div>
      <Itens busca={busca} filtro={filtro} />
    </main>
  );
};