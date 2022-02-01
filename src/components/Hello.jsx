import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  // const children = props.children;
  // propsからchildrenを分割しますよ（分割代入）
  const { children, bang, style } = props;
  return (
    <View>
      {/* 右が一番優先度高し */}
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}

// Helloに渡ってくるproptypeはこんな型ですよ
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

Hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
