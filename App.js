import React from "react";
import { SafeAreaView, LogBox } from "react-native";

import Navigation from './src/navigation/navigation'

const App = () =>{
  LogBox.ignoreAllLogs()
  return(
    <SafeAreaView style={{flex: 1}}>
      <Navigation/>
    </SafeAreaView>
  )
};
export default App;