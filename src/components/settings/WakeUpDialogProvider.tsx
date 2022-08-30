import React from 'react';

import braveIcon from 'assets/user.png';
import { useModal } from 'react-hooks-use-modal';
import styled, { keyframes } from 'styled-components';

import { Button } from 'components/common/Button';

interface Props {
  onCompleteWakeUp?: () => void;
  children: React.ReactNode;
}

export const WakeUpDialogProvider: React.VFC<Props> = ({
  onCompleteWakeUp,
  children,
}) => {
  const [WakeUpModal, openWakeUpModal, closeWakeUpModal] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: true,
  });

  const [CompletionModal, openCompletionModal, closeCompletionModal] = useModal(
    'root',
    {
      preventScroll: true,
      closeOnOverlayClick: false,
    },
  );

  const onClickBedInButton = async () => {
    closeWakeUpModal();
    openCompletionModal();
  };

  const onClickCompletionButton = async () => {
    localStorage.setItem('NEXT_ACTION', 'BED_IN');
    closeCompletionModal();
    onCompleteWakeUp?.();
  };

  return (
    <>
      <OpenBox onClick={openWakeUpModal}>{children}</OpenBox>
      <WakeUpModal>
        <ModalContainer>
          {/* TODO: 誤差の時間によってメッセージを変更 */}
          <ModalTitle>おはようございます！！</ModalTitle>
          <ModalMessage>
            今日も一日がんばりましょう！
            <br />
            <br />
            現在の時刻: 〇〇
            <br />
            目標就寝時間: 〇〇
            <br />
          </ModalMessage>
          <ActionSectionContainer>
            <Button onClick={onClickBedInButton}>おはようございます</Button>
          </ActionSectionContainer>
        </ModalContainer>
      </WakeUpModal>
      <CompletionModal>
        <ModalContainer>
          {/* TODO: 誤差の時間によってメッセージを変更 */}
          <ModalTitle>勇者が成長しました！</ModalTitle>
          <BraveIcon src={braveIcon} />
          <ModalMessage>
            規則正しい起床により、勇者が成長しました！
            <br />
            <br />
            獲得経験値: 〇〇
            <br />
            次のレベルまで: 〇〇
            <br />
          </ModalMessage>
          <ActionSectionContainer>
            <Button onClick={onClickCompletionButton}>今日も頑張るぞ！</Button>
          </ActionSectionContainer>
        </ModalContainer>
      </CompletionModal>
    </>
  );
};

const OpenBox = styled.div`
  display: inline-block;
`;

const ModalContainer = styled.div`
  width: 35rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
`;

const ModalTitle = styled.h1`
  margin-bottom: 1rem;
  color: ${(p) => p.theme.colors.text.base};
  font-size: 1.5rem;
  font-weight: bold;
`;

const ModalMessage = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const ActionSectionContainer = styled.div`
  display: flex;
  justify-content: end;
  > :not(:first-child) {
    margin-left: 1rem;
  }
`;

const DashKeyframes = keyframes`
 100% {
      transform: scale(1, 1);
    }
`;

const BraveIcon = styled.img`
  display: block;
  margin: 1rem auto;
  height: 15rem;

  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-duration: 0.75s;
  animation-name: ${DashKeyframes};
  transform: scale(0.85, 0.85);
`;
