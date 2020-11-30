import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component16 from './lib2childlib6component16';

describe('Lib2childlib6component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component16 />);
    expect(baseElement).toBeTruthy();
  });
});
