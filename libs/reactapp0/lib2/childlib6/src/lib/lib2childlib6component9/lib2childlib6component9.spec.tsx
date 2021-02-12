import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component9 from './lib2childlib6component9';

describe('Lib2childlib6component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component9 />);
    expect(baseElement).toBeTruthy();
  });
});
