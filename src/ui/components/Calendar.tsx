import React, { Dispatch, SetStateAction, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { View } from 'react-native';
import styled from '@emotion/native';
import MarginVertical from './MarginVertical';
import { colors } from '../styles/color';
import CalendarTagEl from './CalendarTagEl';

type CalendarProps = {
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
  isNext: boolean;
};

const Calendar = ({ selectedDate, setSelectedDate, isNext }: CalendarProps) => {
  const [currentMonth] = useState(isNext ? dayjs().add(1,'month') : dayjs());
  const startOfMonth = currentMonth.startOf('month');
  const endOfMonth = currentMonth.endOf('month');
  const startDay = startOfMonth.day();   // 0: 일 ~ 6: 토
  const daysInMonth = endOfMonth.date();

  // 1) 날짜 배열 (null = 빈칸)
  const daysArray: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  // 2) 7개씩 잘라서 2차원 배열(행) 생성
  const rows: (number | null)[][] = [];
  for (let i = 0; i < daysArray.length; i += 7) {
    rows.push(daysArray.slice(i, i + 7));
  }

  return (
    <Container>
      <Header>
        <MonthText>{currentMonth.format('M월')}</MonthText>
      </Header>

      <BodyWrapper>
        <MarginVertical margin={20} />

        {/* 요일 헤더 */}
        <WeekRow>
          {['일', '월', '화', '수', '목', '금', '토'].map(day => {
            const isWeekendHeader = day === '일' || day === '토';
            return (
              <WeekDay key={day} weekend={isWeekendHeader}>
                {day}
              </WeekDay>
            );
          })}
        </WeekRow>
        <HeaderBorder />

        {/* 날짜 행(Row)들 */}
        {rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <Row>
              {row.map((item, idx) => {
                const currentDate = item
                  ? currentMonth.date(item)
                  : null;
                const isSelected =
                  !!item &&
                  selectedDate.format('YYYY-MM-DD') ===
                    currentDate?.format('YYYY-MM-DD');
                const isWeekend =
                  currentDate?.day() === 0 || currentDate?.day() === 6;

                return (
                  <DateCell
                    key={idx}
                    onPress={() => {
                      if (item)
                        setSelectedDate(
                          currentMonth.date(item)
                        );
                    }}
                  >
                    <DateText
                      isSelected={isSelected}
                      isWeekend={isWeekend}
                    >
                      {item ?? ''}
                    </DateText>
                    {idx === 5 ? 
                    <CalendarTagEl text={"O"}/>
                    :<></>}
                  </DateCell>
                );
              })}
            </Row>
            {/* 각 행 아래에 BorderLine */}
            {rowIndex+1 !== rows.length ? <RowBorder /> : <></>}
            
          </React.Fragment>
        ))}
      </BodyWrapper>
    </Container>
  );
};

export default Calendar;

/* Styled Components */
const Container = styled.View`
  flex: 1;
  padding: 0;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

const MonthText = styled.Text`
  font-size: 36px;
  font-weight: 600;
  color: ${colors.fontMain};
`;

const BodyWrapper = styled(View)`
  background-color: #fff;
  border-radius: 10px;
  padding-bottom: 16px;
`;

const WeekRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 8px;
  margin-bottom: 8px;
`;

const WeekDay = styled.Text<{ weekend: boolean }>`
  width: 14.2%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${props =>
    props.weekend ? '#C8B9A6' : colors.fontMain};
`;

const HeaderBorder = styled.View`
  height: 0.5px;
  background-color: #C8B9A6;
  width: 100%;
  margin-bottom: 8px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 8px;
  margin-bottom: 8px;
`;

const RowBorder = styled.View`
  height: 0.8px;
  background-color:#C8B9A6;
  width: 100%;
  margin-bottom: 8px;
`;

const DateCell = styled.TouchableOpacity`
  width: 14.2%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
`;

const DateText = styled.Text<{
  isSelected: boolean;
  isWeekend: boolean;
}>`
  font-size: 16px;
  font-weight: 500;
  color: ${props =>
    props.isSelected
      ? '#fff'
      : props.isWeekend
      ? '#C8B9A6'
      : colors.fontMain};
`;
