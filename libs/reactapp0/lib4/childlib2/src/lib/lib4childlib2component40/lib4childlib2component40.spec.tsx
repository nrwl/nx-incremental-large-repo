import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component40 from './lib4childlib2component40';

describe('Lib4childlib2component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component40 />);
    expect(baseElement).toBeTruthy();
  });
});
