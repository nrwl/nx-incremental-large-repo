import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component35 from './lib4childlib1component35';

describe('Lib4childlib1component35', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component35 />);
    expect(baseElement).toBeTruthy();
  });
});
