import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component24 from './lib4childlib6component24';

describe('Lib4childlib6component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component24 />);
    expect(baseElement).toBeTruthy();
  });
});
