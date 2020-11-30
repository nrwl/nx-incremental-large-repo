import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component12 from './lib2childlib7component12';

describe('Lib2childlib7component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component12 />);
    expect(baseElement).toBeTruthy();
  });
});
