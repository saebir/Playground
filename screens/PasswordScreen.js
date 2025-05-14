import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../styles/sharedStyles';

export default function PasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [secureConfirm, setSecureConfirm] = useState(true);

  const getPasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { label: 'Svag', color: 'red' };
    if (strength === 3 || strength === 4) return { label: 'Middel', color: 'orange' };
    return { label: 'Stærk', color: 'green' };
  };

  const passwordRequirements = [
    { label: 'Min. 8 tegn', valid: password.length >= 8 },
    { label: 'Mindst ét stort bogstav', valid: /[A-Z]/.test(password) },
    { label: 'Mindst ét lille bogstav', valid: /[a-z]/.test(password) },
    { label: 'Mindst ét tal', valid: /\d/.test(password) },
    { label: 'Mindst ét specialtegn (!@#$%^&)', valid: /[^A-Za-z0-9]/.test(password) },
  ];

  const commonPasswords = ['123456', 'password', '12345678', 'admin', 'qwerty'];
  const isCommonPassword = commonPasswords.includes(password);
  const passwordsMatch = password === confirmPassword;
  const strength = getPasswordStrength();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fdf6f0' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Tilbage</Text>
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.formContainer}>
          <Text>Adgangskode:</Text>
          <TextInput
            placeholder="Adgangskode"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secure}
            style={[styles.input, { marginBottom: 10 }]}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Text style={{ color: '#e67000', marginBottom: 10 }}>
              {secure ? 'Vis adgangskode' : 'Skjul adgangskode'}
            </Text>
          </TouchableOpacity>

          {isCommonPassword && (
            <Text style={{ color: 'red', marginBottom: 5 }}>
              Denne adgangskode er for almindelig og usikker.
            </Text>
          )}

          <Text style={{ marginBottom: 5 }}>
            Styrke: <Text style={{ color: strength.color }}>{strength.label}</Text>
          </Text>
          <View style={{ height: 5, backgroundColor: strength.color, marginBottom: 20, borderRadius: 4 }} />

          <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Adgangskodekrav:</Text>
          {passwordRequirements.map((req, index) => (
            <Text
              key={index}
              style={{
                color: req.valid ? 'green' : '#999',
                marginBottom: 4,
              }}
            >
              {req.valid ? '✓' : '○'} {req.label}
            </Text>
          ))}

          <View style={{ marginTop: 30 }}>
            <Text>Gentag adgangskode:</Text>
            <TextInput
              placeholder="Gentag adgangskode"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={secureConfirm}
              style={[styles.input, { marginBottom: 10 }]}
            />
            <TouchableOpacity onPress={() => setSecureConfirm(!secureConfirm)}>
              <Text style={{ color: '#e67000' }}>
                {secureConfirm ? 'Vis adgangskode' : 'Skjul adgangskode'}
              </Text>
            </TouchableOpacity>

            {!passwordsMatch && confirmPassword.length > 0 && (
              <Text style={{ color: 'red', marginTop: 10 }}>
                Adgangskoderne matcher ikke.
              </Text>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
