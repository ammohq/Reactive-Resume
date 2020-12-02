import { get } from 'lodash';
import React, { memo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCaretRight } from 'react-icons/fa';
import PageContext from '../../../contexts/PageContext';
import { safetyCheck } from '../../../utils';
import Icons from '../Icons';

const ContactItem = ({ value, icon, link }) => {
  const { data } = useContext(PageContext);
  const Icon = get(Icons, icon && icon.toLowerCase(), FaCaretRight);

  console.log(value);
  return value ? (
    <div className="flex items-center">
      <Icon
        size="10px"
        className="mr-2"
        style={{ color: data.metadata.colors.primary }}
      />
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <span className="font-medium break-all">{value}</span>
        </a>
      ) : (
        <span className="font-medium break-all">{value}</span>
      )}
    </div>
  ) : null;
};

const Address = ({address}) => {
  return <div>
    <div>{address.line1}</div>
    <div>{address.line2}</div>
    <div>{address.pincode} {address.city}</div>
  </div>;
};

const ContactA = () => {
  const { t } = useTranslation();
  const { data } = useContext(PageContext);

  console.log(data.profile.address);


  return (
    <div className="text-xs grid gap-2">
      <ContactItem
        label={t('shared.forms.address')}
        value={<Address address={data.profile.address}/>}
        icon="address"
      />

      <ContactItem
        label={t('shared.forms.phone')}
        value={data.profile.phone}
        icon="phone"
        link={`tel:${data.profile.phone}`}
      />
      <br/>
      <ContactItem
        label={t('shared.forms.website')}
        value={data.profile.website}
        icon="website"
        link={data.profile.website}
      />
      <ContactItem
        label={t('shared.forms.email')}
        value={data.profile.email}
        icon="email"
        link={`mailto:${data.profile.email}`}
      />

      {safetyCheck(data.social) &&
      data.social.items.map((x) => (
        <ContactItem
          key={x.id}
          value={x.url}
          icon={x.network}
          link={x.url}
        />
      ))}
    </div>
  );
};

export default memo(ContactA);
