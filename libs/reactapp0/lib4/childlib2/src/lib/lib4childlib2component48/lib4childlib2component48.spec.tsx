import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component48 from './lib4childlib2component48';

describe('Lib4childlib2component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component48 />);
    expect(baseElement).toBeTruthy();
  });
});
