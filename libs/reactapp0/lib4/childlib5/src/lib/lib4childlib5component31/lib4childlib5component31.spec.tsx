import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component31 from './lib4childlib5component31';

describe('Lib4childlib5component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component31 />);
    expect(baseElement).toBeTruthy();
  });
});
