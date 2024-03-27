import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./components/Onboarding";
// import Signup from "./components/Signup";
import Register from "./components/Register";
import { SafeAreaView } from "react-native";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Wallet from "./components/Wallet";
const Stack = createStackNavigator();

export default function App() {

  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

