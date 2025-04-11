import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function HomeScreen() {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const today = new Date().toISOString().split('T')[0];

  const events: { [key: string]: string } = {
    '2025-04-10': 'Example Event 1',
    '2025-04-15': 'Example Event 2',
  };

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  const getMarkedDates = () => {
    const markedDates: { [key: string]: any } = {};

    Object.keys(events).forEach(date => {
      markedDates[date] = {
        marked: true,
        dotColor: '#FF8E00',
        selected: selectedDate === date,
        selectedColor: '#036CFB',
        selectedTextColor: '#FFFFFF',
      };
    });

    if (selectedDate && !events[selectedDate]) {
      markedDates[selectedDate] = {
        selected: true,
        selectedColor: '#036CFB',
        selectedTextColor: '#FFFFFF',
      };
    }

    if (!markedDates[today]) markedDates[today] = {};

    markedDates[today] = {
      ...markedDates[today],
      customStyles: {
        container: {
          backgroundColor: '#FF8E00',
          borderRadius: 50,
        },
        text: {
          color: '#FFFFFF',
        },
      },
    };

    if (selectedDate && !markedDates[selectedDate]) {
      markedDates[selectedDate] = {
        selected: true,
        selectedColor: '#036CFB',
        selectedTextColor: '#FFFFFF',
      };
    }

    return markedDates;
  };

  return (
    <ScrollView style={styles.scrollWrapper} contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BCSP Program</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          markedDates={getMarkedDates()}
          onDayPress={handleDayPress}
          markingType={'custom'}
          theme={{
            backgroundColor: '#5DD0FF',
            calendarBackground: '#5DD0FF',
            textSectionTitleColor: '#FF8E00',
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

      <View style={styles.eventContainer}>
        {selectedDate && events[selectedDate] ? (
          <View style={styles.eventDetails}>
            <Text style={styles.eventText}>Event for {selectedDate}:</Text>
            <Text style={styles.eventDescription}>{events[selectedDate]}</Text>
          </View>
        ) : (
          <Text style={styles.placeholderText}>Nothing to do today.</Text>
        )}
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
  calendarContainer: {
    marginVertical: 20,
  },
  calendar: {
    borderRadius: 10,
    padding: 10,
  },
  eventContainer: {
    marginVertical: 20,
  },
  eventDetails: {
    backgroundColor: '#036CFB',
    padding: 10,
    borderRadius: 10,
  },
  eventText: {
    color: '#FF8E00',
    fontWeight: 'bold',
  },
  eventDescription: {
    color: '#FFFFFF',
  },
  placeholderText: {
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
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
