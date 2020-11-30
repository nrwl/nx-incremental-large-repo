import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component5 from './lib2childlib6component5';

describe('Lib2childlib6component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component5 />);
    expect(baseElement).toBeTruthy();
  });
});
