import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib6component7 from './lib0childlib6component7';

describe('Lib0childlib6component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib6component7 />);
    expect(baseElement).toBeTruthy();
  });
});
