import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component28 from './lib4childlib2component28';

describe('Lib4childlib2component28', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component28 />);
    expect(baseElement).toBeTruthy();
  });
});
