import { AboutStack } from './indexStack';
import CourseListScreen from '@/screens/CourseListScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '@/screens/ProfileScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: 'purple',
        }}
      >
        <Tab.Screen name='Course List' component={CourseListScreen} />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: 'My Profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name={'person'} size={20} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name='Settings' component={SettingsScreen} />
        <Tab.Screen
          name='About Stack'
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
