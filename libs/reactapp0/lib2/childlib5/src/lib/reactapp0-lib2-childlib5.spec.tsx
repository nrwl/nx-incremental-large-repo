import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Childlib5 from './reactapp0-lib2-childlib5';

describe('Reactapp0Lib2Childlib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Childlib5 />);
    expect(baseElement).toBeTruthy();
  });
});
