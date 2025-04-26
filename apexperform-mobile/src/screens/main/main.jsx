import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home/home.jsx"
import CalendarAgenda from "../calendar-agenda/calendar-agenda.jsx"
import Profile from "../profile/profile.jsx"
import icon from "../../constants/icons.js"


const Tab = createBottomTabNavigator();

function Main(){
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name ="Home" component={Home} 
                options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{width: 125, height: 37}}/>
                    },

                    tabBarShowLabel: false,
                    tabBarIcon: (focused) =>{
                        return <Image source={icon.home} style={{width: 25, height: 30, opacity: focused ? 1 : 0.3}}/>
                    }
                }}
            />
            <Tab.Screen name ="Calendar" component={CalendarAgenda} 
                options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{width: 125, height: 37}}/>
                    },

                    tabBarShowLabel: false,
                    tabBarIcon: (focused) =>{
                        return <Image source={icon.calendar} style={{width: 25, height: 30, opacity: focused ? 1 : 0.3}}/>
                    }
                }}
            />
            <Tab.Screen name ="Profile" component={Profile} 
                options={{
                    headerTitleAlign: "center",
                    headerTitle: () => {
                        return <Image source={icon.logo} style={{width: 125, height: 37}}/>
                    },

                    tabBarShowLabel: false,
                    tabBarIcon: (focused) =>{
                        return <Image source={icon.account} style={{width: 25, height: 30, opacity: focused ? 1 : 0.3}}/>
                    }
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
}

export default Main;