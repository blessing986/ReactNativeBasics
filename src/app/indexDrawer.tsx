import 'react-native-gesture-handler';

import DashboardScreen from '@/screens/DashboardScreen';
import type { DrawerParamList } from '@/screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from '@/screens/SettingsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Dashboard'
          component={DashboardScreen}
          options={{
            title: 'My dashboard',
            drawerLabel: 'Dashboard Label',
            drawerActiveTintColor: '#333',
            drawerActiveBackgroundColor: 'lightblue',
            drawerContentStyle: { backgroundColor: '#C6CBEF' },
          }}
        />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
