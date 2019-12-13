import React from 'react';
import LoginRequest from '../actions/index';


class Pre extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <div>
          <input
            label="Email"
            type="email"
            onChange={(e => setEmail(e.target.value))}
          />
        </div>
        <div>
          <input
            label="Address"
            type="text"
            onChenge={(e => setAddress(e.target.value))} />
            </div>
        <button
          onClick={LoginRequest(info)}
        >
          Send
        </button>
      </form>
    );
  }
}
const [email, setEmail] = React.useState("");
const [address, setAddress] = React.useState("");
const info = (email, address);

export default Pre;