import React from 'react';
import {Text} from 'react-native';
import {InputGroup,View,Input} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './SearchBoxStyles';
import GPlaces from './AutoComplete';
import RNGooglePlaces from 'react-native-google-places';

export const SearchBox=({getInputData})=>{
  function handleInput(key,val){
    ()=>{
      RNGooglePlaces.openAutocompleteModal().then((place) => {
      console.log(place);
      })
      .catch(error => console.log(error.message));  // error is a Javascript Error object
    }
    getInputData({
      key,
      value:val
    });
  }

  return(
    <View style={styles.SearchBox}>
     <View style={styles.inputWrapper}>
       <Text style={styles.label}>Pick-up</Text>
       <InputGroup>
       <Icon name="search" size={15} color="#FF5E3A"/>
         <Input style={styles.inputSearch} placeholder="choose pickup location" onChangeText={handleInput.bind(this,'pickUp')}/>
       </InputGroup>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Drop-off</Text>
        <InputGroup>
        <Icon name="search" size={15} color="#FF5E3A"/>
          <Input style={styles.inputSearch} placeholder="choose drop-off location" onChangeText={handleInput.bind(this,'dropOff')}/>
        </InputGroup>
       </View>
    </View>
  );
}

export default SearchBox;
