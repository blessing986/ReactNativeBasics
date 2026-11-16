import { Button, StyleSheet, Text, View } from 'react-native';

import type { DrawerScreenProps } from '@react-navigation/drawer';

export type DrawerParamList = {
  Dashboard: undefined;
  Settings: undefined;
};

type DashboardScreenProps = DrawerScreenProps<DrawerParamList, 'Dashboard'>;

const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen</Text>
      <Button title='Toggle drawer' onPress={() => navigation.toggleDrawer()} />
      <Button title='Settings' onPress={() => navigation.jumpTo('Settings')} />
    </View>
  );
};

export default DashboardScreen;

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
