import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component31 from './lib4childlib6component31';

describe('Lib4childlib6component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component31 />);
    expect(baseElement).toBeTruthy();
  });
});
