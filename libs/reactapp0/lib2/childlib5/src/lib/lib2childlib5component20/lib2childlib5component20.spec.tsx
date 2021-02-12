import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component20 from './lib2childlib5component20';

describe('Lib2childlib5component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component20 />);
    expect(baseElement).toBeTruthy();
  });
});
