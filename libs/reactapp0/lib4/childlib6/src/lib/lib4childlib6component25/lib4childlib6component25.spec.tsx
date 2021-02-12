import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component25 from './lib4childlib6component25';

describe('Lib4childlib6component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component25 />);
    expect(baseElement).toBeTruthy();
  });
});
