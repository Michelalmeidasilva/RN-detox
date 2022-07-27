import React, { ReactNode } from 'react';

import { UserProvider } from './user';

interface Props {
  children: ReactNode;
}

const AppProviders = ({ children }: Props): JSX.Element => <UserProvider>{children}</UserProvider>;

export default AppProviders;
