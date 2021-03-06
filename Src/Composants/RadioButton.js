import React from 'react';
import { View,StyleSheet} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

  export function RadioButtons({Valeur,onPress}) { 
     return ( 
       <View style = {[styles.container,styles]} onPress={onPress}>
         <RadioForm
          radio_props={Valeur}
           initial={0}
           animation={true}
           selectedButtonColor={'#50C900'}
           selectedLabelColor={'#50C900'}
           formHorizontal={false}
           onPress={(value) => {onPress(value)}}
         />
       </View>
       );
  }
  const styles = StyleSheet.create({

    container: {
      borderRadius:20,
    },
  });