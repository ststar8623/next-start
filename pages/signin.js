import Layout from '../components/layout/layout';
import { Dimmer } from 'semantic-ui-react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Dimmer
          active
        >
          <div className='ui grid'>
            <div className='row centered'>
              <h2 className='ui header inverted'>Sign in</h2>
              <small>
                Connect with your favorite social network
              </small>
            </div>
            <div className='row centered'>

            </div>
          </div>
        </Dimmer>
      </Layout>
    );
  }
}

export default Signin;