import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component42 from './lib4childlib6component42';

describe('Lib4childlib6component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component42 />);
    expect(baseElement).toBeTruthy();
  });
});
