import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import styles from '../styles/sharedStyles';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fdf6f0' }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Playground</Text>
                    <Text style={styles.subtitle}>Hvad kan man lave og hvordan kan det se ud!?</Text>
                    <Button title="Knapper" onPress={() => navigation.navigate('Knapper')} />
                    <View style={styles.dividerStrong} />
                    <Button title="Inputfelter" onPress={() => navigation.navigate('Inputfelter')} />
                        <View style={styles.dividerStrong} />
                    <Button title="Adgangskode" onPress={() => navigation.navigate('Adgangskode')} />
                        <View style={styles.dividerStrong} />
                    <Button title="Andet" onPress={() => navigation.navigate('Andet')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


