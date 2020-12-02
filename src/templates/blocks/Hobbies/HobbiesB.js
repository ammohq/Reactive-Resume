import React, { memo, useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { safetyCheck } from '../../../utils';

const HobbyB = (x) => (
  <div key={x.id}>
    <span className="text-xs font-semibold">{x.name}</span>
  </div>
);

const HobbiesB = () => {
  const { data, heading: Heading } = useContext(PageContext);

  return safetyCheck(data.hobbies) ? (
    <div>
      <Heading>{data.hobbies.heading}</Heading>
      <div className="grid gap-2">{data.hobbies.items.map(HobbyB)}</div>
    </div>
  ) : null;
};

export default memo(HobbiesB);
