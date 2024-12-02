import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { styles } from '@/style';
import Home from '@/assets/svg/Home';
import Location from '@/assets/svg/Location';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: ({
          backgroundColor: 'white',
        })
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => focused ? null : <View style={{ position: 'absolute', top: Platform.OS === 'ios' ? 10 : 0 }}><Home /></View>,
          tabBarLabel: ({ focused }) => focused ? <View style={{ flexDirection: 'column', alignItems: 'center', position: 'absolute', top: Platform.OS === 'ios' ? 15 : 0 }}><Text style={styles.headline06}>Home</Text><View style={{
            height: 4,
            width: 4,
            borderRadius: 2,
            backgroundColor: 'orange',
          }}></View></View> : '',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => focused ? null : <View style={{ position: 'absolute', top: Platform.OS === 'ios' ? 10 : 0 }}><Location /></View>,
          tabBarLabel: ({ focused }) => focused ? <View style={{ flexDirection: 'column', alignItems: 'center', position: 'absolute', top: Platform.OS === 'ios' ? 15 : 0 }}><Text style={styles.headline06}>Explore</Text><View style={{
            height: 4,
            width: 4,
            borderRadius: 2,
            backgroundColor: 'orange',
          }}></View></View> : '',
        }}
      />
    </Tabs>
  );
}
