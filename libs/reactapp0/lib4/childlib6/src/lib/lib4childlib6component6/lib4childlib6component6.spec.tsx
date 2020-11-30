import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component6 from './lib4childlib6component6';

describe('Lib4childlib6component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component6 />);
    expect(baseElement).toBeTruthy();
  });
});
