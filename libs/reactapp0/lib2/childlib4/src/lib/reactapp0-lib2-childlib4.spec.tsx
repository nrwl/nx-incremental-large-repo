import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Childlib4 from './reactapp0-lib2-childlib4';

describe('Reactapp0Lib2Childlib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Childlib4 />);
    expect(baseElement).toBeTruthy();
  });
});
