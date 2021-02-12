import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component29 from './lib4childlib2component29';

describe('Lib4childlib2component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component29 />);
    expect(baseElement).toBeTruthy();
  });
});
