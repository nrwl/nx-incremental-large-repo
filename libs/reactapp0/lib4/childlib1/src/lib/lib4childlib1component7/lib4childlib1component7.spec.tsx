import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib1component7 from './lib4childlib1component7';

describe('Lib4childlib1component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib1component7 />);
    expect(baseElement).toBeTruthy();
  });
});
