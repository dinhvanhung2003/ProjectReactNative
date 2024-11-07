import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import LaunchScreen from './components/LaunchScreen/LaunchScreen.jsx';
import HomeScreen from './components/HomeScreen/HomeScreen.jsx';
import ChartDetails from './components/HomeScreen/ChartDetails/ChartDetails.jsx';
import MusicPlayer from './components/HomeScreen/MusicPlayer.jsx';
import SearchScreen from './components/SearchScreen/SearchScreen.jsx';

const Stack = createStackNavigator();

const App = () => {
  const [currentRoute, setCurrentRoute] = useState(null);

  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer
         
        >
          <Stack.Navigator initialRouteName="LaunchScreen">
            <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ChartDetails" component={ChartDetails} options={{ headerShown: false }} />
            <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{ headerShown: false }} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
};

export default App;
