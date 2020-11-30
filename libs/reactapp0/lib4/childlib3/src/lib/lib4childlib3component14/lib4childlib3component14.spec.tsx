import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component14 from './lib4childlib3component14';

describe('Lib4childlib3component14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component14 />);
    expect(baseElement).toBeTruthy();
  });
});
