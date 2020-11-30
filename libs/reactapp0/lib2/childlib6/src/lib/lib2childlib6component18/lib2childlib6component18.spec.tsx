import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component18 from './lib2childlib6component18';

describe('Lib2childlib6component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component18 />);
    expect(baseElement).toBeTruthy();
  });
});
