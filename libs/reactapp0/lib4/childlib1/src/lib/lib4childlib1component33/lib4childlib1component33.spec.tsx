import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component33 from './lib4childlib1component33';

describe('Lib4childlib1component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component33 />);
    expect(baseElement).toBeTruthy();
  });
});
