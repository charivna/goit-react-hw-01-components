import PropTypes from 'prop-types';
import { Card, Description, Image, Label, Name, Quantity, Stats, StatsItem, TagAndlocation, } from "./Profile.styled";


export const Profile = ({ user }) => {
    const {username , tag, location, avatar, stats:{followers, views,likes} } = user
    return <Card>
  <Description>
    <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
            <Name>{username}</Name>
            <TagAndlocation>@{tag}</TagAndlocation>
            <TagAndlocation>{location}</TagAndlocation>
  </Description>

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
                <Quantity>{followers }</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
                <Quantity>{views }</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
                <Quantity>{likes }</Quantity>
    </StatsItem>
  </Stats>
</Card>
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    })
})
  }
