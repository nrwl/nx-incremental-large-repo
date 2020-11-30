import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component2 from './lib4childlib2component2';

describe('Lib4childlib2component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component2 />);
    expect(baseElement).toBeTruthy();
  });
});
