import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component7 from './lib2childlib5component7';

describe('Lib2childlib5component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component7 />);
    expect(baseElement).toBeTruthy();
  });
});
