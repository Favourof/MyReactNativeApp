import { Link } from "expo-router";
import {  Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function Page() {
  return (
 
      <View className="flex-1 items-center justify-center bg-white" >
        <Text className= 'text-3xl font-bold'>Hello!</Text>
        <StatusBar />
       <Link href='/Profile'  style={{color: 'blue'}}>go to profile</Link>
      

      </View>
   
  );
}


