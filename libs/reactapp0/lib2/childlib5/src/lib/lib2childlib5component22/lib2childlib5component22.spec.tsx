import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component22 from './lib2childlib5component22';

describe('Lib2childlib5component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component22 />);
    expect(baseElement).toBeTruthy();
  });
});
