import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component17 from './lib4childlib6component17';

describe('Lib4childlib6component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component17 />);
    expect(baseElement).toBeTruthy();
  });
});
