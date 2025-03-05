import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BCSP Program</Text>
      </View>

      <Image source={require('../../assets/images/BCSP_Logo-2.png')} style={styles.logo} />


      <View style={styles.cardContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardText}>{feature.description}</Text>
          </View>
        ))}``
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
  { title: 'Item 1', description: 'Text' },
  { title: 'Item 2', description: 'Text' },
  { title: 'Item 3', description: 'Text' },
  { title: 'Item 4', description: 'Text' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5DD0FF',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40, 
  },
  title: {
    color: '#FF8E00',
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 30,
  },
  logo: {
    width: 175,
    height: 175,
    alignSelf: 'center',
    marginVertical: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#036CFB',
    padding: 16,
    margin: 8,
    borderRadius: 10,
    width: 160,
  },
  cardTitle: {
    color: '#FF8E00',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 20,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonPrimary: {
    backgroundColor: '#FF8E00',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonSecondary: {
    backgroundColor: '#045BC1',
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
