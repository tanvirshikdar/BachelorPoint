import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import RoommateCard from '../components/RoommateCard';

const roommate1 = require('../assets/images/roommate1.jpg');
const roommate2 = require('../assets/images/roommate2.jpg');
const roommate3 = require('../assets/images/roommate3.jpg');

const sampleRoommates = [
  {
    id: '1',
    name: 'Roommate 1',
    budget: '8,000 BDT/month',
    location: 'Gulshan',
    image: roommate1,
    email: 'roommate1@example.com',
  },
  {
    id: '2',
    name: 'Roommate 2',
    budget: '10,000 BDT/month',
    location: 'Banani',
    image: roommate2,
    email: 'roommate2@example.com',
  },
  {
    id: '3',
    name: 'Roommate 3',
    budget: '12,000 BDT/month',
    location: 'Dhanmondi',
    image: roommate3,
    email: 'roommate3@example.com',
  },
];

export default function RoommateMatchingScreen() {
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [roommates, setRoommates] = useState(sampleRoommates);

  const handleFindRoommates = () => {
    // Filtering logic can be implemented here
    setRoommates(sampleRoommates.filter(r => {
      return (
        (!budget || r.budget.includes(budget)) &&
        (!location || r.location.toLowerCase().includes(location.toLowerCase())) &&
        (!gender || gender === 'any' || !gender) // Gender not in sample data
      );
    }));
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={roommates}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RoommateCard roommate={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListHeaderComponent={
          <>
            <View style={styles.prefSection}>
              <Text style={styles.sectionTitle}>Enter Preferences</Text>
              <TextInput
                style={styles.input}
                placeholder="Budget (e.g., 5000-10000 BDT)"
                value={budget}
                onChangeText={setBudget}
              />
              <TextInput
                style={styles.input}
                placeholder="Preferred Location (e.g., Gulshan, Banani)"
                value={location}
                onChangeText={setLocation}
              />
              <ModalSelector
                  data={[
                    { key: '', label: 'Gender Preference' },
                    { key: 'male', label: 'Male' },
                    { key: 'female', label: 'Female' },
                    { key: 'any', label: 'Any' },
                  ]}
                  initValue="Gender Preference"
                  accessible={true}
                  keyExtractor={item => item.key}
                  labelExtractor={item => item.label}
                  onChange={option => setGender(option.key)}
                  style={{flex: 1}}
                  optionContainerStyle={styles.optionContainer}
                  optionTextStyle={styles.optionText}
                  selectedKey={gender}
                  selectStyle={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 6,
                    backgroundColor: '#fff',
                    paddingHorizontal: 10,
                    height: 40,
                    justifyContent: 'center',
                    fontSize: 16,
                    marginBottom: 0,
                  }}
                  selectTextStyle={gender ? styles.selectTextStyle : styles.placeholderTextStyle}
                  cancelText="Cancel"
                  value={gender ? gender.charAt(0).toUpperCase() + gender.slice(1) : 'Gender Preference'}
                />
                <Ionicons name="chevron-down" size={22} color="#888" style={styles.dropdownIcon} pointerEvents="none" />
              <TouchableOpacity style={styles.findButton} onPress={handleFindRoommates}>
                <Text style={styles.findButtonText}>Find Roommates</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.matchedSection}>
              <Text style={styles.sectionTitle}>Matched Roommates</Text>
            </View>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  prefSection: {
    padding: 16,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 10,
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
  findButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  },
  findButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  matchedSection: {
    padding: 16,
  },

  dropdownWrapper: {
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 8,
  },
  dropdownIcon: {
    position: 'absolute',
    right: 16,
    top: 9,
    zIndex: 2,
    pointerEvents: 'none',
  },
  selectStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 40,
    justifyContent: 'center',
    marginBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectTextStyle: {
    color: '#222',
    fontSize: 16,
  },
  placeholderTextStyle: {
    color: '#888',
    fontSize: 16,
  },
  selectTextStyle: {
    color: '#222',
    fontSize: 16,
  },
  optionContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 40,
    marginHorizontal: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  optionText: {
    color: '#222',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
