import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";

// const About = () => {
//   return (
//     <>
//       <h1>Welcome to the about page !!!</h1>
//       <h2>This is from the finding path lecture.</h2>
//       <Outlet />
//       <Profile name={"Ajith"} />
//     </>
//   );
// };

// Converting my about component to a class based component

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About (Parent) - contructor");
  }

  componentDidMount() {
    console.log("About (Parent) - ComponentDidMount");
  }

  render() {
    console.log("About (Parent) - render");
    return (
      <>
        <h1>Welcome to the about page !!!</h1>
        <h2>This is from the finding path lecture.</h2>
        <Outlet />
        <br />
        <Profile />
      </>
    );
  }
}

export default About;

/*

Note:
  Here the flow goes like this
    * Parent constructor -> Parent render -> Child contructor -> Child render -> Child componentDidMount -> Parent componentDidMount
    * After the Parent renders, then it goes to child then checks whether all child things are completed and  then it comes to parent componentDidMount to complete it's life cycle
 
 */
