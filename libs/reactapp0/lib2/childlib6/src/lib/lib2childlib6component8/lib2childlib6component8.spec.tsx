import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component8 from './lib2childlib6component8';

describe('Lib2childlib6component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component8 />);
    expect(baseElement).toBeTruthy();
  });
});
