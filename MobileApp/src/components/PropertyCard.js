import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function PropertyCard({ property }) {
  const handleEmail = () => {
    Linking.openURL(`mailto:info@example.com?subject=Inquiry about ${property.title}`);
  };

  const handleCall = () => {
    Linking.openURL(`tel:${property.phone || '0123456789'}`);
  };

  return (
    <View style={styles.card}>
      <Image source={property.image} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title}>{property.title}</Text>
        <Text style={styles.location}>Location: {property.location}</Text>
        <View style={styles.detailsRow}>
          <Text style={styles.detail}>Bedrooms: {property.bedrooms}</Text>
          <Text style={styles.detail}>Bathrooms: {property.bathrooms}</Text>
          <Text style={styles.detail}>Area: {property.area} sqft</Text>
        </View>
        <Text style={styles.price}>৳ {property.price.toLocaleString()}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.emailButton} onPress={handleEmail}>
            <Text style={styles.buttonText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.callButton} onPress={handleCall}>
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  detail: {
    fontSize: 13,
    color: '#444',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008060',
    marginBottom: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  emailButton: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 8,
  },
  callButton: {
    backgroundColor: '#28a745',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
