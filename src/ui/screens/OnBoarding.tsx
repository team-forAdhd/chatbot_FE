import React, { useEffect, useRef, useState } from 'react';
import { Animated, SafeAreaView, TouchableWithoutFeedback, View, ImageSourcePropType } from "react-native";
import styled from '@emotion/native';
import bg from "../../assets/onBoardBg.png";
import character from "../../assets/characterImg.png";
import character2 from "../../assets/characterImg2.png";
import character3 from "../../assets/characterImg3.png";
import { size } from '../styles/size';
import Login from '../components/Login';
import SettingNickname from '../components/SettingNickname';
import TermsOfService from '../components/TermsOfService';
import { colors } from '../styles/color';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type OnBoardingNavProp = NativeStackNavigationProp<RootStackParamList, 'OnBoarding'>

function OnBoarding(): React.JSX.Element {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation<OnBoardingNavProp>();

  const messages = [
    "안녕하세요!\n저는 모리라고 해요",
    "정신건강의학과 의사 선생님과\n심리상담 전문가 선생님들이\n저를 함께 기획해 주셨어요",
    "저는 여자도 남자도 아닌\n모리입니다!",
    "ADHD인들이\n더 편안한 하루를 보낼 수 있도록\n제가 실시간으로 도와드릴거예요",
    "걱정 마세요!\n여러분의 개인정보는\n안전하게 보호돼요",
    "",
    "저는 여러분이 설정한\n닉네임으로만 대화할 거예요\n원하는 닉네임으로 저와 자유롭게\n소통해주세요!",
    "",
    "입력한 정보들은\n마이페이지에서 한눈에\n확인하실 수 있어요",
    "이 정보들을 업데이트 하고 싶다면\n마이페이지에서 언제든지\n편하게 바꾸시면 돼요",
    "하루에 두 번,\n모리가 여러분의 감정을 이모지로 간단히 체크할 거예요",
    "여러분의 상태를\n실시간으로 살펴보면서,\n감정이 급격하게 변하거나 힘들 때\n모리가 곁에서 빠르게 확인하고\n행동을 코칭해 드릴거예요",
    "마음이 힘들어질 때,\n언제든지 모리를 찾아주세요\n모리는 언제든지 기다리고 있어요",
    "다음 페이지로 넘어가면,\n앱 이용약관과 개인정보처리방침에 모두 동의하신 것으로 간주됩니다",
    "",
    "모리는 여러분 곁에서,\nADHD를 더 잘 이해하고 다루어 나갈 수 있도록 함께할 거예요",
    "그러니 모리와 함께\n하루를 또 채워나가봐요"
  ];

  const imageByIndex: Record<number, ImageSourcePropType> = {
    0: character,
    3: character3,
    6: character,
    10: character2,
    12: character2
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (onComplete: () => void) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onComplete();
    });
  };

  const handlePress = () => {
    if (index < messages.length - 1 && index !== 13) {
      fadeOut(() => {
        setIndex(prev => prev + 1);
        fadeIn();
      });
    }
    if(index === 16){
      navigation.replace("Tabs")
    }
  };

  const setIndexAndFade = (newIndex: number) => {
    setIndex(newIndex);
    fadeIn();
  };
  

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Container>
        <Bg source={bg} resizeMode='cover' />
        <SafeAreaView style={{ flex: 1 }}>
          <Body>
            {index <= 5 &&
              <View style={{ width: '100%', alignItems: 'flex-end', position: "absolute", top: 0, right: 20 }}>
                <SkipButton onPress={() => setIndex(5)}>
                  <SkipText>바로 시작하기 {">"}</SkipText>
                </SkipButton>
              </View>
            }

            {index === 5 ? (
              <Login setIndex={setIndexAndFade} />
            ) : index === 7 ? (
              <SettingNickname setIndex={setIndexAndFade} />
            ) : index === 14 ? (
              <TermsOfService setIndex={setIndexAndFade} />
            ) : index === 13 ? (
              <TextArea>
                {imageByIndex[13] && (
                  <FadeImage source={imageByIndex[13]} style={{ opacity: fadeAnim, width:100, height:90 }} resizeMode="contain" />
                )}
                <FadeText style={{ opacity: fadeAnim, fontSize: 26 }}>
                  {messages[13]}
                </FadeText>
                <NextButton onPress={() => {
                  fadeOut(() => {
                    setIndex(14);
                    fadeIn();
                  });
                }}>
                  <NextButtonText>확인했어요</NextButtonText>
                </NextButton>
              </TextArea>
            ) : (
              <TextArea>
                {imageByIndex[index] && (
                  <FadeImage source={imageByIndex[index]} style={{ opacity: fadeAnim,  width:100, height:90 }} resizeMode="contain" />
                )}
                <FadeText style={{
                  opacity: fadeAnim,
                  fontSize: index === 0 || index === 2 ? 32 : 26
                }}>
                  {messages[index]}
                </FadeText>
              </TextArea>
            )}
          </Body>
        </SafeAreaView>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default OnBoarding;

// ================== Styled Components =====================

const Container = styled.View`
  flex: 1;
  position: relative;
`;

const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Bg = styled.Image`
  position: absolute;
  width: ${() => `${size.width}px`};
  height: ${() => `${size.height}px`};
  top: 0;
  left: 0;
  z-index: -1;
`;

const TextArea = styled.View`
  padding: 24px;
  width: ${() => `${size.width}px`};
  align-items: center;
`;

const FadeText = styled(Animated.Text)`
  font-size: 26px;
  color: ${colors.fontMain};
  text-align: center;
  font-weight: 500;
`;

const SkipButton = styled.TouchableOpacity`
  width: 135px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkipText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 500;
`;

const FadeImage = styled(Animated.Image)`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  align-self: center;
`;

const NextButton = styled.TouchableOpacity`
  margin-top: 32px;
  padding: 14px 24px;
  background-color: ${colors.pointColor};
  border-radius: 10px;
  width:90%;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const NextButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

