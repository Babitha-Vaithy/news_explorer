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

export { signUp, signIn };
