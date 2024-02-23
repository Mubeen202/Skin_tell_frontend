import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProgressBar } from "react-native-paper";
import Colors from "../../Utils/Colors/Colors";
import Loader from "../Loader/Loader";

const FinalReport = ({image, data}) => {
  console.log(data)
  if (!data || !data.classify_image) {
    return <Loader />;
  }
  // Logic for determining the progress bar color
  const { classify_image, classify_type } = data;

  // Extract dark spots, puffy eyes, and wrinkles from classify_image
  const [darkSpots, puffyEyes, wrinkles] = classify_image.map((item) => {
    const [label, percentage] = item.split(" : ");
    // Extract value without percentage
    const value = parseFloat(percentage);
    return { label, percentage, value };
  });
  console.log('these are elements', darkSpots.value, puffyEyes, wrinkles, classify_type)
 

  const getColor = (progress) => {
    if (progress >= 0.0 && progress <= 20.0) {
      return "green";
    } else if (progress > 20.0 && progress <= 50.0) {
      return Colors.PRIMARY;
    } else if (progress > 50.0 && progress <= 80.0) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <View style={styles.container}>
      {/* Section for image */}
      <View style={[styles.section, styles.imageSection]}>
        {/* Your image component goes here */}
        {image ? (
        <Image
          source={{uri:image}}
          style={styles.image}
        />
        ):(
          
          <Image
          source={require("../../assets/images/homePageImage.png")}
          style={styles.image}
        />
        )}
      </View>

      {/* Section for another component */}
      <View style={[styles.section, styles.textSection]}>
        {/* Your another component goes here */}
        <Text>{classify_type}</Text>
      </View>

      {/* Section for progress bars with texts */}
      <View style={[styles.section, styles.progressSection]}>
  <View style={[styles.progressContainer, styles.progressItem]}>
    <Text>DARK SPOTS: </Text>
    <ProgressBar
      progress={darkSpots.value / 100}
      color={getColor(darkSpots.value)}
      style={styles.progressBar}
    />
    <Text>{darkSpots.percentage}</Text>
  </View>
  <View style={[styles.progressContainer, styles.progressItem]}>
    <Text>PUFFY EYES</Text>
    <ProgressBar
      progress={puffyEyes.value / 100}
      color={getColor(puffyEyes.value)}
      style={styles.progressBar}
    />
    <Text>{puffyEyes.percentage}</Text>
  </View>
  <View style={[styles.progressContainer, styles.progressItem]}>
    <Text>WRINKLES </Text>
    <ProgressBar
      progress={wrinkles.value / 100}
      color={getColor(wrinkles.value)}
      style={styles.progressBar}
    />
    <Text>{wrinkles.percentage}</Text>
  </View>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    width: "100%",
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
  },
  imageSection: {
    flex: 4, // 40% of page size
    marginBottom: 5, // Reduce the gap
  },
  textSection: {
    flex: 2, // 20% of page size
    marginBottom: 5, // Reduce the gap
  },
  progressSection: {
    flex: 4, // 40% of page size
    // justifyContent: 'space-between', // Add space between progress bars
  },
  image: {
    width: "100%",
    height: "100%",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap:20
  },
  progressBar: {
    width: 200,
    height: 20,
  },
  progressItem: {
    marginBottom: 10, // Add your desired margin-bottom value
  },
});

export default FinalReport;
