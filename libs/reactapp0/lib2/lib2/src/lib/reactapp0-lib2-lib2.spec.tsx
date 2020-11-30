import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib2Lib2 from './reactapp0-lib2-lib2';

describe('Reactapp0Lib2Lib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib2Lib2 />);
    expect(baseElement).toBeTruthy();
  });
});
