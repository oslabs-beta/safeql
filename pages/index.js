import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { EditorBox } from '../components/EditorBox'
import { URLBox } from '../components/URLBox';
import { ResponseBox } from '../components/ResponseBox';
import { ResultsBox } from '../components/ResultsBox';


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title>safeQL</title>
        <meta
          name='safeQL is the fastest way to analyze your graphQL endpoint and enforce security'
          content='Created by the Heat Seeking Devil Chickens of PTRI GR8'
        />
      </Head>
      <URLBox />
      
      <div className='innerContainer'>
        <EditorBox />
        <ResponseBox />
        <ResultsBox />
      </div>


      {/* <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
