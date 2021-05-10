import { GetStaticProps } from 'next';
import Head from 'next/head';

import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

// esse Head é interconectado com todos os Heads, inclusive
//com o head do _documents, podendo alterar o nome da pag em cada 
//arquivo
export default function Home({ product }: HomeProps) {
  return (
    <> 
      <Head>
        <title>Home | ig.news </title>  
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all publications <br/>
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="Girl Coding" title="Girl Coding"/>
      </main>
    </>
  );
}

//conexão com o stripe
//static props é formado um html estatico, para nao
//precisar acessar a api toda vez
export const getStaticProps: GetStaticProps = async () => {
  //acessa o stripe.ts que acessa usando o .env.local
  //q consegue acessar o preço do produto com retrieve
  const price = await stripe.prices.retrieve('price_1Il0F8Kb2D5kXJ0nDAQkfQ1J')
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100), //pois esta em centavos
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24horas pra revalidar
    //o html novamente
  }
}