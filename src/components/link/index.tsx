import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { sytles } from "./styles";
import { colors } from "@/styles/colors";

type Props = {
    name: string,
    url: string,
    onDetails: () => void
}

export function Link({name, url, onDetails} : Props) {
    return(
        <View style={sytles.container}>
            <View style={sytles.details}>
                <Text style={sytles.name} numberOfLines={1}>
                    {name}
                </Text>
                <Text style={sytles.url} numberOfLines={1}>
                    {url}
                </Text>

                <TouchableOpacity onPress={onDetails}>
                    <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}