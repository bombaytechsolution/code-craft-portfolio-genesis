
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Senior Backend Engineer with 7 years of experience building scalable, high-performance applications" />
        <meta name="author" content="Senior Backend Engineer" />
        <meta property="og:title" content="Senior Backend Engineer Portfolio" />
        <meta property="og:description" content="Senior Backend Engineer with 7 years of experience building scalable, high-performance applications" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lovable_dev" />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
