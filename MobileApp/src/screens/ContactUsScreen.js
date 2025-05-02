// src/screens/ContactUsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header';

export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Contact Form Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Get in Touch</Text>
            <View style={styles.form}>
              <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor="#aaa" />
              <TextInput style={styles.input} placeholder="Your Email" placeholderTextColor="#aaa" keyboardType="email-address" />
              <TextInput style={[styles.input, styles.textarea]} placeholder="Your Message" placeholderTextColor="#aaa" multiline numberOfLines={4} textAlignVertical="top" />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Team Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Meet the Team</Text>
            <View style={styles.teamContainer}>
              {/* Team Member 1 */}
              <View style={styles.teamMember}>
                <Image source={require('../assets/images/developer.jpg')} style={styles.avatar} />
                <Text style={styles.memberName}>Tanvir Shikdar</Text>
                <Text style={styles.role}>Developer</Text>
                <Text style={styles.details}>Computer Science & Engineering</Text>
                <Text style={styles.details}>North South University</Text>
              </View>
              {/* Team Member 2 */}
              <View style={styles.teamMember}>
                <Image source={require('../assets/images/tester.jpg')} style={styles.avatar} />
                <Text style={styles.memberName}>Sheik Hasan</Text>
                <Text style={styles.role}>Tester</Text>
                <Text style={styles.details}>Computer Science & Engineering</Text>
                <Text style={styles.details}>North South University</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#222',
  },
  textarea: {
    height: 90,
    paddingTop: 12,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 6,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  teamMember: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    padding: 16,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2,
    textAlign: 'center',
  },
  role: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 2,
    textAlign: 'center',
  },
  details: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
  },
});
