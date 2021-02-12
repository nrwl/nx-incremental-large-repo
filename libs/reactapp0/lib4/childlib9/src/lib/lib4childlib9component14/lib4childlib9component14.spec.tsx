import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib9component14 from './lib4childlib9component14';

describe('Lib4childlib9component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib9component14 />);
    expect(baseElement).toBeTruthy();
  });
});
