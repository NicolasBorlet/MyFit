import Base from '@/assets/images/base';
import '../../../global.css';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { styles } from '@/style';
import { DateList } from '@/components/date-list';

export default function HomeScreen() {
  const dateWithoutYear = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <ScrollView
      scrollEventThrottle={16}
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
    >
      <Base />
      <View style={[styles.container, { marginBottom: 36 }]}>
        <Text style={styles.paragraph02}>Today, {dateWithoutYear}</Text>
        <Text style={styles.headline02}>Your activities</Text>
      </View>
      <DateList />
    </ScrollView>
  );
}

