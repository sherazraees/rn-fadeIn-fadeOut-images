import React from "react";
import ImagesFadeInOut from "./ImagesFadeInOut";

export default class Index extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        index:
          this.state.index < this.props.images.length - 1
            ? this.state.index + 1
            : 0,
      });
    }, 5000);
  }

  render() {
    return (
      <ImagesFadeInOut
        source={{
          uri: this.props.images[this.state.index],
        }}
        style={this.props.style}
        fadeInDuration={this.props.fadeInDuration}
        fadeOutDuration={this.props.fadeOutDuration}
      />
    );
  }
}
