import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { FormContext } from './FormContext';

export default function Form3({ navigation }) {
  const { formData, updateFormData } = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.cardNumber.trim() || formData.cardNumber.length < 16 || formData.cardNumber.length > 16) {
      newErrors.cardNumber = 'Valid card number is required';
      valid = false;
    }

    if (!formData.expirationDate.trim() || formData.expirationDate.length < 5) {
      newErrors.expirationDate = 'Valid expiration date is required';
      valid = false;
    }

    if (!formData.cvv.trim() || formData.cvv.length < 3 || formData.cvv.length > 3) {
      newErrors.cvv = 'Valid CVV is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validate()) {
      navigation.navigate('MainTabs');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Payment Information</Text>

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={[styles.input, errors.cardNumber && styles.inputError]}
          value={formData.cardNumber}
          onChangeText={(value) => updateFormData({ cardNumber: value })}
          placeholder="Enter your card number"
          keyboardType="numeric"
        />
        {errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}

        <Text style={styles.label}>Expiration Date</Text>
        <TextInput
          style={[styles.input, errors.expirationDate && styles.inputError]}
          value={formData.expirationDate}
          onChangeText={(value) => updateFormData({ expirationDate: value })}
          placeholder="MM/YY"
        />
        {errors.expirationDate && <Text style={styles.error}>{errors.expirationDate}</Text>}

        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={[styles.input, errors.cvv && styles.inputError]}
          value={formData.cvv}
          onChangeText={(value) => updateFormData({ cvv: value })}
          placeholder="Enter your CVV"
          keyboardType="numeric"
        />
        {errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}

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
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
