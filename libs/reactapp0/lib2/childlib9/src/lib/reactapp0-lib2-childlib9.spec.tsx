import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Childlib9 from './reactapp0-lib2-childlib9';

describe('Reactapp0Lib2Childlib9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Childlib9 />);
    expect(baseElement).toBeTruthy();
  });
});
