import React from 'react';
import {
  View, Text, Button, StyleSheet, SafeAreaView, ScrollView, Alert, TouchableOpacity,
} from 'react-native';
import DropdownButton from '../components/DropdownButton';
import {
  emojiButtons, dropdownOptions, regularButtons, fancyButtons,
} from '../data/buttonsData';
import styles from '../styles/sharedStyles';

export default function ButtonsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fdf6f0' }}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Tilbage</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Knapper</Text>
      </View>

      <View style={styles.dividerStrong} />

      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Almindelige knapper</Text>
          <View style={styles.divider} />

          {regularButtons.map((btn, index) => {
            if (btn.native) {
              return (
                <View key={index} style={{ alignItems: 'center' }}>
                  <Button title={btn.label} onPress={() => Alert.alert(btn.alertText)} />
                </View>
              );
            }

            return (
              <TouchableOpacity
                key={index}
                style={btn.type === 'outlined' ? styles.btn : null}
                onPress={() => Alert.alert(btn.alertText)}
              >
                <Text style={styles.btnText}>{btn.label}</Text>
              </TouchableOpacity>
            );
          })}

        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Flotte knapper!</Text>
          <View style={styles.divider} />

          {fancyButtons.map((btn, index) => {
            let buttonStyle;
            let textStyle;

            switch (btn.style) {
              case 'shadow':
                buttonStyle = styles.shadowButton;
                textStyle = styles.shadowButtonText;
                break;
              case 'gradient':
                buttonStyle = styles.gradientButton;
                textStyle = styles.gradientButtonText;
                break;
              case 'outline':
                buttonStyle = styles.outlineButton;
                textStyle = styles.outlineButtonText;
                break;
              default:
                buttonStyle = styles.btn;
                textStyle = styles.btnText;
            }

            return (
              <TouchableOpacity key={index} style={buttonStyle} onPress={() => Alert.alert(btn.alertText)}>
                <Text style={textStyle}>{btn.label}</Text>
              </TouchableOpacity>
            );
          })}

        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Emoji knapper!</Text>
          <View style={styles.divider} />

          <View style={styles.emojiRow}>
            {emojiButtons.map((btn, index) => (
              <TouchableOpacity
                key={index}
                style={styles.emojiButton}
                onPress={() => Alert.alert(btn.alertText)}
              >
                <Text style={styles.emoji}>{btn.icon}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Dropdown knapper!</Text>
          <View style={styles.divider} />
          <DropdownButton label="Dropdown" options={dropdownOptions} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

