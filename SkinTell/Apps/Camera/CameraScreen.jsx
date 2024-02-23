import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";
import {Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FinalReport from "../FinalReportScreen/FinalReport";
import axios from 'axios';
export default function CameraScreen() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [data, setData] = useState({});
  const [cameraOpened, setCameraOpened] = useState(false);

  useEffect(() => {
    if (!cameraOpened) {
      setCameraOpened(true);
      pickImage();
    }
  }, [cameraOpened]);


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
      uploadImage(result.assets[0].uri)
    }
    else {
      // If the user cancels image capture, set image state to null
      console.log('this is running')
      setImage(null);
      setData({});
    }
  };

  const uploadImage = async (imageUri) => {
    // console.log(imageData)
    // Create a FormData object to send the image data
     // Create a FormData object to send the image data
    let formData = new FormData();
    formData.append('title', 'Your Title Here');
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg', // Use the appropriate MIME type based on the received data
      name: 'photo.jpg', // Set the image name
    });
    try {
      const response = await axios.post('http://192.168.0.105:8000/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setData(response.data);
      // Optionally, you can handle the response here or perform any other actions
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log('Server Error:', error.response.data);
        console.log('Status Code:', error.response.status);
        console.log('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error:', error.message);
      }
      console.error('Error uploading image:', error);
      throw error;
    
    }
  };


  const reloadImage = () => {
    setImage(null);
    setData({});
    pickImage();
  };

  return (
    <>
      {image ? (
        <>
        <FinalReport
         image={image} 
         data={data}
          />
          <Button title="Reload Image" onPress={reloadImage} style={{borderRadius:30}} />
          </>
      ) : (
        <></> // Render nothing until the image is captured
      )}
    </>
  );
}