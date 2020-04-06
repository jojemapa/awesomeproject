import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import {Button} from 'galio-framework';

import 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const [latitude, setLatitude] = useState(-6.270565);
  const [longitude, setLongitude] = useState(106.759550);

  const handleChangeTestRaro = () => {
    Geolocation.getCurrentPosition(geo => {
      setLatitude(geo.coords.latitude);
      setLongitude(geo.coords.longitude);
      console.log(longitude);
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        <Marker
          coordinate={{latitude: latitude, longitude: longitude}}
          title={'Your Location'}
        />
      </MapView>

      <Button
        color="#50C7C7"
        style={styles.button}
        size="small"
        shadowless
        onPress={handleChangeTestRaro}>
        Traer ubicacion
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginBottom: 16,
  },
});

export default HomeScreen;
