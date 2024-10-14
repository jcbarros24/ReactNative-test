import { FlatList } from "react-native";
import { styles } from "./styles";
import { Category } from "../category";
import { categories } from "@/utils/categories";

export default function Categories(){
    return(
        <FlatList 
            data={categories} //dados
            keyExtractor={(item) => item.id} //a chave (id)
            renderItem={({item}) =>
                <Category 
                    name={item.name} 
                    icon={item.icon} 
                    isSelected={false} 
                />} //o tipo de dado que queremos renderizar
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />        
    );
}