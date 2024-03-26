
import { View, Text, Image, FlatList } from 'react-native'

// const Service = () => {

// }

// export default Service
import React from 'react'

export const Service = () => {
    return (
        <View className="flex flex-row w-full justify-between gap-3">
            <View className="flex flex-col items-center gap-1">
                <Image source={require("../assets/phone.png")} />
                <Text>Cable</Text>
            </View>
            <View className="flex flex-col items-center gap-1">
                <Image source={require("../assets/wifi.png")} />
                <Text>Data</Text>
            </View>
            <View className="flex flex-col items-center gap-1">
                <Image source={require("../assets/screen share.png")} />
                <Text>Cable Tv</Text>
            </View>
            <View className="flex flex-col items-center gap-1">
                <Image source={require("../assets/world.png")} />
                <Text>Internet</Text>
            </View>
        </View>
    )
}


export const More = () => {
    return (

        <View className="flex flex-row w-full justify-between gap-3">
            <View className="flex flex-col items-center gap-1">
                <Image source={require("../assets/phone.png")} />
                <Text>Cable</Text>
            </View>
            <View className="flex flex-col items-center gap-1">
                <Image source={require("../assets/wifi.png")} />
                <Text>Data</Text>
            </View>
            <View className="flex flex-col items-center gap-1">
                <Image source={require("../assets/screen share.png")} />
                <Text>Cable Tv</Text>
            </View>
            <View className="flex flex-col items-center gap-1">
                <Image source={require("../assets/world.png")} />
                <Text>Internet</Text>
            </View>
        </View>
    )
}

