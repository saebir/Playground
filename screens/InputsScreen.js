import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from '../styles/sharedStyles';

export default function InputsScreen({ navigation }) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleBirthDateChange = (text) => {
    const cleaned = text.replace(/\D/g, '').slice(0, 8);

    let day = cleaned.slice(0, 2);
    let month = cleaned.slice(2, 4);
    let year = cleaned.slice(4, 8);

    // Valider dag
    if (day.length === 2) {
      const dayNum = parseInt(day, 10);
      if (dayNum > 31) day = '31';
      else if (dayNum === 0) day = '01';
    }

    // Valider måned
    if (month.length === 2) {
      const monthNum = parseInt(month, 10);
      if (monthNum > 12) month = '12';
      else if (monthNum === 0) month = '01';
    }

    // Valider år kun når 4 cifre er tastet
    if (year.length === 4) {
      const currentYear = new Date().getFullYear();
      const yearNum = parseInt(year, 10);

      if (yearNum > currentYear) year = currentYear.toString();
      else if (yearNum < currentYear - 120) year = (currentYear - 120).toString();
    }

    // Sæt sammen
    let formatted = '';
    if (day.length) formatted += day;
    if (month.length) formatted += '-' + month;
    if (year.length) formatted += '-' + year;

    setBirthDate(formatted);
  };

  const handleEmailChange = (text) => {
    setEmail(text);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text.length === 0 || emailRegex.test(text)) {
      setEmailError('');
    } else {
      setEmailError('Ugyldig email-adresse');
    }
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fdf6f0' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.backText}>Tilbage</Text>
            </TouchableOpacity>

            <ScrollView
              contentContainerStyle={[styles.formContainer, { paddingTop: 40, paddingBottom: 60 }]}
              keyboardShouldPersistTaps="handled"
            >
              <Text>Indtast dit navn:</Text>
              <TextInput
                placeholder="Skriv fornvn og efternavn"
                value={name}
                onChangeText={setName}
                style={[
                  styles.input,
                  {
                    borderColor: '#e67000',
                    backgroundColor: '#fffbe6',
                    borderRadius: 12,
                    paddingLeft: 15,
                  },
                ]}
              />
              <Text>Hej, {name || 'ven'}!</Text>

              <Text style={{ marginTop: 20 }}>Email:</Text>
              <TextInput
                placeholder="din@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={handleEmailChange}
                style={[
                  styles.input,
                  {
                    borderColor: emailError ? '#e74c3c' : '#4a90e2',
                    backgroundColor: '#e6f0fa',
                    borderRadius: 10,
                  },
                ]}
              />
              {emailError ? (
                <Text style={{ color: '#e74c3c', marginTop: 5 }}>{emailError}</Text>
              ) : null}


              <Text style={{ marginTop: 20 }}>Telefonnummer:</Text>
              <TextInput
                placeholder="12345678"
                keyboardType="numeric"
                maxLength={8}
                style={[
                  styles.input,
                  {
                    borderColor: '#27ae60',
                    backgroundColor: '#eafaf1',
                    borderStyle: 'dashed',
                  },
                ]}
              />

              <Text style={{ marginTop: 20 }}>Fødselsdato:</Text>
              <TextInput
                placeholder="dd-mm-åååå"
                keyboardType="numeric"
                value={birthDate}
                onChangeText={handleBirthDateChange}
                style={[
                  styles.input,
                  {
                    borderColor: '#8e44ad',
                    borderWidth: 2,
                    borderRadius: 0,
                    backgroundColor: '#f5eaf7',
                  },
                ]}
              />


              <Text style={{ marginTop: 20 }}>Besked:</Text>
              <TextInput
                placeholder="Skriv en besked..."
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                style={[
                  styles.input,
                  {
                    height: 100,
                    borderColor: '#c0392b',
                    backgroundColor: '#fdecea',
                    fontStyle: 'italic',
                    padding: 15,
                  },
                ]}
              />
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
