const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
// const getIsCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = { getIsLoggedIn, getUserName };
export default authSelectors;
