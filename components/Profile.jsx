import React from 'react'
import { View, Image } from 'react-native'

const Profile = () => {
  return (
    <View className="flex flex-col gap-4">
        <View className="flex w-full justify-center items-center">
            <Text>
                Profile
            </Text>
        </View>
        <View>
            <Image source={require("")}/>
            <View>
                <Text>Taofeeq Olayiwola Kolapo</Text>

            </View>
        </View>
    </View>
  )
}

export default Profile