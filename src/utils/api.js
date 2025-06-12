const mockUsers = [
  { email: "test@example.com", password: "secure123", name: "Test User" },
];

// Register new user
export const register = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = mockUsers.find((user) => user.email === email);
      if (exists) {
        reject(new Error("User already exists"));
      } else {
        const newUser = { email, password, name: email.split("@")[0] };
        mockUsers.push(newUser);
        resolve({ message: "User registered successfully" });
      }
    }, 1000);
  });
};

// Login existing user
export const login = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        resolve({ token: "mock-token", user });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};
