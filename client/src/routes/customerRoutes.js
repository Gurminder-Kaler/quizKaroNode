import CustomerRoute from "../common/CustomerRoute";
import CustomerDashboard from "../frontend/pages/CustomerDashboard";
import CustomerPostCreate from "../frontend/pages/post/CustomerPostCreate";
import CustomerPostEdit from "../frontend/pages/post/CustomerPostEdit";
import CustomerAllPosts from "../frontend/pages/post/CustomerAllPosts";
import CustomerAllMessages from "../frontend/pages/message/CustomerAllMessages";
import CustomerAllFriends from "../frontend/pages/friend/CustomerAllFriends";
import CustomerChatWithFriend from "../frontend/pages/friend/CustomerChatWithFriend";
import CustomerGroupChat from "../frontend/pages/group/CustomerGroupChat";
import CustomerTimeline from "../frontend/pages/timeline/CustomerTimeline";
import CustomerAllGroups from "../frontend/pages/group/CustomerAllGroups";
import CustomerAllCompanies from "../frontend/pages/company/CustomerAllCompanies";
import CustomerCompanyEdit from "../frontend/pages/company/CustomerCompanyEdit";
import CustomerCompanyCreate from "../frontend/pages/company/CustomerCompanyCreate";
let array = [
  <CustomerRoute
    exact
    path="/customer/dashboard"
    component={CustomerDashboard}
  />,
  <CustomerRoute
    exact
    path="/customer/friend"
    component={CustomerAllFriends}
  />,
  <CustomerRoute
    exact
    path="/customer/friend/chat/:userId"
    component={CustomerChatWithFriend}
  />,
  <CustomerRoute exact path="/customer/group" component={CustomerAllGroups} />,
  <CustomerRoute exact path="/customer/company" component={CustomerAllCompanies} />,
  <CustomerRoute exact path="/customer/company/edit/:id" component={CustomerCompanyEdit} />,
  <CustomerRoute exact path="/customer/company/create" component={CustomerCompanyCreate} />,
  <CustomerRoute
    exact
    path="/customer/group/chat/:groupId"
    component={CustomerGroupChat}
  />,
  <CustomerRoute exact path="/customer/post" component={CustomerAllPosts} />,
  <CustomerRoute
    exact
    path="/customer/post/create"
    component={CustomerPostCreate}
  />,
  <CustomerRoute
    exact
    path="/customer/post/edit/:id"
    component={CustomerPostEdit}
  />,
  <CustomerRoute
    exact
    path="/customer/timeline"
    component={CustomerTimeline}
  />,
  <CustomerRoute
    exact
    path="/customer/message"
    component={CustomerAllMessages}
  />,
];

export default array;
