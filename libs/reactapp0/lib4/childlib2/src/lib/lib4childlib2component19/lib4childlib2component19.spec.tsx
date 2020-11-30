import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component19 from './lib4childlib2component19';

describe('Lib4childlib2component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component19 />);
    expect(baseElement).toBeTruthy();
  });
});
