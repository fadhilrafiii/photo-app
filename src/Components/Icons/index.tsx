import React from 'react';

import { Colors } from 'Shared/Constants/Colors';

import { IconName } from './enum';
import AddIcon from './Svgs/Add';
import EmailIcon from './Svgs/Email';
import LocationIcon from './Svgs/Location';
import VerifiedIcon from './Svgs/Verified';

interface IconProps {
  name: IconName;
  fill?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, fill = Colors.Primary, size = 16 }: IconProps) => {
  switch (name) {
    case IconName.Email:
      return <EmailIcon fill={fill} size={size} />;
    case IconName.Location:
      return <LocationIcon fill={fill} size={size} />;
    case IconName.Verified:
      return <VerifiedIcon fill={fill} size={size} />;
    case IconName.Add:
      return <AddIcon fill={fill} size={size} />;
  }
};

export default Icon;
