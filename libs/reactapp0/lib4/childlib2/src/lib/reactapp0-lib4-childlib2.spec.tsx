import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Childlib2 from './reactapp0-lib4-childlib2';

describe('Reactapp0Lib4Childlib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Childlib2 />);
    expect(baseElement).toBeTruthy();
  });
});
