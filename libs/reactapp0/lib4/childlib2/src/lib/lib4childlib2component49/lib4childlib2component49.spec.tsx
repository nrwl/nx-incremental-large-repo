import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib2component49 from './lib4childlib2component49';

describe('Lib4childlib2component49', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib2component49 />);
    expect(baseElement).toBeTruthy();
  });
});
