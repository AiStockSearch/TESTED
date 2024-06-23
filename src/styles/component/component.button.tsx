import { HaqqexButton, THaqqexButton } from '@src/styles/Typografy/HaqqexButton';
import React from 'react';

const Header = (props: THaqqexButton) => <HaqqexButton {...props} />;

export default React.memo(Header);
