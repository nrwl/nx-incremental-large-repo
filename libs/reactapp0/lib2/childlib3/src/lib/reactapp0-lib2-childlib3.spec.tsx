import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Childlib3 from './reactapp0-lib2-childlib3';

describe('Reactapp0Lib2Childlib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Childlib3 />);
    expect(baseElement).toBeTruthy();
  });
});
