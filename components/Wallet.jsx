import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Dashtransaction, transaction } from './Data'

const Wallet = () => {
    const [show, setShow] = useState(false)
    // const [active, setActive] = useState("Service")

    const handlePress = () => {
        setShow(!show)
    }
    return (
        <SafeAreaView className="flex-1 flex-col">
            <View className="flex flex-col gap-4">
                <View>
                    <Text>My Wallet</Text>
                </View>
                <View className="flex flex-col gap-1 items-start mt-9">
                    <View className="flex flex-row gap-2 items-center">
                        <Text className="font-bold text-black opacity-50">Your balance</Text>
                        <TouchableOpacity onPress={handlePress} >
                            <Image source={require("../assets/eye.png")} />
                        </TouchableOpacity>
                    </View>
                    {
                        show ? <Text className="text-2xl font-bold">xxxxx</Text> : <Text className="text-2xl font-bold">N30,000.43</Text>
                    }

                    <TouchableOpacity className="flex flex-row items-center gap-2 bg-[#0000FF] justify-center rounded-md p-3 w-full">
                        <Image source={require("../assets/plus.png")} />
                        <Text className="text-white font-bold">Fund Wallet</Text>
                    </TouchableOpacity>
                </View>
                <View className="flex flex-col mt-10 ">
                    <View className="flex flex-row w-full justify-between items-center mb-4">
                        <Text className="font-bold text-xl">Transaction</Text>
                        <Text className="text-[#0000FF] uppercase font-bold">See all</Text>
                    </View>
                    <View className="flex flex-col space-y-4">
                        {
                            transaction.map((transact, i) => (
                                <View className="flex flex-row w-full justify-between items-center">
                                    <View className="flex-row items-center">
                                        <Image width={40} height={40} source={transact.icon} />
                                        <View className="flex flex-col gap-1">
                                            <Text className="text-[15px] font-bold">{transact.title}</Text>
                                            <Text className="capitalize text-xs">{transact.desc}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text className="text-[#0000FF] font-semibold">{transact.amount}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Wallet