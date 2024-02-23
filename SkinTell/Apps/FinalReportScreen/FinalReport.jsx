import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProgressBar } from "react-native-paper";
import Colors from "../../Utils/Colors/Colors";

const FinalReport = (props) => {
  // Logic for determining the progress bar color
  const { image } = props;
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
        <Text>Another Component Section</Text>
      </View>

      {/* Section for progress bars with texts */}
      <View style={[styles.section, styles.progressSection]}>
        <View style={styles.progressContainer}>
          <Text>Progress 1: </Text>
          <ProgressBar
            progress={62.5 / 100} // Divide by 100 to convert percent to fraction
            color={getColor(62.5)} // Determine color based on percent
            style={styles.progressBar}
          />
          <Text>{`${Math.round(62.5)}%`}</Text>
        </View>
        <View style={styles.progressContainer}>
          <Text>Progress 2: </Text>
          <ProgressBar
            progress={62.5 / 100} // Divide by 100 to convert percent to fraction
            color={getColor(62.5)} // Determine color based on percent
            style={styles.progressBar}
          />
          <Text>{`${Math.round(62.5)}%`}</Text>
        </View>
        <View style={styles.progressContainer}>
          <Text>Progress 3: </Text>
          <ProgressBar
            progress={62.5 / 100} // Divide by 100 to convert percent to fraction
            color={getColor(62.5)} // Determine color based on percent
            style={styles.progressBar}
          />
          <Text>{`${Math.round(62.5)}%`}</Text>
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
  },
  progressBar: {
    width: 200,
    height: 20,
  },
});

export default FinalReport;
