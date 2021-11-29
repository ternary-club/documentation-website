import React, { useCallback } from 'react';
import clsx from 'clsx';

import Copy from '@site/static/img/copy.svg';

import classes from './styles.module.css';

interface IDockerImageProps {
  command: string;
  invert?: boolean;
}

const DockerImage: React.FC<IDockerImageProps> = ({ command, invert }) => {
  const handleCopyCommand = useCallback(
    () => navigator.clipboard.writeText(command),
    [command],
  );

  return (
    <div className={clsx(classes.command, ...(invert ? [classes.invert] : []))}>
      <span>$ {command}</span>
      <Copy width={24} height={24} onClick={handleCopyCommand} />
    </div>
  );
};

export { DockerImage };
