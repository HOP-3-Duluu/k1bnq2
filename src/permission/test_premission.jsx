import React, {useState} from 'react';
import {Alert, Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import * as ImagePicker from 'react-native-image-picker';
import {Header} from '../components';

export const Test_premission = ({navigation}) => {
  const [image, setImage] = useState('');
  const [img, setImg] = useState('');

  const requestCameraPermission = async () => {
    try {
      let cameraResult;
      cameraResult = await request(PERMISSIONS.IOS.CAMERA);
      console.log(cameraResult, ' cameraResult');
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const requestPickPhotoPermission = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('responce', response.assets[0].uri);
      setImg(response.assets[0].uri);
    });
  };

  const pickImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      setImage(response?.assets[0].uri);
    });
  };
  const requestGalleryPermission = () => {
    try {
      request(
        Platform.IOS === 'Android'
          ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
          : PERMISSIONS.IOS.PHOTO_LIBRAR,
      ).then(result => {
        pickImage();
        console.log(result);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Header navigation={navigation} />
      <SafeAreaView>
        <Pressable
          style={{
            width: 100,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={requestCameraPermission}>
          <Text>camera</Text>
        </Pressable>
        <Pressable
          style={{
            width: 100,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={requestPickPhotoPermission}>
          <Text>pick image</Text>
        </Pressable>
        <Pressable
          style={{
            width: 100,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={requestGalleryPermission}>
          <Text>pick image</Text>
        </Pressable>
        <Image
          source={{uri: image}}
          style={{
            width: 200,
            height: 200,
            borderWidth: 1,
            borderColor: 'black',
          }}
        />
      </SafeAreaView>
    </View>
  );
};
