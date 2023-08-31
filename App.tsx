/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

import {Button} from './src/components/Button';
import {PhotoGallery} from './src/components/PhotoGallery';

// https://github.com/react-native-image-picker/react-native-image-picker/issues/923 // ios has no camera simulator

function App(): JSX.Element {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleLaunchCamera = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: true,
    };
    launchCamera(options, response => {
      const photoUri =
        (response?.assets && response?.assets[0] && response?.assets[0]?.uri) ||
        '';

      if (photoUri) {
        const previousPhotosArray = [...photos];
        const updatedPhotosArray: string[] = [...previousPhotosArray, photoUri];
        setPhotos(updatedPhotosArray);
      }

      // TODO: add alert with camera failure
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Photo gallery app</Text>

        <View style={styles.buttonsWrapper}>
          <Button onPress={() => handleLaunchCamera()}>Take photo</Button>
          <Button onPress={() => launchImageLibrary({mediaType: 'mixed'})}>
            View gallery
          </Button>
        </View>

        {photos?.length ? (
          <PhotoGallery photos={photos} />
        ) : (
          <View>
            <Text style={styles.noItemsText}>No photos to display yet.</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#6366f1',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
  },
  photo: {
    width: 200,
    height: 200,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  noItemsText: {
    paddingVertical: 30,
    textAlign: 'center',
  },
});

export default App;
