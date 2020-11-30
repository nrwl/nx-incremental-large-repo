import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component27 from './lib4childlib2component27';

describe('Lib4childlib2component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component27 />);
    expect(baseElement).toBeTruthy();
  });
});
