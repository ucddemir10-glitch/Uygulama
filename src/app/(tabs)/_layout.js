import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0F172A',
          borderTopColor: '#1E293B',
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarActiveTintColor: '#22C55E',
        tabBarInactiveTintColor: '#64748B',
      }}
    >
      {/* 1. Ana Sayfa (index.js) */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size || 22} color={color} />
          ),
        }}
      />

      {/* 2. Antrenmanlar (antrenman.js) */}
      <Tabs.Screen
        name="antrenman"
        options={{
          title: 'Antrenman',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dumbbell" size={size || 22} color={color} />
          ),
        }}
      />

      {/* 3. Geçmiş (gecmis.js) */}
      <Tabs.Screen
        name="gecmis"
        options={{
          title: 'Geçmiş',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size || 22} color={color} />
          ),
        }}
      />

      {/* 4. İstatistikler (istatistikler.js) */}
      <Tabs.Screen
        name="istatistikler"
        options={{
          title: 'İstatistik',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size || 22} color={color} />
          ),
        }}
      />

      {/* 5. Profil (profil.js) */}
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size || 22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}