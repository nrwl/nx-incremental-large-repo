import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component13 from './lib4childlib6component13';

describe('Lib4childlib6component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component13 />);
    expect(baseElement).toBeTruthy();
  });
});
