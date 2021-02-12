import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib5component13 from './lib2childlib5component13';

describe('Lib2childlib5component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib5component13 />);
    expect(baseElement).toBeTruthy();
  });
});
