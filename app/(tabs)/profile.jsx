import React from 'react';
import { StyleSheet, Pressable, Text, View, Image, Linking, ScrollView } from 'react-native';

const Profile = ({ navigation }) => {
  return (
    <>
    <View style={{ backgroundColor: '#001514' }}>
      <Text style={styles.header}>Profle</Text>
    </View>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image
            source={require('@/assets/images/mpiin.jpg')}
            style={styles.profilePicture} />
          <Text style={styles.nameprofile}>Arvin Hendro</Text>

          <View style={styles.viewcontainer}>
            <View>
              <Text style={styles.name}>Code Language</Text>
              <Text style={styles.description}>
                Java, PHP, HTML, CSS, Javascript, React, Android Studio
              </Text>
            </View>
          </View>

          <View style={styles.viewcontainer}>
            <Text style={styles.name}>Projects</Text>

            <View style={styles.linksContainer}>
              <View style={styles.listproject}>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>Hermanos</Text>
                <Pressable
                  onPress={() => Linking.openURL('https://github.com/FiqriAulia/project-papb-2024')}
                >
                  <Image
                    source={require('@/assets/images/hermanoss.png')}
                    style={styles.projectImage} />
                </Pressable>
              </View>

              <View style={styles.listproject}>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>Doktorpc</Text>
                <Pressable
                  onPress={() => Linking.openURL('https://github.com/NaufalArsa/DoctorPC')}
                >
                  <Image
                    source={require('@/assets/images/doktorpc.png')}
                    style={styles.projectImage} />
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.linksContainer}>
            <Pressable
              style={styles.linkButton}
              onPress={() => Linking.openURL('https://github.com/arvinhendro45')}
            >
              <Text style={styles.linkText}>GitHub</Text>
            </Pressable>
            <Pressable
              style={styles.linkButton}
              onPress={() => Linking.openURL('https://linkedin.com/in/arvin-hendro')}
            >
              <Text style={styles.linkText}>LinkedIn</Text>
            </Pressable>
            <Pressable
              style={styles.linkButton}
              onPress={() => Linking.openURL('https://arvinhendro.vercel.app')}
            >
              <Text style={styles.linkText}>Portfolio</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView></>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 16,
    color: '#FDFFFC',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#001514',
  },
  container: {
    alignItems: 'center',
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginTop: 16,
  },
  linkButton: {
    backgroundColor: '#FDFFFC',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  linkText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewcontainer: {
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nameprofile: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#FDFFFC',
  },
  projectImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    // marginVertical: 10,
  },
  listproject:{
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'center',
  }
});
