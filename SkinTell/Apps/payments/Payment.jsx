import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StripeProvider } from "@stripe/stripe-react-native";
import PaymentScreen from "./PaymentScreen";

export default function Payment() {
  return (
    <StripeProvider publishableKey="pk_test_51Jq0cKL3DiO0h9c8OnakTjEileGJzrbgSmD8bdOvizaFH0CMwrL7sIcC1LBmHKVRgr0Vqm9GDha43XUEujIQLNCH00ktdAA4br">
      <PaymentScreen/>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});