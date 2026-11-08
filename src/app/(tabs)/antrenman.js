import React, { useState } from "react";
import "../global.css"
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const kategoriler = [
  "Göğüs",
  "Sırt",
  "Omuz",
  "Bacak",
  "Kol",
  "Kardiyo",
];

const egzersizler = {
  Göğüs: [
    {
      isim: "Bench Press",
      aciklama: "Göğüs kaslarını geliştiren temel hareket.",
      set: "4 Set",
      tekrar: "12 Tekrar",
      dinlenme: "60 sn",
    },
    {
      isim: "Incline Dumbbell Press",
      aciklama: "Üst göğüs kaslarını çalıştırır.",
      set: "3 Set",
      tekrar: "12 Tekrar",
      dinlenme: "60 sn",
    },
    {
      isim: "Chest Fly",
      aciklama: "Göğüs kaslarını izole eder.",
      set: "3 Set",
      tekrar: "15 Tekrar",
      dinlenme: "45 sn",
    },
    {
      isim: "Push Up",
      aciklama: "Vücut ağırlığıyla yapılan göğüs hareketi.",
      set: "3 Set",
      tekrar: "15 Tekrar",
      dinlenme: "45 sn",
    },
  ],

  Sırt: [
    {
      isim: "Lat Pulldown",
      aciklama: "Kanat kaslarını çalıştırır.",
      set: "4 Set",
      tekrar: "12 Tekrar",
      dinlenme: "60 sn",
    },
    {
      isim: "Seated Row",
      aciklama: "Sırt kaslarını güçlendirir.",
      set: "3 Set",
      tekrar: "12 Tekrar",
      dinlenme: "60 sn",
    },
  ],

  Omuz: [
    {
      isim: "Shoulder Press",
      aciklama: "Omuz kaslarını geliştirir.",
      set: "4 Set",
      tekrar: "12 Tekrar",
      dinlenme: "60 sn",
    },
    {
      isim: "Lateral Raise",
      aciklama: "Yan omuz kaslarını çalıştırır.",
      set: "3 Set",
      tekrar: "15 Tekrar",
      dinlenme: "45 sn",
    },
  ],

  Bacak: [
    {
      isim: "Squat",
      aciklama: "Bacak ve kalça kaslarını çalıştırır.",
      set: "4 Set",
      tekrar: "12 Tekrar",
      dinlenme: "90 sn",
    },
    {
      isim: "Leg Press",
      aciklama: "Ön bacak kaslarını geliştirir.",
      set: "3 Set",
      tekrar: "12 Tekrar",
      dinlenme: "60 sn",
    },
  ],

  Kol: [
    {
      isim: "Biceps Curl",
      aciklama: "Ön kol kaslarını çalıştırır.",
      set: "3 Set",
      tekrar: "12 Tekrar",
      dinlenme: "45 sn",
    },
    {
      isim: "Triceps Pushdown",
      aciklama: "Arka kol kaslarını çalıştırır.",
      set: "3 Set",
      tekrar: "12 Tekrar",
      dinlenme: "45 sn",
    },
  ],

  Kardiyo: [
    {
      isim: "Koşu",
      aciklama: "Kardiyovasküler dayanıklılığı geliştirir.",
      set: "1 Set",
      tekrar: "20 Dakika",
      dinlenme: "İhtiyaca göre",
    },
    {
      isim: "Bisiklet",
      aciklama: "Dayanıklılık ve kondisyon çalışması.",
      set: "1 Set",
      tekrar: "20 Dakika",
      dinlenme: "İhtiyaca göre",
    },
  ],
};

export default function antrenman() {
  const [seciliKategori, setSeciliKategori] = useState("Göğüs");

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.baslik}>Antrenman</Text>

      <Text style={styles.altBaslik}>
        Bugünkü antrenmanını seç 💪
      </Text>

      <Text style={styles.kategoriBaslik}>
        Kas Grupları
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {kategoriler.map((kategori) => (
          <TouchableOpacity
            key={kategori}
            style={[
              styles.kategori,
              seciliKategori === kategori &&
                styles.seciliKategori,
            ]}
            onPress={() => setSeciliKategori(kategori)}
          >
            <Text
              style={[
                styles.kategoriText,
                seciliKategori === kategori &&
                  styles.seciliKategoriText,
              ]}
            >
              {kategori}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.egzersizBaslik}>
        {seciliKategori} Egzersizleri
      </Text>

      {egzersizler[seciliKategori].map((egzersiz, index) => (
        <TouchableOpacity
          key={index}
          style={styles.egzersizKart}
          activeOpacity={0.8}
        >
          <View style={styles.egzersizUst}>
            <View>
              <Text style={styles.egzersizIsim}>
                {egzersiz.isim}
              </Text>

              <Text style={styles.egzersizAciklama}>
                {egzersiz.aciklama}
              </Text>
            </View>

            <Text style={styles.ok}>›</Text>
          </View>

          <View style={styles.detaylar}>
            <Text style={styles.detay}>{egzersiz.set}</Text>
            <Text style={styles.detay}>{egzersiz.tekrar}</Text>
            <Text style={styles.detay}>
              {egzersiz.dinlenme}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101510",
    padding: 20,
  },

  baslik: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },

  altBaslik: {
    color: "#A0A0A0",
    fontSize: 15,
    marginTop: 8,
  },

  kategoriBaslik: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 35,
    marginBottom: 15,
  },

  kategori: {
    backgroundColor: "#202820",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginRight: 10,
  },

  seciliKategori: {
    backgroundColor: "#39D353",
  },

  kategoriText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  seciliKategoriText: {
    color: "#101510",
  },

  egzersizBaslik: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },

  egzersizKart: {
    backgroundColor: "#1B241D",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },

  egzersizUst: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  egzersizIsim: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  egzersizAciklama: {
    color: "#A0A0A0",
    fontSize: 12,
    marginTop: 7,
  },

  ok: {
    color: "#39D353",
    fontSize: 30,
  },

  detaylar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    borderTopWidth: 1,
    borderTopColor: "#303A32",
    paddingTop: 12,
  },

  detay: {
    color: "#39D353",
    fontSize: 12,
    fontWeight: "600",
  },
});