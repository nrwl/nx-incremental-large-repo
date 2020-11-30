import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib5component30 from './lib4childlib5component30';

describe('Lib4childlib5component30', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib5component30 />);
    expect(baseElement).toBeTruthy();
  });
});
