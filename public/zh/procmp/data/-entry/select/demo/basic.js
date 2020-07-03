import React from 'react';
import ReactDOM from 'react-dom';
import { Select, Button, Row, Col } from 'choerodon-ui/pro';

function handleChange(value, oldValue) {
  console.log('[basic new]', value, '[basic old]', oldValue);
}

const { Option } = Select;

class App extends React.Component {
  state = {
    visible: true,
  };

  handleClick = () => this.setState({ visible: !this.state.visible });

  render() {
    return (
      <Row gutter={10}>
        <Col span={8}>
          <Select placeholder="请选择" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            {this.state.visible && (
              <Option value="wu" disabled>
                Wu
              </Option>
            )}
          </Select>
        </Col>
        <Col span={4}>
          <Button onClick={this.handleClick}>修改选项</Button>
        </Col>
        <Col span={12}>
          <Select placeholder="请选择" disabled>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="wu">Wu</Option>
          </Select>
        </Col>
      </Row>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
