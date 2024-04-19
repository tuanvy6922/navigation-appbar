import React from "react";
import HomeScreen from "./src/HomeScreen";
import DetailsScreen from "./src/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Drawer, PaperProvider } from "react-native-paper";
import CustomNavigationBar from "./src/CustomNavigationBar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyDrawer from "./src/MyDrawer";
import CustomDrawerNavigation from "./src/CustomDrawerNavigation";
import MyBottomTabs from "./src/MyBottomTabs";

const stack = createStackNavigator();

const App=()=>{
  return (
    <PaperProvider>
      <NavigationContainer>
        {/* <stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar{...props}/>,
          }}>
          <stack.Screen name="Home" component={HomeScreen}/>
          <stack.Screen name="Details" component={DetailsScreen}/>
        </stack.Navigator> */}
        {/* <MyDrawer/> */}
        <MyBottomTabs/>
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;