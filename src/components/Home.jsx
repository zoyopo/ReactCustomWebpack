import React from "react";
import Player from "./Player.jsx";
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
    this.setState({ playerNames: ["LiLei", "Nancy", "Alexendar"] });
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
      </div>
    );
  }
}

export default Home;
