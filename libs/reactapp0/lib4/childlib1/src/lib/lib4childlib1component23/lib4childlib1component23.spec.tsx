import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component23 from './lib4childlib1component23';

describe('Lib4childlib1component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component23 />);
    expect(baseElement).toBeTruthy();
  });
});
