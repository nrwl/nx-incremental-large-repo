import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component42 from './lib2childlib6component42';

describe('Lib2childlib6component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component42 />);
    expect(baseElement).toBeTruthy();
  });
});
