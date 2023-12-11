import {Button, ButtonText} from '@gluestack-ui/themed';
import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native';
import {Dimensions} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, SPACING} from '../../theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function WelcomeScreen({navigation}: any) {
  function gotoDashboard(): void {
    navigation.navigate('Dashboard');
  }
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require('../assets//screenBg/space.jpg')}>
      <SafeAreaView style={styles.ScreenContainer}>
        <Text style={styles.ScreenTitle}>Fleet Pro Sync</Text>
        <Text style={styles.ScreenDesc}>
          One stop app for all yout payments
        </Text>

        <Button
          action={'primary'}
          variant={'solid'}
          size={'md'}
          rounded={'$md'}
          w={'$56'}
          h={'$20'}
          m={'$20'}
          isDisabled={false}
          onPress={gotoDashboard}>
          <ButtonText>Get Started!</ButtonText>
        </Button>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  ScreenTitle: {
    padding: SPACING.space_10,
    fontSize: 50,
    fontFamily: FONTFAMILY.poppins_extrabold,
    color: COLORS.primaryWhiteHex,
  },
  ScreenDesc: {
    marginLeft: 25,
    fontSize: 20,
    fontFamily: FONTFAMILY.poppins_bold,
    color: COLORS.primaryWhiteHex,
  },
  ScreenContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
  },
  red: {
    color: 'red',
  },
  imageContainer: {
    height: windowHeight,
    width: windowWidth,
  },
});
