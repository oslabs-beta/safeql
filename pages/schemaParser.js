import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SchemaInput } from '../components/schemaParser/SchemaInput';
import SchemaVisualizer from '../components/schemaParser/SchemaVisualizer';
import { useState } from 'react';

export default function SchemaParser() {

  const [parsedSchema, setParsedSchema] = useState('')
  
  // const [url, setUrl] = useState<string>('');

  return (
    <div className={styles.container}>
      <Head>
        <title>safeQL</title>
        <meta
          name='safeQL is the fastest way to analyze your graphQL endpoint and enforce security'
          content='Created by the Heat Seeking Devil Chickens of PTRI GR8'
        />
      </Head>

      <div className='flex flex-row my-1'>
        <SchemaInput 

          setParsedSchema={setParsedSchema}
 />
        <SchemaVisualizer 
          parsedSchema={parsedSchema} />
      </div>

    </div>
  );
}