function signUp({ username, email, password }) {
  return new Promise((resolve, reject) => {
    resolve({ email: "test@gmail.com" });
  });
}

function signIn({ email, password }) {
  return new Promise((resolve, reject) => {
    resolve({ token: "0505199420241706" });
  });
}

function getUser(token) {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
    });
  });
}

export { signUp, signIn, getUser };
