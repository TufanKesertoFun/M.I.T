import React from "react";
import Layout from '/..layout/../components/layout'; // Adjust path if necessary
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'; // Ensure this only contains necessary styles

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome to My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainContent}>
        
        <p>Welcome to my Blog!</p>
        <p>Check out my <Link href="/posts/first-post">first post</Link></p>
      </div>
    </Layout>
  );
}
