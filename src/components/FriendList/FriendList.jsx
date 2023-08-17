import { FriendsListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {

   return  <ul className="friend-list">
        {friends.map(friend  => 
            <FriendsListItem key={friend.id} name={friend.name} isOnline={friend.isOnline} avatar={ friend.avatar} className="item"/> 
        )}
    </ul>
}

