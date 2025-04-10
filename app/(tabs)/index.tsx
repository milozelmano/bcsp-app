import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.scrollWrapper} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BCSP Program</Text>
      </View>

      <Image source={require('../../assets/images/BCSP_Logo-2.png')} style={styles.logo} />

      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          theme={{
            backgroundColor: '#5DD0FF',
            calendarBackground: '#5DD0FF',
            textSectionTitleColor: '#FF8E00',
            selectedDayBackgroundColor: '#036CFB',
            selectedDayTextColor: '#FFFFFF',
            todayTextColor: '#FF8E00',
            dayTextColor: '#000000',
            arrowColor: '#FF8E00',
            monthTextColor: '#FF8E00',
            textDayFontWeight: 'bold',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14,
          }}
        />
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
  { title: 'Item 1', description: 'Text' },
  { title: 'Item 2', description: 'Text' },
  { title: 'Item 3', description: 'Text' },
  { title: 'Item 4', description: 'Text' },
];

const styles = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: '#5DD0FF',
    padding: 20,
    paddingBottom: 40,
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
  calendarContainer: {
    marginVertical: 20,
  },
  calendar: {
    borderRadius: 10,
    padding: 10,
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
