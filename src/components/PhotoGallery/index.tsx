import React from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';

export type ButtonProps = {
  photos: string[];
};

export const PhotoGallery = ({photos}: ButtonProps) => {
  return (
    <FlatList
      data={photos}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapperStyle}
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
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  photo: {
    width: 182,
    height: 182,
  },
});
