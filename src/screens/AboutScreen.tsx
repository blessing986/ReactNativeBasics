import { Button, StyleSheet, Text, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';

export type RootStackParamList = {
  Home: { result?: string } | undefined;
  About: { name: string };
};

type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>;
export default function AboutScreen({ route, navigation }: AboutScreenProps) {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title='Update the name'
        onPress={() => navigation.setParams({ name: 'Ubiomor' })}
      />
      <Button
        title='Go back with data'
        onPress={() =>
          navigation.navigate('Home', { result: 'Data from about' })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
