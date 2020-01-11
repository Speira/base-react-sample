const fakeUser = {
  username: 'test',
};

/**
 * fakeAuthUser
 * @param {String} inputs.id
 *
 */
function fakeAuthUser(inputs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputs.username === 'toto') resolve(fakeUser);
      else reject();
    }, 3000);
  });
}

export default fakeAuthUser;
