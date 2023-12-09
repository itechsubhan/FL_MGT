import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function Dashboard({ navigation }) {
  return (
    <View>
      <SafeAreaView>
        <Text>Dashboard</Text>
        <Button title="Search Nearby Charging Stations" />
        <Button title="View Charging History" />
        <Button title="View Vehicle Information" />
        <Button title="View Vehicle Maintenance History" />
        <Button title="View Vehicle Maintenance Schedule" />
      </SafeAreaView>
    </View>
  );
}

export default Dashboard;
