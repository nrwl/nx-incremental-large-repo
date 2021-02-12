import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib3component41 from './lib2childlib3component41';

describe('Lib2childlib3component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib3component41 />);
    expect(baseElement).toBeTruthy();
  });
});
