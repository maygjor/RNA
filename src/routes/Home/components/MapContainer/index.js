import React from 'react';
import {View} from 'native-base';
import MapView from 'react-native-maps';
import styles from './MapContainerStyles';
import SearchBox from'../SearchBox';

export const MapContainer= ({region})=>{
return(
  <View style={styles.container}>
  <MapView
       style={styles.map}
       zoomEnabled = {true}
       provider={MapView.PROVIDER_GOOGLE}
       region={region}
       >
       <MapView.Marker
            coordinate={region}
            pinColor="green"
        />
  </MapView>
  <SearchBox/>
  </View>
)
}
export default MapContainer;
