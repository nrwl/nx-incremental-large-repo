import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component21 from './lib2childlib9component21';

describe('Lib2childlib9component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component21 />);
    expect(baseElement).toBeTruthy();
  });
});
