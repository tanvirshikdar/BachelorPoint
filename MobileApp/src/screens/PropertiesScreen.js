import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';

const property1 = require('../assets/images/property1.jpg');
const property2 = require('../assets/images/property2.jpg');
const property3 = require('../assets/images/property3.jpg');

const sampleProperties = [
  {
    id: '1',
    title: 'An Exemplary Flat For You Near NCC Bank Limited',
    location: 'Block B, Bashundhara R-A',
    bedrooms: 3,
    bathrooms: 3,
    area: 2290,
    price: 22500000,
    image: property1,
  },
  {
    id: '2',
    title: 'Beautiful Apartment of 1695 SQ FT Located in Block F',
    location: 'Block F, Bashundhara R-A',
    bedrooms: 3,
    bathrooms: 3,
    area: 1695,
    price: 13500000,
    image: property2,
  },
  {
    id: '3',
    title: 'Spacious Condo with Modern Amenities in Block C',
    location: 'Block C, Bashundhara R-A',
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    price: 18000000,
    image: property3,
  },
];

export default function PropertiesScreen() {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [floorArea, setFloorArea] = useState('');
  const [properties, setProperties] = useState(sampleProperties);

  const handleSearch = () => {
    setProperties(sampleProperties.filter(p => {
      return (
        (!location || p.location.includes(location)) &&
        (!bedrooms || p.bedrooms === parseInt(bedrooms)) &&
        (!bathrooms || p.bathrooms === parseInt(bathrooms)) &&
        (!floorArea || p.area === parseInt(floorArea))
      );
    }));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.filterSection}>
        <TextInput
          style={styles.input}
          placeholder="Location (e.g., Bashundhara)"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Price Range (e.g., 1000000-2000000)"
          value={priceRange}
          onChangeText={setPriceRange}
        />
        <TextInput
          style={styles.input}
          placeholder="Bedrooms"
          value={bedrooms}
          keyboardType="numeric"
          onChangeText={setBedrooms}
        />
        <TextInput
          style={styles.input}
          placeholder="Bathrooms"
          value={bathrooms}
          keyboardType="numeric"
          onChangeText={setBathrooms}
        />
        <TextInput
          style={styles.input}
          placeholder="Floor Area (e.g., 1500)"
          value={floorArea}
          keyboardType="numeric"
          onChangeText={setFloorArea}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={properties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PropertyCard property={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterSection: {
    padding: 12,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  searchButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
