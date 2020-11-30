import React from 'react';
import { render } from '@testing-library/react';

import Lib4childlib3component33 from './lib4childlib3component33';

describe('Lib4childlib3component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib4childlib3component33 />);
    expect(baseElement).toBeTruthy();
  });
});
