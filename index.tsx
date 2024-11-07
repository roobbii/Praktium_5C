import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlaceholderImage = require('@/assets/images/indosat-logo.png');

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.horizontalline}>-</Text>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
          <MaterialIcons name="menu" size={30} color="white" style={{ transform: [{ rotate: '180deg' }] }} />
          </View>
        </View>
        <Image source={PlaceholderImage} style={styles.image} />
        <TouchableOpacity style={styles.notificationIcon}>
        <MaterialIcons name="email" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.accountCard}>
        <View style={styles.accountInfo}>
        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start' }}>
        <MaterialIcons name="person" size={30} color="white" /> 
          <Text style={styles.accountLabel}>Robi Setiawan</Text>
          </View>
          <Text>085768700568</Text>
        </View>
        <View style={styles.balanceSection}>
          <View>
            <Text style={styles.balanceLabel}>Pulsa</Text>
            <Text style={styles.balanceValue}>Rp5000</Text>
          </View>
          <View>
            <Text style={styles.balanceLabel}>Kuota Internet</Text>
            <Text style={styles.balanceValue}>1.1 GB</Text>
          </View>
        </View>
        <Text style={styles.horizontalline}>-</Text>
        <View style={styles.ButtonSection}>
        <TouchableOpacity style={styles.BerandaButton}>
        <MaterialIcons name="home" size={45} color="white" /> 
        <Text style={styles.Beranda}>BERANDA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TagihanButton}>
        <MaterialIcons name="wallet" size={45} color="white" /> 
        <Text style={styles.Beranda}>TAGIHAN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PenawaranButton}>
        <MaterialIcons name="card-giftcard" size={45} color="white" /> 
        <Text style={styles.Beranda}>PENAWARAN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.KontrolButton}>
        <MaterialIcons name="lock" size={45} color="white" /> 
        <Text style={styles.Beranda}>KONTROL</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.packageOffer}>
        <Text style={styles.offerTitle}>Direkomendasikan Untuk Anda</Text>
        </View>
        <View style={styles.packageOffer}>
        <View style={styles.packageCard}>
          <Text style={styles.packageData}>Extra Kuota 200 MB</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="earth" size={20} color="black" />
          <MaterialCommunityIcons name="signal-cellular-3" size={20} color="black" />
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Rp. 15.000</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.packageCard}>
          <Text style={styles.packageData}>Extra Kuota 600 MB</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="earth" size={20} color="black" />
          <MaterialCommunityIcons name="signal-cellular-3" size={20} color="black" />
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Rp. 25.000</Text>
          </TouchableOpacity>
        </View>
        </View>

      <View style={styles.packageOffer}>
        <Text style={styles.offerTitle}>Populer Di Indosat</Text>
        </View>
        <View style={styles.packageOffer}>
        <View style={styles.packageCard}>
          <Text style={styles.packageData}>Free Youtube (1 Hari | 100 MB)</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="youtube" size={20} color="black" />
          <MaterialCommunityIcons name="android" size={20} color="black" />
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Gratis</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.packageCard}>
  <Text style={styles.packageData}>Extra Telpon Sepuasnya</Text>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <MaterialCommunityIcons name="phone" size={20} color="black" />
    <MaterialCommunityIcons name="signal-cellular-3" size={20} color="black" />
  </View>
  <TouchableOpacity style={styles.buyButton}>
    <Text style={styles.buyButtonText}>Rp. 10.000</Text>
  </TouchableOpacity>
</View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#ffd600',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  username: {
    color: '#fff',
  },
  points: {
    color: '#fff',
  },
  notificationIcon: {
    padding: 8,
    borderRadius: 20,
  },
  accountCard: {
    backgroundColor: '#ffd600',
    margin: 16,
    padding: 16,
    borderRadius: 16,
  },
  accountInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  accountLabel: {
    fontWeight: 'bold',
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  ButtonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  balanceLabel: {
    color: 'black',
  },
  balanceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  addAccountText: {
    color: '#ff6347',
    fontWeight: 'bold',
  },
  quickActions: {
    paddingHorizontal: 16,
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  packageOffer: {
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  offerTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  packageCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  packageData: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buyButton: {
    backgroundColor: '#ffd600',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buyButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 250,
    height: 100,
    borderRadius: 18,
  },
    BerandaButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
     backgroundColor: '#ff8f00',
     borderRadius: 15,
  },
  TagihanButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
     backgroundColor: '#ff8f00',
     borderRadius: 15,
},
PenawaranButton: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 8,
     backgroundColor: '#ff8f00',
     borderRadius: 15,
},
KontrolButton: {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 8,
     backgroundColor: '#ff8f00',
     borderRadius: 15,
},
  Beranda: {
  fontSize: 9,
  fontWeight: 'bold',
  color: 'black',
  },
  horizontalline: {
    width: "100%",
    height: 2,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
});