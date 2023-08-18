import styled from '@emotion/styled';

export const FriendsList = styled.ul`list-style: none;
width:300px`

export const ListItem = styled.li`display:flex;
box-shadow: 1px 1px 3px #8b7c7c;
border: 1px solid darkgrey;
align-items: center;
margin: 10px 0`

const getActiveColor = props => {
    switch (props.isOnline) {
        case false:
            return "red";
        case true:
            return "green";
     
    }

    
}
export const Status = styled.span`background-color: ${getActiveColor};
margin-right: 5px;
width: 10px;
    height: 10px;
    border-radius: 50%;`
