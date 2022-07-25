import { render } from "@testing-library/react";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  ComponentDidMount() {
    fetch("https://jsonplaceholder.https://cloudflare-ipfs.com/ipfs/QmfMKDqPWR833dMfGkW38usYS9GsGK2v1t3SF2aWrYZtHz.com/users")
      .then((res) => res.json())
      .then((resjson) => {
        setImage(resjson.image)
        // this.setState({
        //   isLoaded: true,
        //   items: json,
        // });
      });
  }

  render() {
    var { isLoaded, items } = this.stage;

    if (!isLoaded) {
      return <div> Loading...</div>;
    } else {
      return(
        <div className=" Componenets">
            <ul>
                {items.map(items => (
                    <li key={items.id}>
                        Name: {items.name} | Email: {item.email}
                    </li>
                ))}
            </ul>
        </div>
      )
    }
  }
}


export default Component;
