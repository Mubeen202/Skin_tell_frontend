import React from 'react';
import { Text, View } from 'react-native';
import { Camera } from 'expo-camera';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
  };

  async componentDidMount() {
    const { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View><Text>Requesting Camera Permission...</Text></View>;
    }
    if (hasCameraPermission === false) {
      return <View><Text>No access to camera</Text></View>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.front} />
      </View>
    );
  }
}
