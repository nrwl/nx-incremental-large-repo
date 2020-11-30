import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component13 from './lib2childlib6component13';

describe('Lib2childlib6component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component13 />);
    expect(baseElement).toBeTruthy();
  });
});
