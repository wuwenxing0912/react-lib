import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classes';

interface iconProps extends React.SVGAttributes<SVGElement> {
  name: string;
};

const Icon: React.FunctionComponent<iconProps> = ({className, name, ...restProps}) => {
  return (
    <svg className={classes('icon', className)} {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
}

export default Icon;