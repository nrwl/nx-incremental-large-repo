import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib0component23 from './lib4childlib0component23';

describe('Lib4childlib0component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib0component23 />);
    expect(baseElement).toBeTruthy();
  });
});
