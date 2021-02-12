import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component31 from './lib2childlib5component31';

describe('Lib2childlib5component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component31 />);
    expect(baseElement).toBeTruthy();
  });
});
