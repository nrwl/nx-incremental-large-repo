import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component19 from './lib2childlib5component19';

describe('Lib2childlib5component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component19 />);
    expect(baseElement).toBeTruthy();
  });
});
