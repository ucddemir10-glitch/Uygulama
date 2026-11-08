import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function AuthScreen() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true); // true: Giriş Yap, false: Kayıt Ol

  // Form State'leri
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Kayıt Ol Mantığı
  const handleRegister = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Hata', 'Lütfen e-posta ve şifre alanlarını doldurun.');
      return;
    }

    try {
      // Mevcut kayıtlı kullanıcılar listesini çek
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // E-posta daha önce alınmış mı kontrol et
      const userExists = users.some((u) => u.email.toLowerCase() === email.trim().toLowerCase());
      if (userExists) {
        Alert.alert('Hata', 'Bu e-posta adresiyle zaten bir hesap var.');
        return;
      }

      // Yeni kullanıcıyı kaydet
      const newUser = {
        name: name.trim() || 'Kullanıcı',
        email: email.trim().toLowerCase(),
        password: password.trim(),
      };
      users.push(newUser);
      await AsyncStorage.setItem('users', JSON.stringify(users));

      Alert.alert('Başarılı', 'Kaydınız tamamlandı! Şimdi giriş yapabilirsiniz.', [
        {
          text: 'Tamam',
          onPress: () => {
            setIsLogin(true);
            setPassword('');
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Hata', 'Kayıt sırasında bir problem oluştu.');
    }
  };

  // Giriş Yap Mantığı
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Hata', 'Lütfen e-posta ve şifrenizi girin.');
      return;
    }

    try {
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const user = users.find(
        (u) =>
          u.email.toLowerCase() === email.trim().toLowerCase() &&
          u.password === password.trim()
      );

      if (user) {
        // Aktif oturum açan kullanıcıyı sakla
        await AsyncStorage.setItem('currentUser', JSON.stringify(user));
        // Ana sayfaya (tabs) yönlendir
        router.replace('/(tabs)');
      } else {
        Alert.alert('Hata', 'E-posta veya şifre hatalı.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Giriş yapılırken bir problem oluştu.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0F172A]">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          className="px-6 py-8"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo & Başlık */}
          <View className="items-center mb-8">
            <View className="w-14 h-14 rounded-2xl bg-[#22C55E] items-center justify-center mb-3">
              <MaterialCommunityIcons name="dumbbell" size={32} color="#0F172A" />
            </View>
            <Text className="text-white text-3xl font-extrabold tracking-wide">FitTrack</Text>
            <Text className="text-slate-400 text-sm mt-1">
              Daha güçlü bir sen için başla
            </Text>
          </View>

          {/* Giriş Yap / Kayıt Ol Tab Değiştirici */}
          <View className="flex-row bg-[#1E293B] p-1.5 rounded-2xl mb-6 border border-slate-800">
            <TouchableOpacity
              onPress={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-xl items-center ${
                isLogin ? 'bg-[#22C55E]' : 'bg-transparent'
              }`}
            >
              <Text
                className={`font-bold text-sm ${
                  isLogin ? 'text-[#0F172A]' : 'text-slate-400'
                }`}
              >
                Giriş Yap
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-xl items-center ${
                !isLogin ? 'bg-[#22C55E]' : 'bg-transparent'
              }`}
            >
              <Text
                className={`font-bold text-sm ${
                  !isLogin ? 'text-[#0F172A]' : 'text-slate-400'
                }`}
              >
                Kayıt Ol
              </Text>
            </TouchableOpacity>
          </View>

          {/* Form Alanları */}
          <View className="space-y-4">
            {/* Kayıt Modunda İsim Alanı */}
            {!isLogin && (
              <View className="bg-[#1E293B] border border-slate-800 rounded-2xl flex-row items-center px-4 py-3.5 mb-3">
                <Ionicons name="person-outline" size={20} color="#94A3B8" />
                <TextInput
                  placeholder="Ad Soyad"
                  placeholderTextColor="#64748B"
                  value={name}
                  onChangeText={setName}
                  className="flex-1 ml-3 text-white text-base"
                />
              </View>
            )}

            {/* E-posta Alanı */}
            <View className="bg-[#1E293B] border border-slate-800 rounded-2xl flex-row items-center px-4 py-3.5 mb-3">
              <Ionicons name="mail-outline" size={20} color="#94A3B8" />
              <TextInput
                placeholder="ornek@email.com"
                placeholderTextColor="#64748B"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                className="flex-1 ml-3 text-white text-base"
              />
            </View>

            {/* Şifre Alanı */}
            <View className="bg-[#1E293B] border border-slate-800 rounded-2xl flex-row items-center px-4 py-3.5 mb-2">
              <Ionicons name="lock-closed-outline" size={20} color="#94A3B8" />
              <TextInput
                placeholder="Şifre"
                placeholderTextColor="#64748B"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                className="flex-1 ml-3 text-white text-base"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#94A3B8"
                />
              </TouchableOpacity>
            </View>

            {/* Şifremi Unuttum */}
            {isLogin && (
              <TouchableOpacity className="self-end mb-4">
                <Text className="text-slate-400 text-xs">Şifremi Unuttum?</Text>
              </TouchableOpacity>
            )}

            {/* Ana Buton (Giriş / Kayıt) */}
            <TouchableOpacity
              onPress={isLogin ? handleLogin : handleRegister}
              activeOpacity={0.8}
              className="bg-[#22C55E] py-4 rounded-2xl items-center mt-3 shadow-lg shadow-green-500/20"
            >
              <Text className="text-[#0F172A] font-extrabold text-base tracking-wide">
                {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Sosyal Giriş Butonları */}
          <View className="mt-8 space-y-3">
            <TouchableOpacity className="flex-row items-center justify-center bg-[#1E293B] border border-slate-800 py-3.5 rounded-2xl mb-3">
              <FontAwesome name="google" size={18} color="#FFFFFF" />
              <Text className="text-white font-semibold text-sm ml-3">Google ile devam et</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-center bg-[#1E293B] border border-slate-800 py-3.5 rounded-2xl">
              <FontAwesome name="apple" size={20} color="#FFFFFF" />
              <Text className="text-white font-semibold text-sm ml-3">Apple ile devam et</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}