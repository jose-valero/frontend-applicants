export const transoformData = (users) => {
  const valuesToReturn = [];
  users.map((oneUser) => {
    const usr = {
      userName: oneUser.login ? oneUser.login : oneUser.username,
      id: oneUser.id,
      url: oneUser.html_url ? oneUser.html_url : oneUser.web_url,
      avatar: oneUser.avatar_url,
    };
    valuesToReturn.push(usr);
  });
  return valuesToReturn;
};
