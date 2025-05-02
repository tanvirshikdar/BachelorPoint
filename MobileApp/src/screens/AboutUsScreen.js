// src/screens/AboutUsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function AboutUsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.heading}>Our Mission</Text>
        <Text style={styles.paragraph}>
          At BachelorPoint, our mission is to provide affordable, flexible, and quality rental properties for bachelors. We understand the challenges of finding a comfortable and affordable living space, especially when you are new to the city or living alone. That's why we have built a platform that simplifies this process, giving you access to the best properties suited for your needs.
        </Text>
        <Text style={styles.paragraph}>
          Whether you're a student, a young professional, or simply someone looking for a suitable living environment, our goal is to bring you a wide range of properties, modern amenities, and reliable support, all at your fingertips.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 18,
    textAlign: 'center',
    alignSelf: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    marginBottom: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
});
