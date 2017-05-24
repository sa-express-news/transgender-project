import React from 'react';
import _ from 'lodash';

import './Bios.scss';

import Card from 'grommet/components/Card';

export default props => {
  console.log(props);
  return (
    <Card 
      full={true}
      colorIndex="grey-1"
      description="meatwich"
    />
  );
};