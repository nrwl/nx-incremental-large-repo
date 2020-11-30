import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component4 from './lib2childlib9component4';

describe('Lib2childlib9component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component4 />);
    expect(baseElement).toBeTruthy();
  });
});
