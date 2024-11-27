const movies = [];

const moviesController = {
  create: async (req, res) => {
    try {
      const movie = {
        id: movies.length + 1,
        title: req.body.title,
        director: req.body.director,
        release_date: req.body.release_date,
      };
      movies.push(movie);
      return res.status(201).send(movie);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
  getOnly: async (req, res) => {
    try {
      const movieIndex = movies.findIndex(
        (movie) => movie.id === Number(req.params.id)
      );
      if (movieIndex < 0) return res.send([]);
      const movie = movies[movieIndex];
      return res.status(201).send(movie);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
  getAll: async (req, res) => {
    try {
      return res.status(201).send(movies);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
  update: async (req, res) => {
    try {
      const movieIndex = movies.findIndex(
        (movie) => movie.id === Number(req.params.id)
      );
      if (movieIndex < 0) return res.send([]);
      const movie = {
        ...movies[movieIndex],
        title: req.body.title,
        director: req.body.director,
        release_date: req.body.release_date,
      };
      movies[movieIndex] = movie;
      return res.status(201).send(movie);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
  delete: async (req, res) => {
    try {
      const movieIndex = movies.findIndex(
        (movie) => movie.id === Number(req.params.id)
      );
      if (movieIndex < 0) return res.send([]);
      movies.splice(movieIndex, 1);
      return res.sendStatus(200);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = moviesController;
