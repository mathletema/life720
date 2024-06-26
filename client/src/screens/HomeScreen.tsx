import React, {useState} from 'react';
import {View, Button} from 'react-native';

import Title from '@components/Title'
import LocationInfo from '@components/LocationInfo';
import ThemeToggle from '@components/ThemeToggle';

import {getLocation, getLocationWithCallback} from '@services/LocationService';
import {sendLocation} from '@services/ServerService';

import { useThemedStyles } from '@styles/UseThemedStyles';

function HomeScreen(): React.JSX.Element {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [num, setNum] = useState(0);
  
  const updateLocation = () => {
    getLocationWithCallback(
      (location) => {
        console.log(`Long: ${location.longitude}, Latitude: ${location.latitude}`)
        sendLocation({location: location, timestamp: Date.now()});
        setLat(location.latitude);
        setLong(location.longitude);
        setNum(num + 1);
      },
      (error) => { console.log(error); },
      20000 // timeout
    )
  }

  const style = useThemedStyles();

  return (
    <View style={style.container}>
      <Title title="Life720" />
      <View style={style.button}>
        <Button title="Update Location" onPress={updateLocation} color={style.button.backgroundColor}/>
      </View>
      <LocationInfo latitude={lat} longitude={long} />
      <View style={style.toggleContainer}>
        <ThemeToggle />
      </View>
    </View>
  );
}

export default HomeScreen;
