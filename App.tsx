/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {styles} from './appStyles';

import {Button} from './src/components/Button';
import {Modal} from './src/components/Modal';

function App(): JSX.Element {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  /**
   * Opens the camera and throws a modal with error message if it fails
   */
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

      // NOTE:  It appears the camera doesn't work on the emulator, so we throw an error for that case
      // // https://github.com/react-native-image-picker/react-native-image-picker/issues/923 // ios has no camera simulator
      if (response?.errorCode || response?.errorMessage) {
        const friendlyErrorText =
          response?.errorCode === 'camera_unavailable'
            ? 'Sorry, the camera is not available on this device'
            : '';

        setIsModalVisible(true);
        setModalText(
          `${response?.errorMessage || `${friendlyErrorText}.` || ''}
          Error code: ${response?.errorCode}.`,
        );
      }
    });
  };

  /**
   * Opens the gallery and throws a modal with error message if it fails
   */
  const handleLaunchGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response?.errorCode || response?.errorMessage) {
        setIsModalVisible(true);
        setModalText(`${response?.errorMessage} 
        Error code: ${response?.errorCode}.`);
      }
    });
  };

  return (
    <SafeAreaView>
      {/* Title */}
      <Text style={styles.title}>Photo gallery app</Text>

      {/* Buttons */}
      <View style={styles.buttonsWrapper}>
        <Button icon="camera" onPress={() => handleLaunchCamera()}>
          Take photo
        </Button>

        <Button icon="image" onPress={handleLaunchGallery}>
          View gallery
        </Button>
      </View>

      {/* Photos list */}
      {photos?.length ? (
        <FlatList
          scrollEnabled={true}
          data={photos?.length ? photos : []}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({item}) => (
            <Image style={styles.photo} source={{uri: item}} />
          )}
        />
      ) : (
        <View>
          {/* Empty list text */}
          <Text style={styles.noItemsText}>No photos to display yet.</Text>
        </View>
      )}

      {/* Error Message Modal */}
      {isModalVisible && modalText ? (
        <Modal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          title="There was a problem!"
          description={modalText}
          onPressButton={() => {
            setIsModalVisible(false);
            setModalText('');
          }}
          variant="error"
          buttonText="Ok"
        />
      ) : null}
    </SafeAreaView>
  );
}

export default App;
