import './gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Home from './src/pages/home';
import BottomRoutes from './src/routes/botton.routes';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    
      <NavigationContainer>
        <BottomRoutes/>

      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
