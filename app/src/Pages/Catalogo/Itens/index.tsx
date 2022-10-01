import styles from './itens.module.scss';
import Product from 'data/Products.json';
import { useState, useEffect } from 'react';
import { Item } from './Item';

interface Props {
  busca: string,
  filtro: number | null
}

export const Itens = (props: Props) => {
  const [lista, setLista] = useState(Product);
  const { busca, filtro } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  useEffect(() => {
    const novaLista = Product.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(novaLista);
  }, [busca, filtro]);

  return (
    <div className={styles.grid}>
      {lista.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};