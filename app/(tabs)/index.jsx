import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router'; // Gunakan useNavigation dari expo-router

const index = () => {
  const navigation = useNavigation(); // Menggunakan hook untuk mendapatkan akses ke navigasi

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>

      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/sekawanmedia2.png')}
          style={styles.profilePicture}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Selamat Datang Di React Native Project Arvin</Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* Button ke List Data */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('listdata')} // Navigasi ke ListData
        >
          <Text style={styles.buttonText}>Ke List Data</Text>
        </TouchableOpacity>

        {/* Button ke Profile */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('profile')} // Navigasi ke Profile
        >
          <Text style={styles.buttonText}>Ke Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001514',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 16,
    color: '#FDFFFC',
  },
  imageContainer: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 250,
    height: 200,
  },
  welcomeText: {
    color: '#FDFFFC',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FDFFFC',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
