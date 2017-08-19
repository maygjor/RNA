import {Dimensions} from 'react-native';
var width=Dimensions.get('window').width;
const styles={
  searchResultsWrapper:{
    top:450,
    position:'absolute',
    width:width,
    height:200,
    backgroundColor:'#fff',
    opacity:.9
  },
  primaryText:{
    fontStyle:'italic',
    color:'#7d7d7d',
  },
  secondaryText:{
    fontStyle:'italic',
    color:'#7d7d7d',
  },
  leftContainer:{
    flexWrap:'wrap',
    alignItems:'flex-start',
    borderLeftColor:'#7d7d7d'
  },
  leftIcon:{
    fontSize:20,
    color:'#7d7d7d'
  },
  distance:{
    fontSize:12
  }
};
export default styles;
