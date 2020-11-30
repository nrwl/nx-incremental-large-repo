import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Childlib6 from './reactapp0-lib2-childlib6';

describe('Reactapp0Lib2Childlib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Childlib6 />);
    expect(baseElement).toBeTruthy();
  });
});
