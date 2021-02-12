import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component41 from './lib2childlib6component41';

describe('Lib2childlib6component41', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component41 />);
    expect(baseElement).toBeTruthy();
  });
});
