import {Dimensions} from "react-native";
var width= Dimensions.get("window").width;
const styles={
  SearchBox:{
    top:60,
    position:"relative",
    width:width
  },
  label:{
    top:20,
    marginLeft:10
  },
  inputWrapper:{
    marginLeft:15,
    marginRight:10,
    marginTop:10,
    marginBottom:0,
    backgroundColor:"#fff",
    opacity:0.9,
    borderRadius:7
  },
  secondInputWrapper:{
    marginLeft:15,
    marginRight:10,
    marginTop:0,
    backgroundColor:"#fff",
    opacity:0.9,
    borderRadius:7
  },
  inputSearch:{
    fontSize:12,
    fontStyle:"italic",
    marginLeft:10,
    marginTop:10,
    marginBottom:0
  }
};
export default styles;
