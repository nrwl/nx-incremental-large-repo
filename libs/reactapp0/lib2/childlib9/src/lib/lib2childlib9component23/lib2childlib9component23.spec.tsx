import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib9component23 from './lib2childlib9component23';

describe('Lib2childlib9component23', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib9component23 />);
    expect(baseElement).toBeTruthy();
  });
});
