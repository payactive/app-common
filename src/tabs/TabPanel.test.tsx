import { render } from '@testing-library/react';
import * as React from 'react';
import TabPanel from './TabPanel';


test('render tab panel', () => {

  render(
      <TabPanel value={0} index={0}>
          
      </TabPanel>
  );

});