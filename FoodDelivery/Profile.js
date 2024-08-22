import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from './ThemeContext';
import { FormContext } from './FormContext';

const colors = {
  black: '#000000',
  white: '#ffffff',
  blue: '#6CB4EE',
  green: '#4CBB17',
  purple: '#6200EE',
  pink: '#FF69B4',
};

export default function Profile() {
  const { theme, updateTheme } = useTheme();
  const { formData } = useContext(FormContext);
  const [selectedTextColor, setSelectedTextColor] = useState(theme.textColor);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(theme.backgroundColor);

  const handleTextColorChange = (value) => {
    setSelectedTextColor(value);
    updateTheme({ textColor: value });
  };

  const handleBackgroundColorChange = (value) => {
    setSelectedBackgroundColor(value);
    updateTheme({ backgroundColor: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.title, { color: theme.textColor }]}>Profile Information</Text>

        <View style={styles.infoContainer}>
          {Object.entries(formData).map(([key, value]) => (
            <Text key={key} style={[styles.info, { color: theme.textColor }]}>
              {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
            </Text>
          ))}
        </View>

        <View style={styles.pickerSection}>
          <View style={styles.pickerContainer}>
            <Text style={[styles.label, { color: theme.textColor }]}>Select Text Color</Text>
            <Picker
              selectedValue={selectedTextColor}
              style={[styles.picker, { color: theme.textColor, borderColor: theme.textColor }]}
              onValueChange={(itemValue) => handleTextColorChange(itemValue)}
            >
              {Object.entries(colors).map(([colorName, colorValue]) => (
                <Picker.Item key={colorName} label={colorName} value={colorValue} />
              ))}
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Text style={[styles.label, { color: theme.textColor }]}>Select Background Color</Text>
            <Picker
              selectedValue={selectedBackgroundColor}
              style={[styles.picker, { color: theme.textColor, borderColor: theme.textColor }]}
              onValueChange={(itemValue) => handleBackgroundColorChange(itemValue)}
            >
              {Object.entries(colors).map(([colorName, colorValue]) => (
                <Picker.Item key={colorName} label={colorName} value={colorValue} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: '600',
  },
  info: {
    fontSize: 22,
    marginBottom: 5,
  },
  infoContainer: {
    marginBottom: 30,
  },
  pickerSection: {
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
});
