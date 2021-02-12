import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib1Lib1 from './reactapp0-lib1-lib1';

describe('Reactapp0Lib1Lib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib1Lib1 />);
    expect(baseElement).toBeTruthy();
  });
});
