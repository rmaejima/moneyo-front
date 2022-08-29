import React, { useEffect, useMemo, useState } from 'react';

import { FiSettings } from 'react-icons/fi';
import TimePicker, { TimePickerValue } from 'react-time-picker';
import styled from 'styled-components';

import { Button } from 'components/common/Button';
import { PageSectionTitle, PageTitle } from 'components/common/PageTitle';
import { SafeArea } from 'components/common/SafeArea';
import { TextField } from 'components/common/TextField';

import { getIdealSleepTime } from 'utils/apis/sleep';
import { formatDateToHourString } from 'utils/date';

export const Settings: React.VFC = () => {
  // TODO: 起床、就寝時間取得APIにより初期化
  const [timePickerValue, setTimePickerValue] = useState<TimePickerValue>('');
  const [sleepTime, setSleepTime] = useState<string>('');

  const idealBedinTime = useMemo(() => {
    if (timePickerValue === '') {
      return;
    }
    if (typeof timePickerValue !== 'string') {
      return new Date(
        timePickerValue.setHours(
          timePickerValue.getHours() - Number(sleepTime),
        ),
      );
    } else {
      const hour = parseInt(timePickerValue.substring(0, 2));
      const min = parseInt(timePickerValue.substring(3, 5));
      const idealWakeUpTime = new Date(2022, 1, 1, hour, min);
      return new Date(
        idealWakeUpTime.setHours(
          idealWakeUpTime.getHours() - Number(sleepTime),
        ),
      );
    }
  }, [timePickerValue, sleepTime]);

  useEffect(() => {
    getIdealSleepTime('test_user').then((data) => {
      setTimePickerValue(new Date(data.wakeUpTime));
    });
  }, []);

  return (
    <SafeArea>
      <TitleSectionContainer>
        <StyledPageTitle>
          <FiSettings />
          <h1>SETTINGS</h1>
        </StyledPageTitle>
        <Button>更新</Button>
      </TitleSectionContainer>
      <PageSectionTitle>睡眠設定</PageSectionTitle>
      <SubSectionContainer>
        <SubSectionTitle>目標起床時間</SubSectionTitle>
        <TimePicker onChange={setTimePickerValue} value={timePickerValue} />
      </SubSectionContainer>
      <SubSectionContainer>
        <SubSectionTitle>目標睡眠時間</SubSectionTitle>
        {/* TODO: 数字列バリデーション */}
        <TextField value={sleepTime} onChange={setSleepTime} />
      </SubSectionContainer>
      <SubSectionContainer>
        <SubSectionTitle>目標就寝時間</SubSectionTitle>
        {/* TODO: 起床、就寝時間から計算 */}
        {idealBedinTime && <p>{formatDateToHourString(idealBedinTime)}</p>}
      </SubSectionContainer>
    </SafeArea>
  );
};

const StyledPageTitle = styled(PageTitle)`
  margin-bottom: 0;
`;

const TitleSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
`;

const SubSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 26rem;
  margin-bottom: 2rem;
`;

const SubSectionTitle = styled.h3`
  color: ${(p) => p.theme.colors.text.base};
  font-size: 1rem;
  font-weight: bold;
`;
