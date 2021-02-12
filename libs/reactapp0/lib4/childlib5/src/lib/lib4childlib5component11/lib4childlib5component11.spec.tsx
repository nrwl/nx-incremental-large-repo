import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component11 from './lib4childlib5component11';

describe('Lib4childlib5component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component11 />);
    expect(baseElement).toBeTruthy();
  });
});
