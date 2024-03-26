import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { transaction } from './Data'

const Wallet = () => {
    return (
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
            <View className="flex flex-col gap-5">
                <View className="flex w-full justify-between">
                    <Text className="font-bold ">Transaction</Text>
                    <Text className="text-[#0000FF]">See all</Text>
                </View>
                <View>
                    {
                        transaction.map((transact, i)=>(
                            <View className="flex flex-row w-full justify-between">
                                <View>
                                    <Image source={require(transact.icon)}/>
                                    <View className="flex flex-col gap-1">
                                        <Text>{transact.title}</Text>
                                        <Text>{transact.desc}</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text>{transact.amount}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>

        </View>
    )
}

export default Wallet