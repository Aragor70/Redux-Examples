import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './store/actions/alert';
import Alert from './utils/alert';

interface AppProperties {
  setAlert: (message: string, alertType: string) => void
}

const App = ({ setAlert }: AppProperties) => {
  return (
    <Fragment>

      <button onClick={e=> setAlert('Hi there. :)', 'success')}>Alert</button>
      <div className="output">
        <p>
          Press button to display the alert.
        </p>
        
        <Alert />
      </div>
    </Fragment>
  );
}

export default connect(null, { setAlert })(App);
