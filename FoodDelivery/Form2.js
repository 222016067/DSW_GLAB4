import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { FormContext } from './FormContext';

export default function Form2({ navigation }) {
  const { formData, updateFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
      valid = false;
    }

    if (!formData.zip.trim() || formData.zip.length < 4) {
      newErrors.zip = 'Valid zip code is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validate()) {
      navigation.navigate('Form3');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Address Information</Text>

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, errors.address && styles.inputError]}
          value={formData.address}
          onChangeText={(value) => updateFormData({ address: value })}
          placeholder="Enter your address"
        />
        {errors.address && <Text style={styles.error}>{errors.address}</Text>}

        <Text style={styles.label}>City</Text>
        <TextInput
          style={[styles.input, errors.city && styles.inputError]}
          value={formData.city}
          onChangeText={(value) => updateFormData({ city: value })}
          placeholder="Enter your city"
        />
        {errors.city && <Text style={styles.error}>{errors.city}</Text>}

        <Text style={styles.label}>State</Text>
        <TextInput
          style={[styles.input, errors.state && styles.inputError]}
          value={formData.state}
          onChangeText={(value) => updateFormData({ state: value })}
          placeholder="Enter your state"
        />
        {errors.state && <Text style={styles.error}>{errors.state}</Text>}

        <Text style={styles.label}>Zip Code</Text>
        <TextInput
          style={[styles.input, errors.zip && styles.inputError]}
          value={formData.zip}
          onChangeText={(value) => updateFormData({ zip: value })}
          placeholder="Enter your zip code"
          keyboardType="numeric"
        />
        {errors.zip && <Text style={styles.error}>{errors.zip}</Text>}

        <Button title="Next" onPress={handleNext} color="#6200EE" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#6200EE',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 15,
    fontSize: 14,
  },
});
