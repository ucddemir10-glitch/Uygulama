import React from 'react'
import "./global.css";
import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function 
TabLayout() {
  return(
    <Tabs>
      <Tabs.Screen name="sepetim" 
      options={{title:"Sepetim",
        tabBarIcon:({color,size})=>
        (<Ionicons name='cart-outline' size={size} color={color}/>)
      }}
    
    </Tabs>
  );
}
