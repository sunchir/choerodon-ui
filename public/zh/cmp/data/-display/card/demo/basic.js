import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'choerodon-ui';

ReactDOM.render(
  <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>,
  document.getElementById('container'));
