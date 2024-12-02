import { useWindowDimensions } from 'react-native';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const AnimatedStop = Animated.createAnimatedComponent(Stop);

export default function Base({ scrollProgress }: any) {
    const screenWidth = useWindowDimensions().width

    const pathData = `M0 0H${screenWidth}V139H${screenWidth * 0.786}L${screenWidth * 0.648} 153.251L${screenWidth * 0.637} 155.935L${screenWidth * 0.361} 155.648L${screenWidth * 0.352} 153.538L${screenWidth * 0.213} 139H0V0Z`;

    return (
        <AnimatedSvg 
            width={screenWidth} 
            height="171" 
            viewBox={`0 0 ${screenWidth} 171`} 
            fill="none"
        >
            <Path 
                opacity="0.2" 
                d={pathData} 
                fill="url(#paint0_radial_57_11166)"
            />
            <Defs>
                <RadialGradient 
                    id="paint0_radial_57_11166" 
                    cx="0" 
                    cy="0" 
                    r="1" 
                    gradientUnits="userSpaceOnUse" 
                    gradientTransform={`translate(${screenWidth/2} 176.394) rotate(89.538) scale(156.924 ${screenWidth * 0.839})`}
                >
                    <AnimatedStop stopColor="#F15223" offset="0" />
                    <AnimatedStop 
                        stopColor="white" 
                        offset="1"
                        stopOpacity={scrollProgress}
                    />
                </RadialGradient>
            </Defs>
        </AnimatedSvg>
    )
}