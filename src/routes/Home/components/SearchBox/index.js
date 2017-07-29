import React from 'react';
import {Text} from 'react-native';
import {InputGroup,View,Input} from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import styles from './SearchBoxStyles';

export const SearchBox=()=>{
  return(
    <View style={styles.SearchBox}>
     <View style={styles.inputWrapper}>
       <Text style={styles.label}>Pick-up</Text>
       <InputGroup>
       <Icon name="search" size={15} color="#FF5E3A"/>
         <Input style={styles.inputSearch} placeholder="choose pickup location"/>
       </InputGroup>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Drop-off</Text>
        <InputGroup>
        <Icon name="search" size={15} color="#FF5E3A"/>
          <Input style={styles.inputSearch} placeholder="choose drop-off location"/>
        </InputGroup>
       </View>
    </View>
  );
}

export default SearchBox;
