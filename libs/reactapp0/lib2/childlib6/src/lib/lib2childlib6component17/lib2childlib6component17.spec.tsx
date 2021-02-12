import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component17 from './lib2childlib6component17';

describe('Lib2childlib6component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component17 />);
    expect(baseElement).toBeTruthy();
  });
});
