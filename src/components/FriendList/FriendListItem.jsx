
import PropTypes from 'prop-types';
import { ListItem, Status } from './FriendList.styled';

export const FriendsListItem = ({ name, avatar, isOnline }) => {
    return   <ListItem>
        <Status isOnline={isOnline }>{isOnline}</Status>
        <img className="avatar" src={avatar } alt="User avatar" width="48" />
        <p className="name">{name }</p>
</ListItem>
}

FriendsListItem.propTypes = {
   
       avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
}
  