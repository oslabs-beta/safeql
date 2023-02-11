import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SchemaInput } from '../components/schemaParser/SchemaInput';
import { useState, useContext } from 'react';
import SchemaDisplayReactFlow from '../components/schemaParser/SchemaDisplayReactFlow';
import QueryAttack from '../components/schemaParser/QueryAttack';

export default function SchemaParser() {
  const [parsedSchema, setParsedSchema] = useState('');

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
        <SchemaInput setParsedSchema={setParsedSchema} />
        <SchemaDisplayReactFlow parsedSchema={parsedSchema} />
      </div>
      {/* <QueryAttack /> to be moved here */}
    </div>
  );
}
