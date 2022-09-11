import PropTypes from 'prop-types';
import css from "./FriendList.module.css";

import { FriendItem } from "./FriendItem";

export const FriendList = ({friends }) => {
    return (
  <ul className={css.friendList}>
            {friends.map(friend => (
        <li className="item" key ={friend.id}>
    <FriendItem isOnline ={friend.isOnline} avatar = {friend.avatar} name ={friend.name} />
    </li>
    ))}
  </ul>);
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
     isOnline : PropTypes.bool.isRequired,
    }),
    ), 
}