import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib4component14 from './lib4childlib4component14';

describe('Lib4childlib4component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib4component14 />);
    expect(baseElement).toBeTruthy();
  });
});
