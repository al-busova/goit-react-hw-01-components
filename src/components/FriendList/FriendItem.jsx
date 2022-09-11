import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
