import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    return expanded ? (
      <Text style={{ marginLeft: 20, fontSize: 14, padding: 5 }}>
        {library.item.description}
      </Text>
    ) : null;
  }

  render() {
    //console.log(this.props.library.item.id);
    console.log(this.props.selectedLibraryId);

    const { titleStyles, CardContainer } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection style={CardContainer}>
            <Text style={titleStyles}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    marginLeft: 15,
    padding: 5
  },
  descriptionStyles: {
    marginLeft: 10
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
