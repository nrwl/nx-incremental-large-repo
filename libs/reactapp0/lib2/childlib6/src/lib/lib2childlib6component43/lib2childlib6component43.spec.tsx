import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component43 from './lib2childlib6component43';

describe('Lib2childlib6component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component43 />);
    expect(baseElement).toBeTruthy();
  });
});
