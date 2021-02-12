import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component4 from './lib4childlib6component4';

describe('Lib4childlib6component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component4 />);
    expect(baseElement).toBeTruthy();
  });
});
