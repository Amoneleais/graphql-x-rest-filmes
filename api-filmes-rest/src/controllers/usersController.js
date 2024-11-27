const users = [];

const usersController = {
  create: async (req, res) => {
    try {
      const user = {
        id: users.length + 1,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        birthdate: req.body.birthdate,
      };
      users.push(user);
      return res.status(201).send(user);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
  getOnly: async (req, res) => {
    try {
      const userIndex = users.findIndex(
        (user) => user.id === Number(req.params.id)
      );
      if (userIndex < 0) return res.send([]);
      const user = users[userIndex];
      return res.status(201).send(user);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
  getAll: async (req, res) => {
    try {
      return res.status(201).send(users);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
  update: async (req, res) => {
    try {
      const userIndex = users.findIndex(
        (user) => user.id === Number(req.params.id)
      );
      if (userIndex < 0) return res.send([]);
      const user = {
        ...users[userIndex],
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        birthdate: req.body.birthdate,
      };
      users[userIndex] = user;
      return res.status(201).send(user);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
  delete: async (req, res) => {
    try {
      const userIndex = users.findIndex(
        (user) => user.id === Number(req.params.id)
      );
      if (userIndex < 0) return res.send([]);
      users.splice(userIndex, 1);
      return res.sendStatus(200);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = usersController;
