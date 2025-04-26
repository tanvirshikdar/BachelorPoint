// src/components/Footer.js
import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.copyright}>© 2024 BachelorPoint. All Rights Reserved.</Text>
      <View style={styles.socialLinks}>
        <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/')}> 
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/')}> 
          <FontAwesome name="instagram" size={24} color="#C13584" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white',
    paddingVertical: 12,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    width: '100%',
  },
  copyright: {
    color: '#222',
    fontSize: 14,
    marginBottom: 6,
  },
  socialLinks: {
    flexDirection: 'row',
    gap: 16,
  },
});
