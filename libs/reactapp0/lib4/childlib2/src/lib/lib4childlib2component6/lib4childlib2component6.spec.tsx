import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component6 from './lib4childlib2component6';

describe('Lib4childlib2component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component6 />);
    expect(baseElement).toBeTruthy();
  });
});
