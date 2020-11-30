import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component25 from './lib2childlib5component25';

describe('Lib2childlib5component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component25 />);
    expect(baseElement).toBeTruthy();
  });
});
