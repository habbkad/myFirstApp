import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const OnlineShopping = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../../assets/fonts/candy.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.DescText}>
        <Text style={styles.headText}>ONLINE SHOPPING</Text>
        <Text style={{ fontFamily: "Inter-Black" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </View>
      <View style={styles.imageCon}>
        <Image
          source={require("../../assets/images/shopping.png")}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <View style={styles.btnCon}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            navigation.navigate("dressing", { name: "Setso" });
          }}
        >
          <Text style={styles.btnText}>NEXT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navBtnCon}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("dressing", { name: "Setso" });
          }}
        >
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    marginTop: Platform.OS == "android" ? 30 : 0,
    marginHorizontal: 20,
  },
  DescText: {
    flex: 3,
    marginTop: 50,
  },
  imageCon: {
    flex: 5,
  },
  btnCon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navBtnCon: {
    flex: 1,

    alignItems: "flex-end",
  },
  headText: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 25,
    fontFamily: "Inter-Black",
  },
  btnStyle: {
    borderRadius: 20,
    width: 200,
    backgroundColor: "blue",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    color: "#09a9ed",
  },
});

export default OnlineShopping;
