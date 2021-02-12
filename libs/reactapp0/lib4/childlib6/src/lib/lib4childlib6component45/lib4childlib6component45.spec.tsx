import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component45 from './lib4childlib6component45';

describe('Lib4childlib6component45', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component45 />);
    expect(baseElement).toBeTruthy();
  });
});
