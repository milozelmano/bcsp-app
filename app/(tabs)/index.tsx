import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function HomeScreen() {
  // Stores the currently selected date
  const [selectedDate, setSelectedDate] = useState<string>('');

  // Get today's date
  const today = new Date().toISOString().split('T')[0];

  // list of events with their dates
  const events: { [key: string]: string } = {
    '2025-04-10': 'Example Event 1',
    '2025-04-15': 'Example Event 2',
    '2025-04-20': 'Example Event 3',
    '2025-04-25': 'Example Event 4',
    '2025-04-30': 'Example Event 5',
  };

  // Updates selectedDate when a day is pressed on the calendar
  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  // Marks events and selected/today dates on the calendar
  const getMarkedDates = () => {
    const markedDates: { [key: string]: any } = {};

    // Add dots for event days
    Object.keys(events).forEach(date => {
      markedDates[date] = {
        marked: true,
        dotColor: '#FF8E00',
        selected: selectedDate === date,
        selectedColor: '#036CFB',
        selectedTextColor: '#FFFFFF',
      };
    });

    // Highlight selected date 
    if (selectedDate && !events[selectedDate]) {
      markedDates[selectedDate] = {
        selected: true,
        selectedColor: '#036CFB',
        selectedTextColor: '#FFFFFF',
      };
    }

    // Highlight today's date orange
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

    return markedDates;
  };

  // Gets the next 3 upcoming events
  const getUpcomingEvents = () => {
    const upcomingEvents = Object.keys(events)
      .filter(date => date > today)
      .sort()
      .slice(0, 3);

    return upcomingEvents.map(date => ({
      date,
      description: events[date],
    }));
  };

  const upcomingEvents = getUpcomingEvents();

  // Main layout
  return (
    <ScrollView style={styles.scrollWrapper} contentContainerStyle={styles.container}>
      {/* App Title */}
      <View style={styles.header}>
        <Text style={styles.title}>BCSP Program</Text>
      </View>

      {/* Calendar with marked dates */}
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

      {/* Upcoming Events List */}
      <View style={styles.upcomingEventsContainer}>
        <Text style={styles.upcomingEventsTitle}>Upcoming Events</Text>
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <View key={index} style={styles.eventCard}>
              <Text style={styles.eventDate}>{event.date}</Text>
              <Text style={styles.eventDescriptionCard}>{event.description}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noEventsText}>No upcoming events.</Text>
        )}
      </View>

      {/* Event Details for Selected Date */}
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

      {/* Buttons at the bottom */}
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

// App styling
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
  upcomingEventsContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  upcomingEventsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#036CFB',
    marginBottom: 10,
  },
  eventCard: {
    marginBottom: 10,
    backgroundColor: '#FF8E00',
    padding: 10,
    borderRadius: 8,
  },
  eventDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  eventDescriptionCard: {
    fontSize: 14,
    color: '#ffffff',
  },
  noEventsText: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
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
