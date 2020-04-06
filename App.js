import React, {useState, useEffect} from 'react';

import {Text} from 'galio-framework';

import 'react-native-gesture-handler';

import BottomTabNavigator from './components/BottomTabNavigator';

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const getCurrentPositionAsync = async () => {
    try {
    } catch (e) {
      console.warn(e);
    } finally {
      setLoadingComplete(true);
    }
  };

  useEffect(() => {
    getCurrentPositionAsync();
  }, []);

  if (!isLoadingComplete) {
    return <Text>Cargando el beta</Text>;
  } else {
    return <BottomTabNavigator />;
  }
};

export default App;
