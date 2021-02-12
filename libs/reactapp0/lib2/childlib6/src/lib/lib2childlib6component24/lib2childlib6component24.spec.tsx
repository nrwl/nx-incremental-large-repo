import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib6component24 from './lib2childlib6component24';

describe('Lib2childlib6component24', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib6component24 />);
    expect(baseElement).toBeTruthy();
  });
});
