import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import styles from '../styles/sharedStyles';

export default function OthersScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fdf6f0' }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Tilbage</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Andet</Text>

        {/* Billede */}
        <Image
          source={require('../assets/imagenes-png.png')} // Udskift med dit eget billede
          style={{ width: 150, height: 150, alignSelf: 'center', marginVertical: 20 }}
          resizeMode="contain"
        />

        {/* Knap med ikon og tekst */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#e67000',
            padding: 12,
            borderRadius: 30,
            marginBottom: 20,
          }}
          onPress={() => alert('Du trykkede!')}
        >
          <Text style={{ fontSize: 24, marginRight: 10 }}>🎉</Text>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Tryk med stil</Text>
        </TouchableOpacity>

        {/* Afrundet kort med skygge */}
        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 8 }}>Kort med skygge</Text>
          <Text>Dette er en eksempelboks man kan bruge til information eller indhold.</Text>
        </View>

        {/* Informationsboks */}
        <View
          style={{
            backgroundColor: '#ffeaa7',
            padding: 16,
            borderLeftWidth: 5,
            borderLeftColor: '#e17055',
            borderRadius: 8,
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Tips!</Text>
          <Text>Man kan lave sine egne bokse med farver, skygger og ikoner.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
