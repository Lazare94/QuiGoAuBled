import React from 'react';
import { StyleSheet, Text} from 'react-native';


export function Heading({children, style,...props}) {
  return <Text {...props} style={[style,styles.text]}>
     {children}</Text>;
}

const styles = StyleSheet.create({

  text: {
    fontSize: 35,
    fontWeight:'bold',
    color:'black',
  },
});

