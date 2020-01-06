import React from "react";
import dynamic from "next/dynamic";
import App from "../components/App";

const Puppy = dynamic(() => import("../components/Puppy"), {
  loading: () => <p>Loading...</p>
});

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: false
    };
  }

  showDetails() {
    this.setState({ details: true });
  }

  render() {
    const { details } = this.state;

    return (
      <App>
        {!details ? (
          <button onClick={() => this.showDetails()}>CLICK ME</button>
        ) : (
          <Puppy />
        )}
        <style jsx>{`
          button {
            font-size: 18px;
            font-weight: bold;
            border-radius: 3px;
            border: 2px pink solid;
            cursor: pointer;
            color: #fff;
            padding: 25px 37px;
            margin-bottom: 50px;
            min-width: 80px;
            background: transparent;
            text-transform: uppercase;
          }
        `}</style>
      </App>
    );
  }
}
