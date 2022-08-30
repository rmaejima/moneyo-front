import React, { useEffect, useState } from 'react';

import { FiSettings } from 'react-icons/fi';
import TimePicker, { TimePickerValue } from 'react-time-picker';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Button } from 'components/common/Button';
import { LoadingSpinner } from 'components/common/LoadingSpinner';
import { PageSectionTitle, PageTitle } from 'components/common/PageTitle';
import { SafeArea } from 'components/common/SafeArea';
import { ConfirmDialogProvider } from 'components/settings/ConfirmDialogProvider';

import {
  IdealSleepRequest, // getIdealSleepTime,
  postIdealSleepTime,
} from 'utils/apis/sleep';
import { useUser } from 'utils/apis/user';
import { colors } from 'utils/theme';

export const Settings: React.VFC = () => {
  const { user, isLoading, refetchUser } = useUser('test_user');

  // TODO: 起床、就寝時間取得APIにより初期化
  const [wakeUpTime, setWakeUpTime] = useState<TimePickerValue>('');
  const [bedInTime, setBedInTime] = useState<TimePickerValue>('');

  useEffect(() => {
    if (!user) {
      return;
    }
    setWakeUpTime(user.wakeUpTime);
    setBedInTime(user.bedTime);
  }, [user]);

  const onClickUpdateSettingsButton = async () => {
    // TODO: 実データに置き換える
    const wakeUp = new Date();
    const bedIn = new Date(wakeUp.getHours() - 8);
    const reqBody: IdealSleepRequest = {
      userId: 'test_user',
      wakeUpTime: wakeUp.getTime(),
      bedTime: bedIn.getTime(),
    };
    await postIdealSleepTime(reqBody);
    refetchUser();
    toast.info('更新しました');
  };

  return (
    <SafeArea>
      {isLoading && (
        <LoadingSpinnerContainer>
          <LoadingSpinner size="2rem" color={colors.text.light} />
        </LoadingSpinnerContainer>
      )}
      {user && (
        <>
          <TitleSectionContainer>
            <StyledPageTitle>
              <FiSettings />
              <h1>SETTINGS</h1>
            </StyledPageTitle>
            <ConfirmDialogProvider
              title="設定を更新します"
              message="一度更新すると元に戻せません。設定を更新してもよろしいですか？"
              onClickConfirmButton={onClickUpdateSettingsButton}
            >
              <Button>更新</Button>
            </ConfirmDialogProvider>
          </TitleSectionContainer>
          <PageSectionTitle>睡眠設定</PageSectionTitle>
          <SubSectionContainer>
            <SubSectionTitle>目標起床時間</SubSectionTitle>
            <TimePicker onChange={setWakeUpTime} value={wakeUpTime} />
          </SubSectionContainer>
          <SubSectionContainer>
            <SubSectionTitle>目標就寝時間</SubSectionTitle>
            {/* TODO: 起床、就寝時間から計算 */}
            <TimePicker onChange={setBedInTime} value={bedInTime} />
          </SubSectionContainer>
        </>
      )}
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

const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;
`;
