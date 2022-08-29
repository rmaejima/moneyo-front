import React from 'react';

import { FiSettings } from 'react-icons/fi';
import styled from 'styled-components';

import { PageSectionTitle, PageTitle } from 'components/common/PageTitle';
import { SafeArea } from 'components/common/SafeArea';

export const Settings: React.VFC = () => {
  return (
    <SafeArea>
      <PageTitle>
        <FiSettings />
        <h1>SETTINGS</h1>
      </PageTitle>
      <PageSectionTitle>目標起床時間の設定</PageSectionTitle>
    </SafeArea>
  );
};
