import React, { useState } from 'react';

import { useModal } from 'react-hooks-use-modal';
import styled from 'styled-components';

import { Button } from 'components/common/Button';

interface Props {
  onCompleteBedIn?: () => void;
  children: React.ReactNode;
}

export const BedInDialogProvider: React.VFC<Props> = ({
  onCompleteBedIn,
  children,
}) => {
  const [BedInModal, openBedInModal, closeBedInModal] = useModal('root', {
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

  const [willCloseWindow, setWillCloseWindow] = useState<boolean>(false);

  const onClickBedInButton = async () => {
    closeBedInModal();
    openCompletionModal();
  };

  const onClickCompletionButton = async () => {
    onCompleteBedIn?.();
    setWillCloseWindow(true);
    await new Promise((s) => setTimeout(s, 3000));
    closeCompletionModal();
    window.open('about:blank', '_self');
    window.close();
  };

  return (
    <>
      <OpenBox onClick={openBedInModal}>{children}</OpenBox>
      <BedInModal>
        <ModalContainer>
          {/* TODO: 誤差の時間によってメッセージを変更 */}
          <ModalTitle>今日も一日お疲れ様です！</ModalTitle>
          <ModalMessage>
            よく頑張りました！！しっかり寝て明日に備えましょう！
            <br />
            <br />
            現在の時刻: 〇〇
            <br />
            目標就寝時間: 〇〇
            <br />
          </ModalMessage>
          <ActionSectionContainer>
            <Button onClick={onClickBedInButton}>おやすみなさい</Button>
          </ActionSectionContainer>
        </ModalContainer>
      </BedInModal>
      <CompletionModal>
        <ModalContainer>
          {willCloseWindow ? (
            <ModalTitle>3秒後にウィンドウが閉じます</ModalTitle>
          ) : (
            <>
              {/* TODO: 誤差の時間によってメッセージを変更 */}
              <ModalTitle>勇者が成長しました！</ModalTitle>
              <ModalMessage>
                規則正しい就寝により、勇者が成長しました！
                <br />
                <br />
                獲得経験値: 〇〇
                <br />
                次のレベルまで: 〇〇
                <br />
              </ModalMessage>
              <ActionSectionContainer>
                <Button onClick={onClickCompletionButton}>
                  明日も頑張るぞ！
                </Button>
              </ActionSectionContainer>
            </>
          )}
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
