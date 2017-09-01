import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  //static async getInitialProps (ctx) {
  //const props = await Document.getInitialProps(ctx)
  //return { ...props, customValue: 'hi there!'  }
  //}

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <title>No-line</title>
          <link
            rel="stylesheet"
<<<<<<< 0b6c14f76c44ebeecccd22825b7d7328b0367642
            type="text/css"
            href="/static/css/nprogress.css"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
=======
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
          />
>>>>>>> rebasing
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
