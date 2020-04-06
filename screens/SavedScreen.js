import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Button} from 'galio-framework';

const SavedScreen = ({navigation}) => {
  const [testRaro, setTestRaro] = useState('La vida yua no es triste vacila');

  const handleChangeTestRaro = () => setTestRaro('Happy happy');

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{testRaro}</Text>

      <Button text={testRaro} align="left" onPress={handleChangeTestRaro} />

      <Button
        text="Go to back"
        align="right"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
  },
});

export default SavedScreen;
