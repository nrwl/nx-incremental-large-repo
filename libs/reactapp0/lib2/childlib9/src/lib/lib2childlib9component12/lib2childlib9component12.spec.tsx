import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component12 from './lib2childlib9component12';

describe('Lib2childlib9component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component12 />);
    expect(baseElement).toBeTruthy();
  });
});
