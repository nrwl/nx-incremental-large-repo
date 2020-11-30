import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component33 from './lib4childlib5component33';

describe('Lib4childlib5component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component33 />);
    expect(baseElement).toBeTruthy();
  });
});
