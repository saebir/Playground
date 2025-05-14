// components/DropdownButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function DropdownButton({ label = 'Dropdown', options = [] }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (item) => {
    Alert.alert(`Du valgte: ${item}`);
    setOpen(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <View style={styles.smallBtn}>
          <Text style={styles.buttonText}>{label}</Text>
        </View>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdownContainer}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.dropdownText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  smallBtn: {
    backgroundColor: '#e67000',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e67000',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
  },
  dropdownContainer: {
    backgroundColor: 'rgba(230, 112, 0, 0.95)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginTop: 0,
  },
  dropdownItem: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingVertical: 12,
  },
  dropdownText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
