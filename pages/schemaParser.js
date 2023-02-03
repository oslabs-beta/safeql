import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { SchemaInput } from '../components/schemaParser/SchemaInput';
// import OverviewFlow from '../components/schemaParser/OverviewFlow';
import { useState } from 'react';
import ReformatSchemaJSON from '../components/schemaParser/ReformatSchemaJSON';
import SchemaDisplayReactFlow from '../components/schemaParser/SchemaDisplayReactFlow';

export default function SchemaParser() {

  const [parsedSchema, setParsedSchema] = useState('')

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
        <ReformatSchemaJSON
  parsedSchema={parsedSchema} />
        
      <SchemaDisplayReactFlow/>

      </div>

    </div>
  );
}