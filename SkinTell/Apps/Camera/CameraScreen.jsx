import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import FinalReport from "../FinalReportScreen/FinalReport";

export default function CameraScreen() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    pickImage();
  }, []);

  const pickImage = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      {image ? (
        <FinalReport image={image} />
      ) : (
        <></> // Render nothing until the image is captured
      )}
    </>
  );
}
