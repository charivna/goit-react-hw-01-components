import { FriendsListItem } from "./FriendListItem";
import PropTypes from 'prop-types';
import { FriendsList } from "./FriendList.styled";

export const FriendList = ({ friends }) => {

   return  <FriendsList>
        {friends.map(friend  => 
            <FriendsListItem key={friend.id} name={friend.name} isOnline={friend.isOnline} avatar={ friend.avatar}/> 
        )}
    </FriendsList>
}

FriendList.propTypes = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
})
  }
