import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component38 from './lib4childlib1component38';

describe('Lib4childlib1component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component38 />);
    expect(baseElement).toBeTruthy();
  });
});
