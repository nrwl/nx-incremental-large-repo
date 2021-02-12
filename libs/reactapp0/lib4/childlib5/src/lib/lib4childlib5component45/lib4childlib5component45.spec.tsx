import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component45 from './lib4childlib5component45';

describe('Lib4childlib5component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component45 />);
    expect(baseElement).toBeTruthy();
  });
});
