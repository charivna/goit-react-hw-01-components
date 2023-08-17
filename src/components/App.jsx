import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import userInfo from "data/user.json";
import dataStat from "data/data.json";
import friends from "data/friends.json";
import transaction from "data/transactions.json"


export const App = () => {
  return (
    <div>
      <h2>Task 1</h2>
      <Profile user={userInfo} />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={dataStat} />
      <h2>Task 3</h2>
      <FriendList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={ transaction} />
    </div>
  );
};
