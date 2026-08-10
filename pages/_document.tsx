import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="mn">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Хассуурь САН - Хүмүүнлэгийн байгууллага" />
          <meta name="og:title" content="Хассуурь САН" />
          <meta name="og:description" content="Шатар, иог, бүжиг, боловсролын үйл ажиллагаа" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-slate-50 text-slate-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
