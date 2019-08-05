import React, { Component } from "react";
import { connect } from "react-redux";

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);

//connect is a function- enables react to reach into redux to get state
