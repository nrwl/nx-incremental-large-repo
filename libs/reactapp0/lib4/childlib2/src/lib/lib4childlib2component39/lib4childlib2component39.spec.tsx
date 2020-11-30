import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component39 from './lib4childlib2component39';

describe('Lib4childlib2component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component39 />);
    expect(baseElement).toBeTruthy();
  });
});
