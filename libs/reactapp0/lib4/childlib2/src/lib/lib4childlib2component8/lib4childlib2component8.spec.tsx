import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component8 from './lib4childlib2component8';

describe('Lib4childlib2component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component8 />);
    expect(baseElement).toBeTruthy();
  });
});
