import { styles } from "@/style";
import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";

export const DateList = () => {
    const [activeDay, setActiveDay] = useState(new Date());
    const dates = Array.from({ length: 7 }, (_, index) => {
        const date = new Date(activeDay);
        date.setDate(activeDay.getDate() + (index - 3));
        return date;
    });

    return (
    <View style={styles.dateList}>
        {dates.map((date, index) => {
            const isActive = date.toDateString() === activeDay.toDateString();
            return (
                <TouchableOpacity 
                    key={index} 
                    onPress={() => setActiveDay(date)}
                >
                    <Text style={[styles.headline06, {
                        fontWeight: isActive ? 'bold' : 'normal',
                    }]}>
                        {date.toLocaleDateString('fr-FR', { 
                            day: 'numeric',
                            ...(isActive && { month: 'short' })
                        })}
                    </Text>
                </TouchableOpacity>
            );
        })}
    </View>
    );
};