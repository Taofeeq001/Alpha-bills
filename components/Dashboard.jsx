// // import React from 'react'
// import { useState } from 'react'
// import { View, Image, Text, TouchableOpacity } from 'react-native'

// const Dashboard = ({ navigation }) => {
//     const [show, setShow] = useState(false)
//     const [active, setActive] = useState("Service")
//     const handlePress = () => {
//         setShow(!show)
//     }
//     const Tab = [
//         {
//             name: "Service",
//             act: "Service"
//         },
//         {
//             name: "More",
//             act:"More"
//         }
//     ]
//     const handleclick=(index)=>{
//         setActive(index)
//     }
//     return (
//         <View className="flex flex-col h-screen gap-5 py-14 px-7">
//             <View className="flex flex-row w-full pr-10 justify-between">
//                 <View className="flex w-full flex-row items-center gap-2 ">
//                     <Image width={60} height={60} source={require("../assets/image.png")} />
//                     <Text className="font-bold ">Kolapo Taofeeq </Text>
//                 </View>
//                 <Image source={require("../assets/notify.png")} />
//             </View>
//             <View className="flex flex-col gap-1 items-start mt-9">
//                 <View className="flex flex-row gap-2 items-center">
//                     <Text className="font-bold text-black opacity-50">Your balance</Text>
//                     <TouchableOpacity onPress={handlePress} >
//                         <Image source={require("../assets/eye.png")} />
//                     </TouchableOpacity>
//                 </View>
//                 {
//                     show ? <Text className="text-2xl font-bold">xxxxx</Text> : <Text className="text-2xl font-bold">N30,000.43</Text>
//                 }
//                 {/* <Text className="text-2xl font-bold">N30,000.43</Text> */}
//             </View>
//             <View className="flex flex-row items-center justify-between  mt-4">
//                 <TouchableOpacity className="flex flex-row items-center gap-2 p-3 rounded-md justify-center bg-gray-300 w-1/2">
//                     <Image source={require("../assets/share.png")} />
//                     <Text className="font-bold">Share</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity className="flex flex-row items-center gap-2 bg-[#0000FF] justify-center rounded-md p-3 w-1/2">
//                     <Image source={require("../assets/plus.png")} />
//                     <Text className="text-white font-bold">Fund Wallet</Text>
//                 </TouchableOpacity>
//             </View>
//             <View className="mt-11 flex flex-row w-full justify-between px-11">
//                 {
//                     Tab.map((tb, i) => (
//                         <TouchableOpacity onPress={()=>handleclick(tb.name)} key={i} className={`${tb.active===active? "border-b-2":""}`}><Text className={`text-xl ${tb.active=== active? "border-b-2 bg-yellow-300":""}`}>{tb.name}</Text></TouchableOpacity>
//                     ))
//                 }
//             </View>

//         </View>
//     )
// }

// export default Dashboard
import React, { useState } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { More, Service } from './Service'

const Dashboard = ({ navigation }) => {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState("Service")

    const handlePress = () => {
        setShow(!show)
    }

    const Tab = [
        {
            name: "Service",
            act: "Service"
        },
        {
            name: "More",
            act: "More"
        }
    ]

    const handleclick = (name) => {
        setActive(name)
    }

    // const data = {
    //     service: <Service/>,
    //     more:<More/>

    // }
    const renderContent = () => {
        if (active === "Service") {
            return <Service />;
        } else if (active === "More") {
            return <More />;
        }
    };
    

    return (
        <View className="flex flex-col h-screen gap-5 py-14 px-7">
            <View className="flex flex-row w-full pr-10 justify-between">
                <View className="flex w-full flex-row items-center gap-2 ">
                    <Image width={60} height={60} source={require("../assets/image.png")} />
                    <Text className="font-bold ">Kolapo Taofeeq </Text>
                </View>
                <Image source={require("../assets/notify.png")} />
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
            </View>
            <View className="flex flex-row items-center justify-between mt-4">
                <TouchableOpacity className="flex flex-row items-center gap-2 p-3 rounded-md justify-center bg-gray-300 w-1/2">
                    <Image source={require("../assets/share.png")} />
                    <Text className="font-bold">Share</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row items-center gap-2 bg-[#0000FF] justify-center rounded-md p-3 w-1/2">
                    <Image source={require("../assets/plus.png")} />
                    <Text className="text-white font-bold">Fund Wallet</Text>
                </TouchableOpacity>
            </View>
            <View className="mt-11 flex flex-row w-full justify-between px-11">
                {
                    Tab.map((tab, i) => (
                        <TouchableOpacity onPress={() => handleclick(tab.name)} className={`${tab.name === active ? "border-b-2" : ""}`}><Text className="text-xl">{tab.name}</Text></TouchableOpacity>
                    ))
                }
            </View>
            <View>
                {renderContent()}
            </View>
            <View className="flex flex-col">
                <View className="flex flex-row w-full justify-between items-center ">
                    <Text className="font-bold text-xl">Transaction</Text>
                    <Text className="text-[#0000FF] uppercase">See all</Text>
                </View>
                {/* <View>
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
                </View> */}
            </View>
        </View>
    )
}

export default Dashboard
