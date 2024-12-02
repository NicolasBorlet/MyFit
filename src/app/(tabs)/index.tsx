import Base from '@/assets/images/base';
import '../../../global.css';
import { ScrollView, View, Text } from 'react-native';

export default function HomeScreen() {
  dateWithoutYear = new Date().toLocaleDateString('en-US', {
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
      <View className='flex-1'>
        <Base />
      </View>
      <View>
        <Text>Today, {dateWithoutYear}</Text>
        <Text>Your activities</Text>
      </View>
    </ScrollView>
  );
}
