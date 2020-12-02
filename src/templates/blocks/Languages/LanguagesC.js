import React, { memo, useContext } from 'react';
import PageContext from '../../../contexts/PageContext';
import { safetyCheck } from '../../../utils';

const LanguageItem = (x) => (
  <div key={x.id} className="flex flex-col">
    <span className="text-xs font-semibold">{x.name}</span>
    <span className="text-xs">{x.fluency}</span>
  </div>
);

const LanguagesC = () => {
  const { data, heading: Heading } = useContext(PageContext);

  return safetyCheck(data.languages) ? (
    <div>
      <Heading>{data.languages.heading}</Heading>
      <div className="grid gap-2">{data.languages.items.map(LanguageItem)}</div>
    </div>
  ) : null;
};

export default memo(LanguagesC);
