import Head from 'next/head'
import React from 'react'

export default function MetaSEO({title,description,keywords}) {
  return (
     <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Urban Brew Café" />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}
