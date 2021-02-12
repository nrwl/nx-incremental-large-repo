import React from 'react';
import { render } from '@testing-library/react';

import Reactapp0Lib3Lib3 from './reactapp0-lib3-lib3';

describe('Reactapp0Lib3Lib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reactapp0Lib3Lib3 />);
    expect(baseElement).toBeTruthy();
  });
});
