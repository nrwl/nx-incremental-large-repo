import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component3 from './lib4childlib6component3';

describe('Lib4childlib6component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component3 />);
    expect(baseElement).toBeTruthy();
  });
});
