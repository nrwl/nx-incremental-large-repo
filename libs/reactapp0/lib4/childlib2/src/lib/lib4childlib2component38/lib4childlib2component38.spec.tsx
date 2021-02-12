import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component38 from './lib4childlib2component38';

describe('Lib4childlib2component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component38 />);
    expect(baseElement).toBeTruthy();
  });
});
