import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component19 from './lib4childlib1component19';

describe('Lib4childlib1component19', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component19 />);
    expect(baseElement).toBeTruthy();
  });
});
