import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component5 from './lib4childlib6component5';

describe('Lib4childlib6component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component5 />);
    expect(baseElement).toBeTruthy();
  });
});
