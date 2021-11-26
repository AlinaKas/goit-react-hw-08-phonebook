const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.name;

const authSelectors = { getIsLoggedIn, getUserName };
export default authSelectors;
