import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class Star extends Component {
  constructor(props) {
    super(props);
  };
  static defaultProps = {
    value: "35",
    width: 12,
    height: 12
  };
  static propTypes = {
    value: PropTypes.string.isRequired
  };
  starRender = (props) => {
    const { value, width, height } = props;
    const results = [];
    let flag = true;
    if (value == "00") {
      return <Text style={styles.smallFont}>暂无评分</Text>;
    }

    for (var i = 0; i < 5; i++) {
      if (i < value[0]) {
        results.push(<Image key={i} style={{ width: width, height: height }} source={require('../img/star-full.png')} />);
      } else {
        if (flag && value[1] == '5') {
          flag = false;
          results.push(<Image key={i} style={{ width: width, height: height }} source={require('../img/star-half.png')} />);

        } else {
          results.push(<Image key={i} style={{ width: width, height: height }} source={require('../img/star-empty.png')} />);
        }

      }

    }
    return results;

  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this.starRender(this.props)}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  smallFont: {
    lineHeight: 20,
    color: '#A6A6A6',
    fontSize: 12
  },
  star: {
    marginRight: 2,
  }
})
