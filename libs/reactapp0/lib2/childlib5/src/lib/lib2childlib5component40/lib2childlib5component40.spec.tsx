import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component40 from './lib2childlib5component40';

describe('Lib2childlib5component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component40 />);
    expect(baseElement).toBeTruthy();
  });
});
