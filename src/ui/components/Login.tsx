import styled from '@emotion/native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { colors } from '../styles/color'
import Button from './Button';
import MarginVertical from './MarginVertical';
import { size } from '../styles/size';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

type LoginProps = {
  setIndex:(index: number) => void;
}

const Login = ({setIndex}:LoginProps) => {
  const [isLogin,setIsLogin] = useState(false);
  const [step, setStep] = useState(1)
  const [isIdFocused, setIsIdFocused] = useState(false)
  const [isPwFocused, setIsPwFocused] = useState(false)
  const [id, setId] = useState("")
  const [password,setPassword] = useState("")
  const [idValid, setIdValid] = useState(true);
  const [pwValid, setPwValid] = useState(true);
  const [showWarning, setShowWarning] = useState(false);


  const handleNextButton = () => {
    if(step === 1){
      setStep(prev => prev+1)
    }
    if(!isLogin && step === 2){
      setIndex(6)
    }
  }
  useEffect(() => {
    setIdValid(/^[A-Za-z]{8,}$/.test(id));
    console.log(idValid)
  }, [id]);

  useEffect(() => {
    setPwValid(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password));
  }, [password]);

  useEffect(() => {
    if ((step === 1 && !idValid) || (step === 2 && !pwValid)) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [idValid, pwValid, step]);

  return (
    <TouchableWithoutFeedback onPress={() => {setIsIdFocused(false);setIsPwFocused(false);Keyboard.dismiss()}}>
    <Body>
      {!isLogin ?
      <>
        <TitleText>{step === 1 ? "이번엔 계정을 생성할거예요" : "비밀번호를 설정해주세요"}</TitleText>
        <MarginVertical margin={110}/>
        <Input
          placeholder='아이디를 설정해주세요'
          onFocus={() => setIsIdFocused(true)}
          onBlur={() => setIsIdFocused(false)}
          isFocused={isIdFocused}
          value={id}
          isError={!idValid}
          onChange={(e) => setId(e.nativeEvent.text)}
          />
          {step === 2 ?
          <>
          <MarginVertical margin={10}/>
          <Input
          placeholder='대소문자와 특수문자 포함 8자 이상'
          onFocus={() => setIsPwFocused(true)}
          onBlur={() => setIsPwFocused(false)}
          isFocused={isPwFocused}
          value={password}
          isError={!pwValid}
          secureTextEntry
          onChange={(e) => setPassword(e.nativeEvent.text)}
          />
          </>
          :
          <></>
          }
        <MarginVertical margin={10}/>
        <Button text={"입력완료"} check={step === 1 ? idValid : idValid && pwValid} handleButton={handleNextButton}/>
        <MarginVertical margin={8}/>
        <ChangeLogin onPress={() => setIsLogin(true)}>
          <ChangeLoginText>이미 계정이 있어요</ChangeLoginText>
        </ChangeLogin>
        {showWarning && (
            <WarningView>
              <WarningText>
                {step === 1
                  ? '아이디는 영문 8자 이상이어야 합니다.'
                  : '비밀번호는 대소문자 + 특수문자 포함 8자 이상이어야 합니다.'}
              </WarningText>
            </WarningView>
          )}
      </>
      :
      <>
        <TitleText>{step === 1 ? "또 오셨군요!\n비밀번호를 입력해주세요" : "비밀번호를 입력해주세요"}</TitleText>
        <MarginVertical margin={110}/>
        <Input
          placeholder='아이디를 입력해주세요'
          onFocus={() => setIsIdFocused(true)}
          onBlur={() => setIsIdFocused(false)}
          isFocused={isIdFocused}
          value={id}
          isError={!idValid}
          onChange={(e) => setId(e.nativeEvent.text)}
          />
          {step === 2 ?
          <>
          <MarginVertical margin={10}/>
          <Input
          placeholder='대소문자와 특수문자 포함 8자 이상'
          onFocus={() => setIsPwFocused(true)}
          onBlur={() => setIsPwFocused(false)}
          isFocused={isPwFocused}
          value={password}
          isError={!pwValid}
          secureTextEntry
          onChange={(e) => setPassword(e.nativeEvent.text)}
          
          />
          </>
          :
          <></>
          }
        <MarginVertical margin={10}/>
        <Button text={"입력완료"} check={step === 1? idValid : idValid && pwValid} handleButton={handleNextButton}/>
        <MarginVertical margin={8}/>
        <ChangeLogin onPress={() => setIsLogin(true)}>
          <ChangeLoginText>비밀번호 찾기</ChangeLoginText>
        </ChangeLogin>
        {showWarning && (
            <WarningView>
              <WarningText>
                {step === 1
                  ? '아이디는 영문 8자 이상이어야 합니다.'
                  : '비밀번호는 대소문자 + 특수문자 포함 8자 이상이어야 합니다.'}
              </WarningText>
            </WarningView>
          )}
      </>
      }
    </Body>
    </TouchableWithoutFeedback>
  )
}

export default Login

const Body = styled.View`
  width: ${() => `${size.width*.9}px`};
  height: ${() => `${size.height}px`};
  display:flex;
  justify-content:center;
  align-items:center;
  height:${size.height}px;
`

const TitleText = styled.Text`
  color:${colors.fontMain};
  font-size:26px;
  font-weight:500;
  text-align:center;
  margin-top:-100px;
`

const Input = styled.TextInput<{isFocused:boolean; isError: boolean}>`
  width:90%;
  height:50px;
  background-color:${(props) => (props.isFocused ? "#fff" :colors.unSelected)};
  border-radius:10px;
  padding:10px 20px;
  border: 
    ${(props) => (props.isError ? '2px solid red' : props.isFocused ? ' 2px solid #FFA05D' : 'transparent')};
`

const ChangeLogin = styled.TouchableOpacity`
  width:90%;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
`

const ChangeLoginText = styled.Text`
  color:${colors.fontMain};
  font-size:20px;
`

const WarningView = styled.View`
  position: absolute;
  bottom: ${Platform.OS === 'ios' ? '-40px' : '20px'};
  background-color: ${colors.pointColor};
  padding: 10px 20px;
  border-radius: 8px;
  width:90%;
`;

const WarningText = styled.Text`
  color: #fff;
  font-size: 14px;
`;



