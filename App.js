import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);


function HomeScreen({route, navigation}) {
  return (
    <View style={styles.mainBackGround}>
     <View style={styles.mainContainer}> 
      <Text style={styles.title}>Cade's Budget Tracker</Text>
      <Image style={styles.HomeImage} source={require('./assets/DollarImage.png')}/>
      <TouchableOpacity style={styles.btnContainerHome}
      onPress={() => {
        navigation.navigate('Login');
      }} >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={() => {
        navigation.navigate('Register');
      }}>
        <Text style={styles.noAccount}>Don't have an account?</Text>
      </TouchableOpacity>
     </View>
    </View>
  );
}

function LoginScreen({route, navigation}) {
  return(
    <View style={styles.mainBackGround}>
      <View style={styles.mainContainer}>
      <Text style={styles.title}>Login</Text>
      <TextInput 
      placeholder='Username' 
      style={styles.input}
      />
      <TextInput 
      placeholder='Password' 
      style={styles.input}
      />
      <TouchableOpacity style={styles.btnContainerLogin}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

function RegisterScreen({route, navigation}) {
  return(
    <View style={styles.mainBackGround}>
      <View style={styles.mainContainer}>
      <Text style={styles.title} >Register</Text>
      <TextInput 
      placeholder='First Name' 
      style={styles.input}
      />
      <TextInput 
      placeholder='Last Name' 
      style={styles.input}
      />
      <TextInput 
      placeholder='Email' 
      style={styles.input}
      />
      <TextInput 
      placeholder='Username' 
      style={styles.input}
      />
      <TextInput 
      placeholder='Password' 
      style={styles.input}
      />
      <TextInput 
      placeholder='Confirm Password' 
      style={styles.input}
      />
      <TouchableOpacity style={styles.btnContainerRegister}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();
function App() {

  
  
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Register',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  mainBackGround: {
    backgroundColor: '#68F05C',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 50,
    paddingRight: 50,
    position: 'absolute',
    width: 350,
    height: 700,
  },
  input: {
    width: 200,
    height: 50,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 20, 
  },
  HomeImage: {
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  title:{
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnContainerHome: {
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1876E5',
  },
  btnContainerLogin: {
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1876E5',
    marginTop: 50,
  },
  btnContainerRegister: {
    width: 200,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1876E5',
    marginTop: 50,
  },
  btnText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  noAccount: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1876E5',
    marginTop: 20,
  }
});

export default App;
