import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BCSP Program</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>

      <View style={styles.cardContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardText}>{feature.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const features = [
  { title: 'item 1', description: 'Text' },
  { title: 'item 2', description: 'Text' },
  { title: 'item 3', description: 'Text' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40, 
  },
  title: {
    color: '#FFA500',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#1E3A8A',
    padding: 16,
    margin: 8,
    borderRadius: 10,
    width: 160,
  },
  cardTitle: {
    color: '#FFA500',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 16,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonPrimary: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonSecondary: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
