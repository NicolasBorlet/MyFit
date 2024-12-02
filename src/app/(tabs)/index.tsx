'use dom';

import Base from '@/assets/images/base';
import '../../../global.css';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { View } from 'react-native';

export default function HomeScreen() {
  const scrollProgress = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
          // Adjust these values based on when you want the animation to complete
          const progress = Math.min(event.contentOffset.y / 200, 1);
          scrollProgress.value = progress;
      },
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
    >
      <View className='flex-1'>
        <Base scrollProgress={scrollProgress} />
      </View>
      <h1 className="text-3xl font-bold underline text-orange">
        Hello world!
      </h1>
    </Animated.ScrollView>
  );
}
