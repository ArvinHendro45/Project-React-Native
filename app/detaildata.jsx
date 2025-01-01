import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

const Detail = () => {
  const router = useRouter();
  const { item } = useLocalSearchParams();
  const detailItem = JSON.parse(item); // Parse data item dari string ke object

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detail Data</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{detailItem.title}</Text>
        <Text style={styles.content}>{detailItem.body}</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001514',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#FDFFFC',
  },
  detailContainer: {
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
});
