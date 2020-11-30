import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component11 from './lib2childlib9component11';

describe('Lib2childlib9component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component11 />);
    expect(baseElement).toBeTruthy();
  });
});
