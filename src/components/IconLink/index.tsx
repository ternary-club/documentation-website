import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import classes from './styles.module.css';

interface IconLinkProps {
  text: string;
  to: string;
  Icon: any;
  outline?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({ text, Icon, to, outline }) => (
  <Link
    className={clsx(
      'button',
      'button--primary',
      'button--block',
      'margin-left--sm',
      outline && 'button--outline',
      'padding--sm',
      classes.link,
    )}
    to={to}
  >
    <Icon
      className="margin-right--sm"
      style={{ transition: 'all 0.2s' }}
      color="var(--ifm-button-color)"
      width={32}
      height={32}
    />
    {text}
  </Link>
);

export { IconLink };
