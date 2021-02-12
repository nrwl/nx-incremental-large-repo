import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component35 from './lib4childlib2component35';

describe('Lib4childlib2component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component35 />);
    expect(baseElement).toBeTruthy();
  });
});
