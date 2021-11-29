import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import Github from '@site/static/img/github.svg';
import Linkedin from '@site/static/img/linkedin.svg';

import classes from './styles.module.css';

interface ITeamMemberProps {
  image?: string;
  name: string;
  tags: string[];
  github: string;
  linkedin: string;
}

const TeamMember: React.FC<ITeamMemberProps> = ({
  image,
  name,
  tags,
  github,
  linkedin,
}) => {
  return (
    <div className={clsx(classes.team, 'col', 'col--6')}>
      <img className={classes.image} src={image} alt={name} />
      <h2>{name}</h2>
      <div className={clsx(classes.tags, 'row', 'row--no-gutters')}>
        {tags.map(tag => (
          <div key={tag} className="col col--6">
            <span>{tag}</span>
          </div>
        ))}
      </div>
      <Link to={`https://github.com/${github}`} className={classes.social}>
        <Github width={24} height={24} style={{ marginRight: 3 }} />/{github}
      </Link>
      <Link
        to={`https://linkedin.com/in/${linkedin}`}
        className={classes.social}
      >
        <Linkedin width={24} height={24} style={{ marginRight: 3 }} />/
        {linkedin}
      </Link>
    </div>
  );
};

export { TeamMember };
