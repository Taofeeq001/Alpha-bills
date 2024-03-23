// import { useState } from 'react'
import { useState } from 'react'
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-vector-icons/AntDesign'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    // console.log(email)
    // const handleSubmit = ()=>{
    //     if(!email && !password){
    //         setError(true)
    //         setTimeout(()=>{
    //             setError(false)
    //         }, [2000])
    //     }else{
    //         setEmail("")
    //         setPassword("")
    //     }
    // }

    return (
        <View className="h-screen w-full py-10 px-4">
            <View className="flex w-full items-end">
                <Image className="bg-gray-300 rounded-full" source={require("../assets/right.png")} />
            </View>
            <View className="flex flex-col gap-4 mt-10">
                {
                    error && (
                        <Text className="text-red-600">All field are required</Text>
                    )
                }
                <View className="px-4">
                    <Text className="capitalize font-bold text-2xl">login to your account</Text>
                    <Text className="capitalize text-black opacity-20 font-bold text-xs ">welcome back, kindly login to your account</Text>
                </View>
                <View className="flex flex-col gap-4">
                    <TextInput value={email} onChangeText={(e)=> setEmail(e)} className="border rounded-md p-2" placeholder='Email Address' />
                    <TextInput value={password} onChangeText={(e)=> setPassword(e)} className="border rounded-md p-2" placeholder='Password' />
                    <View className="flex items-end">
                        <Text onPress={()=> navigation.navigate("Forget")} className="text-[#0000FF] font-bold">Forgot your password?</Text>
                    </View>
                </View>
                <View className="px-4 w-full">
                    <TouchableOpacity 
                    // onPress={handleSubmit} 
                    onPress={()=> navigation.navigate("Dashboard")}
                    className="w-full bg-[#0000FF] rounded-lg p-3  items-center">
                        <Text className="text-white text-2xl" >Login</Text>
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
                    <Text>Dont have an Account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate("Register")} ><Text className="text-[#0000FF]">Signup</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login;