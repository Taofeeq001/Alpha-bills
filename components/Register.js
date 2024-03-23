// import { useState } from 'react'
import { useState } from 'react'
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-vector-icons/AntDesign'

const Register = ({ navigation }) => {
    const [name, setName] = useState(null)


    return (
        <View className="h-screen w-full py-10 px-4">
            <View className="flex w-full items-end">
                <Image className="bg-gray-300 rounded-full" source={require("../assets/right.png")} />
            </View>
            <View className="flex flex-col gap-4 mt-10">
                <View className="px-4">
                    <Text className="capitalize font-bold text-2xl">Create an account</Text>
                    <Text className="capitalize text-black opacity-20 font-bold text-xs">tell us more about yourself</Text>
                </View>
                <View className="flex flex-col gap-4">
                    <TextInput className="border rounded-md p-2" placeholder='Full Name' />
                    <TextInput className="border rounded-md p-2" placeholder='Email Address' />
                    <TextInput className="border rounded-md p-2" placeholder='Password' />
                    <View className="flex">
                        <Text className="text-black opacity-40 font-bold">By signing up mean you’ve agree to our terms of services</Text>
                    </View>
                </View>
                <View className="px-4 w-full">
                    <TouchableOpacity className="w-full bg-[#0000FF] rounded-lg p-3  items-center">
                        <Text className="text-white text-2xl" >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="w-full flex items-center flex-row gap-4 justify-center mt-5">
                <TouchableOpacity className="bg-[#0000FF] p-3 w-[50px] items-center rounded-md">
                    <Image source={require("../assets/google.png")} />
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#0000FF] p-3 w-[50px] items-center rounded-md">
                    <Image source={require("../assets/facebook.png")} />
                </TouchableOpacity>
            </View>
            <View className="flex w-full items-center justify-center mt-8">
                <View className="flex flex-row items-center gap-1">
                    <Text>Already have an Account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Login")} ><Text className="text-[#0000FF]">Login</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register;