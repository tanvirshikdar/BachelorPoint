import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);
  if (!user || !user.user) return null;
  const { firstName, lastName, email, phoneNumber, role } = user.user;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {firstName} {lastName}</Text>
      <Text style={styles.info}>Role: {role.charAt(0).toUpperCase() + role.slice(1)}</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Phone: {phoneNumber}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
        logout();
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      }}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
