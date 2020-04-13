import * as React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
// import { Form } from "./Form"
import MediaQuery from 'react-responsive';

class App extends React.Component {
  public render() {
    return (
      <div className="main">
        <Header />
        <MediaQuery query="(min-width: 768px)">
          <Main />
          {/* <Form /> */}
        </MediaQuery>
      </div>
    );
  }
}

export default App;