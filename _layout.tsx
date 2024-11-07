import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
    tabBarActiveTintColor: 'black',
    headerStyle: {
    backgroundColor: '#ffd600',
    alignItems: 'center',
    justifyContent: 'center',
    },
    headerShadowVisible: false,
    headerTintColor: 'black',
    tabBarStyle: {
    backgroundColor: '#ffd600',
    },
  }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'MyIm3',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
      name="about"
      options={{
        title: 'About',
        headerTitleAlign: 'center',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'information-sharp' : 'information-circle-outline'} color={color} size={24} />
        ),
      }}
      />
    </Tabs>
  );
}
