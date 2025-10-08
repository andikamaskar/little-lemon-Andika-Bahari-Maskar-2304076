import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerSubscribe:{
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: 'white',
    padding: 20,
  },
  titleSubscribe:{
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 30,
  },
  containerWelcome:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  tittleWelcome:{
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  welcomenavbar:{
    justifyContent: 'center',
  },
  ImageWelcome:{
    width: 200,  
    height: 200, 
    marginBottom: 50,
  },
  ImageSubscribe:{
    width: 100,  
    height: 150, 
    marginBottom: 25,
  }
});

export { styles };