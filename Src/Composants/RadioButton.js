import React from 'react';
import { View,StyleSheet,style} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


  export function RadioButtons({Valeur,onPress}) {
    return ( 
    
        <View style = {[styles.container,style]} onPress={onPress}>
        <RadioForm
         radio_props={Valeur}
          initial={0}
          animation={true}
          selectedButtonColor={'#50C900'}
          selectedLabelColor={'#50C900'}
          formHorizontal={false}
          onPress={(value) => {}}
        />
      </View>
      );
  }
  const styles = StyleSheet.create({

    container: {
      
    },
    
  });