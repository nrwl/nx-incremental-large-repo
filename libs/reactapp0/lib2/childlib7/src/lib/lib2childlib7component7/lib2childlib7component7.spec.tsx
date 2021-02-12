import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component7 from './lib2childlib7component7';

describe('Lib2childlib7component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component7 />);
    expect(baseElement).toBeTruthy();
  });
});
