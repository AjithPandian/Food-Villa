import React from "react";
// This is the example of how to use the class based component
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Profile class (Child) - constructor");
  }

  componentDidMount() {
    // All our api calls will be made here rather in the functional component we use useEffect();
    // As useEffect this will  usually be called after the render method
    console.log("Profile class (Child) - ComponentDidMount");
  }

  // In the classs based  component we usually use render method to render our component
  render() {
    const { count } = this.state;
    console.log("Profile class (Child) - render");
    return (
      <>
        <h1>Hi I'm from the class based component</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>{count}</h3>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Count
        </button>
      </>
    );
  }
}

export default ProfileClass;
