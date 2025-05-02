import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
     className="flex-1 justify-center items-center">

      <Text className="text-5xl text-primary 
      font-bold">Edit app/index.tsx to edit this screen.</Text>
      <Text>Open up app/index.tsx to start working on your app!</Text>

      {/* <Link href="/onboarding"> OnBording </Link> */}
{/* 
      <Link href="/movie/avange"> Movie </Link>
      <Link href="/movie/2"> movie-2 </Link> */}
    
    
    </View>
  );
}
