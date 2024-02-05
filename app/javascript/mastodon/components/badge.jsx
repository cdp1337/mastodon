import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import { ReactComponent as GroupsIcon } from '@material-design-icons/svg/outlined/group.svg';
import { ReactComponent as PersonIcon } from '@material-design-icons/svg/outlined/person.svg';
import { ReactComponent as SmartToyIcon } from '@material-design-icons/svg/outlined/smart_toy.svg';


export const Badge = ({ icon, label, domain, color }) => {

  let styles = {
    borderColor: color,
    color: color
  };

  return (
    <div className='account-role' style={styles}>
      {icon}
      {label}
      {domain && <span className='account-role__domain'>{domain}</span>}
    </div>
  );
};

Badge.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.node,
  domain: PropTypes.node,
  color: PropTypes.node,
};

Badge.defaultProps = {
  icon: <PersonIcon />,
  color: '#8c8dff',
};

export const GroupBadge = () => (
  <Badge icon={<GroupsIcon />} label={<FormattedMessage id='account.badges.group' defaultMessage='Group' />} />
);

export const AutomatedBadge = () => (
  <Badge icon={<SmartToyIcon />} label={<FormattedMessage id='account.badges.bot' defaultMessage='Automated' />} />
);
