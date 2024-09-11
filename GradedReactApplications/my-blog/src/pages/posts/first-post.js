import React from "react";
import Layout from '../../../components/layout';  // Ensure correct path to Layout
import Head from 'next/head';
import Link from 'next/link';

export default function FirstPostPage() {
  return (
    <Layout> 
      <>
        <Head>
          <title>First Post</title>
        </Head>
        <div>
          <h1>First Post</h1>
          <p>This is my first post.</p>
          <Link href="/">Go to Home</Link>
        </div>
      </>
    </Layout>
  );
}
