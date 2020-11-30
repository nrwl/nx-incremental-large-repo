import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component23 from './lib4childlib5component23';

describe('Lib4childlib5component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component23 />);
    expect(baseElement).toBeTruthy();
  });
});
