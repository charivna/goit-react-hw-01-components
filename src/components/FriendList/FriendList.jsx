import { FriendsListItem } from "./FriendListItem";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {

   return  <ul className="friend-list">
        {friends.map(friend  => 
            <FriendsListItem key={friend.id} name={friend.name} isOnline={friend.isOnline} avatar={ friend.avatar} className="item"/> 
        )}
    </ul>
}

FriendList.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
})
  }
