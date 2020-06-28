import React from "react";
import Player from "./Player.jsx";
import { Form, Input,Button } from "antd";
class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "Announce",
      playerNames: [],
    };
  }

  getSnapshotBeforeUpdate() {}
  componentWillMount() {
    console.log("My [myOwnTarget] is Pretty a");
  }

  componentDidMount() {
    console.log("My [myOwnTarget] is Pretty");
  }

  announce = () => {
    this.setState({ playerNames: ["LiLei1", "Nancy", "Alexendar"] });
  };
  onFinish = (values) => {
    console.log(values)
  };
  render() {
    return (
      <div>
        <h1>
          <button onClick={this.announce}>{this.state.text}</button>
        </h1>
        {this.state.playerNames.map((item) => (
          <Player name={item} />
        ))}
        <Form onFinish={this.onFinish} style={{paddingLeft:200}}>
          <Form.Item name="userName">
            <Input />
          </Form.Item>
          <Form.Item name="userName1">
            <Input />
          </Form.Item>
          <Form.Item name="userName2">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form>

      </div>
    );
  }
}

export default Home;
