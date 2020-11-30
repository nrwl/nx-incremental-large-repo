import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component30 from './lib4childlib2component30';

describe('Lib4childlib2component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component30 />);
    expect(baseElement).toBeTruthy();
  });
});
