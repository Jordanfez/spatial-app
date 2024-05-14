import axios from "../axios";

async function login(email, password) {

  return await axios.post(`/auth/authenticate`,
    {
      email,
      password
    }

  );
}
export { login };
