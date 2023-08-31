import React from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';

export type ButtonProps = {
  photos: string[];
};

export const PhotoGallery = ({photos}: ButtonProps) => {
  return (
    <FlatList
      scrollEnabled={true}
      data={photos}
      numColumns={2}
      // columnWrapperStyle={''}
      renderItem={({item}) => (
        <Image
          style={styles.photo}
          source={{
            uri: item,
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  // columnWrapperStyle: {
  //   justifyContent: 'space-between',
  //   paddingBottom: 10,
  // },
  photo: {
    width: 186,
    height: 186,
  },
});
