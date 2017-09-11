import Layout from '../components/layout/layout';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../reducers';

class Setting extends React.Component {
  render() {
    return (
      <Layout>
        <div className='wrapper'>
          <div className='title'></div>
          <div className='options'></div>
        </div>
        <style jsx>{`
          .wrapper {
            display: grid;
            grid-template-areas: "title title"
                                 "options options";
            grid-row-gap: 1em;
          }
          .title {
            grid-area: title;
            background: orange;
          }
          .options {
            grid-area: options;
            background: yellow;
          }
        `}</style>
      </Layout>
    );
  }
}

export default withRedux(makeStore)(Setting);