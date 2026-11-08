import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

export default function IndexScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]">
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        
        {/* --- ÜST KISIM (FitTrack Logo & Bildirim) --- */}
        <View className="flex-row justify-between items-center mt-3">
          <View className="flex-row items-center space-x-2">
            <View className="w-8 h-8 rounded-lg bg-[#22C55E] items-center justify-center">
              <MaterialCommunityIcons name="dumbbell" size={18} color="#0F172A" />
            </View>
            <Text className="text-white text-xl font-bold tracking-wide">FitTrack</Text>
          </View>

          <TouchableOpacity className="w-10 h-10 rounded-full bg-[#1E293B] items-center justify-center border border-slate-700/50">
            <Ionicons name="notifications-outline" size={20} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        {/* Karşılama */}
        <View className="mt-5">
          <Text className="text-white text-2xl font-bold">Merhaba, Umut 👋</Text>
          <Text className="text-slate-400 text-sm mt-1">
            Daha güçlü bir sen için bugün de hareket zamanı!
          </Text>
        </View>

        {/* --- SERİ KARTI --- */}
        <View className="mt-5 p-4 rounded-2xl bg-[#1E293B] border border-slate-800 flex-row items-center space-x-3.5">
          <View className="w-12 h-12 rounded-xl bg-orange-500/10 items-center justify-center">
            <FontAwesome5 name="fire-alt" size={22} color="#F97316" />
          </View>
          <View className="flex-1">
            <Text className="text-white font-bold text-base">3 Günlük Seri</Text>
            <Text className="text-slate-400 text-xs mt-0.5">
              Harika gidiyorsun! Seriyi devam ettir.
            </Text>
          </View>
        </View>

        {/* --- BUGÜNKÜ ANTRENMAN KARTI --- */}
        <Text className="text-white font-bold text-lg mt-6 mb-3">Bugünkü Antrenman</Text>
        
        <View className="p-5 rounded-3xl bg-[#1E293B] border border-slate-800">
          <View className="flex-row items-center space-x-3 mb-5">
            <View className="w-12 h-12 rounded-2xl bg-[#0F172A] items-center justify-center border border-slate-700/60">
              <MaterialCommunityIcons name="arm-flex" size={24} color="#22C55E" />
            </View>
            <View>
              <Text className="text-white font-bold text-lg">Göğüs & Triceps</Text>
              <Text className="text-slate-400 text-xs mt-0.5">5 Hareket • 45 Dk</Text>
            </View>
          </View>

          {/* Başla Butonu -> antrenman.js sekmesine yönlendirir */}
          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => router.push('/(tabs)/antrenman')}
            className="w-full bg-[#22C55E] py-3.5 rounded-2xl flex-row items-center justify-center space-x-2"
          >
            <Text className="text-[#0F172A] font-bold text-base">Başla</Text>
            <Ionicons name="arrow-forward" size={18} color="#0F172A" />
          </TouchableOpacity>
        </View>

        {/* --- HAFTALIK İLERLEME --- */}
        <View className="mt-6">
          <View className="flex-row justify-between items-center mb-2.5">
            <Text className="text-white font-bold text-base">Haftalık İlerleme</Text>
            <Text className="text-[#22C55E] font-semibold text-xs">4 / 5 Gün</Text>
          </View>
          
          <View className="w-full h-2.5 bg-[#1E293B] rounded-full overflow-hidden">
            <View className="h-full bg-[#22C55E] rounded-full" style={{ width: '80%' }} />
          </View>
        </View>

        {/* --- ÖZET İSTATİSTİKLER --- */}
        <View className="flex-row justify-between mt-5 mb-8 space-x-3">
          <View className="flex-1 bg-[#1E293B] p-4 rounded-2xl items-center border border-slate-800">
            <MaterialCommunityIcons name="weight-lifter" size={20} color="#94A3B8" />
            <Text className="text-white font-bold text-lg mt-2">12</Text>
            <Text className="text-slate-400 text-[11px] mt-0.5">Toplam Ant.</Text>
          </View>

          <View className="flex-1 bg-[#1E293B] p-4 rounded-2xl items-center border border-slate-800">
            <Ionicons name="time-outline" size={20} color="#94A3B8" />
            <Text className="text-white font-bold text-lg mt-2">35 saat</Text>
            <Text className="text-slate-400 text-[11px] mt-0.5">Süre</Text>
          </View>

          <View className="flex-1 bg-[#1E293B] p-4 rounded-2xl items-center border border-slate-800">
            <MaterialCommunityIcons name="lightning-bolt-outline" size={20} color="#94A3B8" />
            <Text className="text-white font-bold text-lg mt-2">12.5 ton</Text>
            <Text className="text-slate-400 text-[11px] mt-0.5">Ağırlık</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}