import React, {Dispatch, SetStateAction} from 'react';
import {Image, Modal as RNModal, Text, View} from 'react-native';
import {Button} from '../Button';
import {styles} from './styles';

export type ModalProps = {
  title: string;
  description: string;
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  onPressButton: () => any;
  variant?: 'error' | 'warning' | 'success';
  buttonText?: string;
  showIcon?: boolean;
};

export const Modal = ({
  title,
  description,
  isModalVisible,
  setIsModalVisible,
  variant = 'success',
  buttonText = 'Close modal',
  onPressButton = () => null,
  showIcon = true,
}: ModalProps) => {
  const iconSource = {
    error: require('../../../src/assets/icons/error.png'),
    warning: require('../../../src/assets/icons/warning.png'),
    success: require('../../../src/assets/icons/success.png'),
  };

  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <View style={styles.modal}>
        <View style={styles.iconTextWrapper}>
          {showIcon && variant ? (
            <View style={styles.iconWrapper}>
              <Image style={styles.icon} source={iconSource[variant]} />
            </View>
          ) : null}

          <View style={styles.textWrapper}>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.description}>
              {description ||
                'Sorry, the camera is not available on this device'}
            </Text>
          </View>

          <Button
            fullWidth
            onPress={() => {
              onPressButton();
              // setModalVisible(!modalVisible);
              // setModalText('');
            }}>
            {buttonText}
          </Button>
        </View>
      </View>
    </RNModal>
  );
};
