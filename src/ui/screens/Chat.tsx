import styled from '@emotion/native'
import React from 'react'
import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import { size } from '../styles/size';
import { colors } from '../styles/color';
import logoOrange from '../../assets/logoOrange.png';
import logoText from '../../assets/logoText.png';
import logo from '../../assets/logo.png';
import MarginVertical from '../components/MarginVertical';
import SelectEl from '../components/SelectEl';
import sendIcon from '../../assets/sendIcon.png';

type ChatItem = [text: string, options?: string[]]
type myChatItem = string[]


const Chat = () => {

  const moriChat: ChatItem[] = [
    ["안녕하세요! 모리님,\nADHD인을 위한 AI챗봇, 모리입니다.\n편하게 이야기 나눠주세요😊\n상담을 시작하기 전, 상담에 도움이 될 수 있는 질문을 몇 가지 하겠습니다. 먼저, 성별을 선택해주세요!",["여성","남성","기타"]],
    ["알맞은 도움을 드리기 위해 연령대가 중요한 기준이 됩니다. 태어난 연도를 알려주세요!"],
    ["지금 하는 일이 어떻게 되는지 궁금해요!"],
    ["ADHD외 앓고 있는 정신 질환이 있으신가요?"]
  ];

  const myChat: myChatItem = [
    "여성", "2000", "파트타이머", "네, 있습니다", "우울증, 불안장애"
  ]

  return (
    <SafeAreaView style={{backgroundColor:colors.bgColor}}>
      <Body>
        <Header>
          <Image source={logoOrange} style={{ width:24, height:22}}/>
          <Image source={logoText} style={{width:48, height:22,resizeMode:'contain'}}/>
        </Header>
        <ContentsArea>
          <ScrollView showsVerticalScrollIndicator={false}>
            {moriChat.map((el,index) => {
              return(
                <View key={index}>
                  <MoriProfile source={logo}/>
                  <MarginVertical margin={12}/>
                  <MoriBubble>
                    <ChatText>{el[0]}</ChatText>
                  </MoriBubble>
                  <OptionArea>
                  {el[1] ? <MarginVertical margin={70}/> : <></>}
                  {el[1] ? el[1].map((option:string,index:number) => {
                    return(
                      <SelectEl text={option} isSelected={index === 0 ? true : false}/>
                    )
                  }) : <></>}
                  </OptionArea>
                  <MarginVertical margin={10}/>
                  <MyBubbleArea>
                    <MyBubble>
                      <ChatText>{myChat[index]}</ChatText>
                    </MyBubble>
                  </MyBubbleArea>
                </View>
              )
            })}
          </ScrollView>
          <MarginVertical margin={20}/>
        </ContentsArea>
        <InputArea>
          <Input placeholder='모리에게 무엇이든 말해보세요'/>
          <SendButton>
            <Image source={sendIcon} style={{width:28, height:28, zIndex:2}}/>
          </SendButton>
        </InputArea>
      </Body>
    </SafeAreaView>
  )
}

export default Chat

const Body = styled.View`
  width: ${() => `${size.width}px`};
  height: ${() => `${size.height}px`};
  background-color:${colors.bgColor};
  display:flex;
  align-items:center;
`

const Header = styled.View`
  width: ${() => `${size.width}px`};
  height:60px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  padding:0 20px;
  gap: 5px;
`

const ContentsArea = styled.View`
  padding: 0 20px;
  width:100%;
  height:68%;
`

const MoriProfile = styled.Image`
  width:50px;
  height:50px;
`

const MoriBubble = styled.View`
  width:90%;
  
`
const ChatText = styled.Text`
  font-size:16px;
  line-height:26px;
`

const OptionArea = styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  flex-wrap:wrap;
  gap:10px;
`

const MyBubbleArea = styled.View`
  display:flex;
  align-items:flex-end;
  width:100%;
`

const MyBubble = styled.View`
  background-color:${colors.chatOrange};
  padding:20px;
  border-radius:20px;
  display:flex;
  justify-content:center;
  align-items:center;
`

const InputArea = styled.View`
  width:100%;
  padding: 0 20px;
  display:flex;
  flex-direction:row;
  align-items:center;
`

const Input = styled.TextInput`
  width:100%;
  background-color:#fff;;
  height:50px;
  border-radius:36px;
  border: 1.5px solid ${colors.pointColor};
  padding: 12px 20px;
  font-size:16px;

`

const SendButton = styled.TouchableOpacity`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  right:40px;
`


