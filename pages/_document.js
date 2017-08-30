import Document, { Head, Main, NextScript  } from 'next/document';

export default class MyDocument extends Document {
  //static async getInitialProps (ctx) {
    //const props = await Document.getInitialProps(ctx)
    //return { ...props, customValue: 'hi there!'  }
  //}

  render() {
    return(
        <html style={{height: '100%', width: '100%'}}>
          <Head>
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />
            <link rel="stylesheet" href="/static/css/base.css"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
            <style>{`
              html, #__next {
                width: 100%;
                height: 100%;
              }
              body {
                margin: 0;
                width: 100%;
                height: 100%;
                font-family: 'Roboto', sans-serif;
              }
            `}</style>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
    );
  }
}
