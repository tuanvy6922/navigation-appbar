import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Icon } from "react-native-paper";

const tabs = createBottomTabNavigator();

const MyBottomTabs = ()=>{
    return(
        <tabs.Navigator>
            <tabs.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon:({color}) => <Icon source={"home"} size={30} color={color}/>
                }}
            />
            <tabs.Screen name="Details" component={DetailsScreen}
                options={{
                    tabBarIcon:({color}) => <Icon source={"star"} size={30} color={color}/>
                }}
            />
        </tabs.Navigator>
    )
}
export default MyBottomTabs