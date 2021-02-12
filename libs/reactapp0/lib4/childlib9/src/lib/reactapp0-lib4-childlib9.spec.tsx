import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib4Childlib9 from './reactapp0-lib4-childlib9';

describe('Reactapp0Lib4Childlib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib4Childlib9 />);
    expect(baseElement).toBeTruthy();
  });
});
