import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component16 from './lib4childlib2component16';

describe('Lib4childlib2component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component16 />);
    expect(baseElement).toBeTruthy();
  });
});
