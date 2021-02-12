import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Childlib2 from './reactapp0-lib2-childlib2';

describe('Reactapp0Lib2Childlib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Childlib2 />);
    expect(baseElement).toBeTruthy();
  });
});
