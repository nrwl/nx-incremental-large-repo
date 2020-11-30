import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component23 from './lib2childlib5component23';

describe('Lib2childlib5component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component23 />);
    expect(baseElement).toBeTruthy();
  });
});
