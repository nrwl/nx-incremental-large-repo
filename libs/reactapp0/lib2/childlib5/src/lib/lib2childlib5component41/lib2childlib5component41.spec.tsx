import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component41 from './lib2childlib5component41';

describe('Lib2childlib5component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component41 />);
    expect(baseElement).toBeTruthy();
  });
});
