import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib7component13 from './lib2childlib7component13';

describe('Lib2childlib7component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib7component13 />);
    expect(baseElement).toBeTruthy();
  });
});
