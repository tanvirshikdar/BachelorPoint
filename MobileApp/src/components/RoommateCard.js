import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function RoommateCard({ roommate }) {
  const handleContact = () => {
    // You can customize the contact action (e.g., email, phone, etc.)
    if (roommate.email) {
      Linking.openURL(`mailto:${roommate.email}?subject=Roommate Inquiry`);
    } else if (roommate.phone) {
      Linking.openURL(`tel:${roommate.phone}`);
    }
  };

  return (
    <View style={styles.card}>
      <Image source={roommate.image} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={styles.name}><Text style={{fontWeight:'bold'}}>Name:</Text> {roommate.name}</Text>
        <Text style={styles.detail}><Text style={{fontWeight:'bold'}}>Budget:</Text> {roommate.budget}</Text>
        <Text style={styles.detail}><Text style={{fontWeight:'bold'}}>Preferred Location:</Text> {roommate.location}</Text>
      </View>
      <TouchableOpacity style={styles.contactButton} onPress={handleContact}>
        <Text style={styles.contactButtonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    marginBottom: 2,
    color: '#222',
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  contactButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
