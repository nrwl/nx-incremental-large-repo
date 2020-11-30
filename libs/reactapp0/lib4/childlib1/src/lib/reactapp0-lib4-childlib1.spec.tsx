import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Childlib1 from './reactapp0-lib4-childlib1';

describe('Reactapp0Lib4Childlib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Childlib1 />);
    expect(baseElement).toBeTruthy();
  });
});
