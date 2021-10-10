export async function loginUser({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "jose" && password === "123") {
        resolve();
      } else {
        reject();
      }
    }, 500);
  });
}
