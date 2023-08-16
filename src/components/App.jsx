import { Profile } from "./Profile/Profile";
import userInfo from "data/user.json"

export const App = () => {
  return (
    <div>
      <Profile user ={ userInfo } />
    </div>
  );
};
