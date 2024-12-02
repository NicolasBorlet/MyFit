import { useWindowDimensions } from 'react-native';
import Svg, { Defs, Path, RadialGradient, Stop } from 'react-native-svg';

export default function Base() {
    const screenWidth = useWindowDimensions().width

    return (
        <Svg width={screenWidth} height="227" viewBox={`0 0 ${screenWidth} 187`} fill="none">
            <Path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d={`M0 0H${screenWidth}V139H${screenWidth * 0.786}C${screenWidth * 0.737} 139 ${screenWidth * 0.69} 143.926 ${screenWidth * 0.648} 153.251L${screenWidth * 0.637} 155.935C${screenWidth * 0.552} 175.039 ${screenWidth * 0.446} 174.928 ${screenWidth * 0.361} 155.648L${screenWidth * 0.352} 153.538C${screenWidth * 0.31} 144.029 ${screenWidth * 0.262} 139 ${screenWidth * 0.213} 139H0V0Z`} fill="url(#paint0_radial_57_11166)"/>
            <Defs>
            <RadialGradient id="paint0_radial_57_11166" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform={`translate(${screenWidth/2} 176.394) rotate(89.538) scale(156.924 ${screenWidth * 0.839})`}>
            <Stop stopColor="#F15223"/>
            <Stop offset="1" stopColor="white"/>
            </RadialGradient>
            </Defs>
        </Svg>
    )
}