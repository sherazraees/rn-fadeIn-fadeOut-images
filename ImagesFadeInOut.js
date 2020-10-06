import React from "react";
import { View, StyleSheet, Animated } from "react-native";

export default class ImagesFadeInOut extends React.Component {
  fadeInOpacity = new Animated.Value(0.01);
  fadeOutOpacity = new Animated.Value(0.88);
  state = {
    prevSource: null,
  };

  componentDidMount() {
    this.animationStart();
  }

  componentDidUpdate() {
    this.animationStart();
  }

  UNSAFE_componentWillReceiveProps({ source: newSource }) {
    const { source } = this.props;
    if (newSource !== source) {
      this.setState({ prevSource: source });
    }
  }

  animationStart = () => {
    const { fadeInDuration, fadeOutDuration } = this.props;
    this.fadeInOpacity.setValue(0.01);
    this.fadeOutOpacity.setValue(0.88);

    Animated.timing(this.fadeInOpacity, {
      toValue: 0.88,
      duration: fadeInDuration != undefined ? fadeInDuration : 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.fadeOutOpacity, {
      toValue: 0.01,
      duration: fadeOutDuration != undefined ? fadeOutDuration : 3000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { prevSource } = this.state;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Animated.Image
          {...this.props}
          style={[
            styles.frame,
            { ...this.props.style },
            { opacity: this.fadeInOpacity },
          ]}
          resizeMode="cover"
        />
        {prevSource && (
          <Animated.Image
            {...this.props}
            style={[
              styles.frame,
              { ...this.props.style },
              { opacity: this.fadeOutOpacity },
            ]}
            resizeMode="cover"
            source={prevSource}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
