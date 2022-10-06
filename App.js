// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native';

// // create a component
// const App = () => {
//   const btn=()=>{
//     if(email ==''){
//       alert('Please fill your mail')
//       return
      
//     }
//   }
//   return (
//     <View style={styles.container}>
//       <Text>Email</Text>
//       <TextInput style={{borderColor:'grey',width:'100%',height:48,borderWidth:1,marginBottom:18}}
//       placeholder={'enter yout mail'}/>
//       <Text>Password</Text>
//       <TextInput style={{borderColor:'grey',width:'100%',height:48,borderWidth:1}}
//       placeholder={'enter yout mail'}
//       secureTextEntry={true}
//       onChangeText={()}
      
//       />

//       <TouchableOpacity onPress={btn}
//        style={{backgroundColor:'green',height:48,width:'100%',marginTop:48,justifyContent:'center',alignItems:'center',borderRadius:12
//       }}>
//         <Text>Register</Text>
//       </TouchableOpacity>

//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
    
//     marginHorizontal:14
   
//   },
// });

// //make this component available to the app
// export default App;


//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/Navigation/Routes';


// create a component
const App = () => {
  return (
    <View style={{flex:1}}>
     <Routes/>

    </View>
  );
};



//make this component available to the app
export default App;

