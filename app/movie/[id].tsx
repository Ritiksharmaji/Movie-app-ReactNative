import { useLocalSearchParams } from "expo-router"
import { StyleSheet , Text, View} from "react-native"
import React from 'react'

const MovieDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <>
           <View>
           <Text className="text-5xl text-primary font-bold">Details</Text>
           <Text>Details {id}</Text> <Text className="text-5xl text-primary font-bold">Details</Text>
           </View>
        </>
    )
}
export default MovieDetails

const styles = StyleSheet.create({
});
