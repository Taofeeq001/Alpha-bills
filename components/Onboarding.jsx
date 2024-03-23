import { Text, TouchableOpacity, View, Image, } from 'react-native';
import Swiper from 'react-native-swiper'


export default function Onboarding({navigation}) {

  // const images = [
  //   require("./assets/onboard.png"),
  //   require("./assets/onboard2.png"),
  //   require("./assets/onboard3.png"),
  //   // require("./assets/onboard4.png")
  // ];
  return (
    <View className="flex flex-col w-full h-screen">
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        className="py-[10%]">
        <View className="flex flex-col justify-center items-center ">
          <Image source={require("../assets/onboard.png")} />
          <Text className="text-2xl font-bold text-center">Never miss a moment and strengthen your bonds</Text>
          <Text className="capitalize text-center mt-3">allowing you to connect with your loved ones effortlessly, whether through calls, messages, or social media.</Text>
        </View>
        <View>
          <Image source={require("../assets/onboard2.png")} />
          <Text className="text-2xl font-bold text-center">Stay Connected, Anytime, Anywhere!</Text>
          <Text className="capitalize text-center mt-3">Discover how our app enables you to effortlessly buy data, airtime, and more, ensuring you can always stay in touch with family and friends.</Text>
        </View>
        <View>
          <Image source={require("../assets/onboard3.png")} />
          <Text className="text-2xl font-bold text-center">Uninterrupted Connectivity, Unrestricted Potential</Text>
          <Text className="capitalize text-center mt-3">Our app offers a seamless platform to effortlessly access the internet, ensuring you stay connected to the digital world around you, without any limits or interruptions.</Text>
        </View>
      </Swiper>
      <View className="flex flex-row w-full justify-around">
        <TouchableOpacity onPress={()=> navigation.navigate("Login")} className="py-2 px-6 border rounded-lg"><Text>Sign In</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')} className="py-2 px-6 border-blue-900 bg-blue-900 rounded-lg ">
          <Text className="text-white">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

