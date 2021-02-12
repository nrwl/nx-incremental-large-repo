import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component7 from './lib4childlib5component7';

describe('Lib4childlib5component7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component7 />);
    expect(baseElement).toBeTruthy();
  });
});
