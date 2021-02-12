import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib6component23 from './lib4childlib6component23';

describe('Lib4childlib6component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib6component23 />);
    expect(baseElement).toBeTruthy();
  });
});
