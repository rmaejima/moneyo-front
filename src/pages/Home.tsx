import React from 'react';
import { FaHome } from 'react-icons/fa';

import { PageTitle } from 'components/common/PageTitle';
import { SafeArea } from 'components/common/SafeArea';

export const Home: React.VFC = () => {
  return (
    <SafeArea>
      <PageTitle>
        <FaHome />
        <h1>HOME</h1>
      </PageTitle>
    </SafeArea>
  );
};
