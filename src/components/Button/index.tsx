import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export type ButtonProps = {
  children: ReactNode | ReactNode[] | string;
  onPress: () => void;
};

export const Button = ({children, onPress}: ButtonProps) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#818cf8',
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
    color: '#020617',
    fontWeight: '600',
    fontSize: 16,
  },
});
