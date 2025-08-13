import { Fragment } from "react";

function Greeting(props) {
  return (
    <>
      <h1>
        hello, {props.name} {props.surname}!
      </h1>
      <h2>this text was not there</h2>
    </>
  );
}

export default Greeting;
