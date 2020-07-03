import React from 'react';
import ReactDOM from 'react-dom';
import { DataSet, EmailField } from 'choerodon-ui/pro';

function handleDataSetChange({ record, name, value, oldValue }) {
  console.log('[dataset newValue]', value, '[oldValue]', oldValue, `[record.get('${name}')]`, record.get(name));
}

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: 'email', type: 'email', defaultValue: '123@abc.com', required: true },
    ],
    events: {
      update: handleDataSetChange,
    },
  });

  render() {
    return <EmailField dataSet={this.ds} name="email" />;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
