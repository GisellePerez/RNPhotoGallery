import React, {ReactNode} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';

export type IconType = 'camera' | 'image';

export type ButtonProps = {
  children: ReactNode | ReactNode[] | string;
  onPress: () => void;
  icon?: IconType;
  fullWidth?: boolean;
};

export const Button = ({children, onPress, icon, fullWidth}: ButtonProps) => {
  const iconSource = {
    camera: require('../../../src/assets/icons/camera.png'),
    image: require('../../../src/assets/icons/image.png'),
  };

  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
        fullWidth
          ? {
              width: '100%',
            }
          : {},
      ]}
      onPress={onPress}>
      {icon ? (
        <View style={styles.iconWrapper}>
          <Image style={styles.icon} source={iconSource[icon]} />
        </View>
      ) : null}

      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};
