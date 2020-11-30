import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib7component41 from './lib4childlib7component41';

describe('Lib4childlib7component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib7component41 />);
    expect(baseElement).toBeTruthy();
  });
});
