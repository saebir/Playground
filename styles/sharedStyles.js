import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    //
    // === Layout og overflade ===
    //
    container: {
        padding: 20,
        gap: 20,
    },
    formContainer: {
        padding: 20,
        gap: 20,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 60,
    },
    section: {
        marginBottom: 20,
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginBottom: 20,
    },
    dividerStrong: {
        height: 2,
        backgroundColor: '#e67000',
        width: '60%',
        alignSelf: 'center',
        marginVertical: 12,
    },
    header: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fdf6f0',
        alignItems: 'center',
    },

    //
    // === Tekst ===
    //
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e67000',
        textAlign: 'center',
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    backText: {
        fontSize: 16,
        color: '#e67000',
        fontWeight: '600',
    },
    btnText: {
        color: '#333',
        fontSize: 16,
    },
    shadowButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    gradientButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    outlineButtonText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
    },
    emoji: {
        fontSize: 24,
    },

    //
    // === Knapper ===
    //
    backButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    btn: {
        borderWidth: 1,
        borderColor: '#333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 20,
    },
    shadowButton: {
        backgroundColor: '#4a90e2',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    gradientButton: {
        backgroundColor: '#ff9966',
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#ff5e62',
    },
    outlineButton: {
        borderWidth: 2,
        borderColor: '#333',
        paddingVertical: 12,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    emojiButton: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 50,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: 58,
        height: 58,
    },
    emojiRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginTop: 10,
    },

    //
    // === Inputfelter ===
    //
    input: {
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        marginBottom: 20,
    },
});
