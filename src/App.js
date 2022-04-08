import React from "react";
import Heading from "./component/Heading";
import InputQuery from "./component/InputQuery";
import SubHeading from "./component/SubHeading";
import SubmitButton from "./component/SubmitButton";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Heading />
        <InputQuery />
        <SubmitButton />
        <SubHeading />
      </>
    );
  }
}
export default App;
