const Joke = require("../models/jokesModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const jokes = await Joke.find();
  // 2) Build template
  res.status(200).render("overview", {
    title: "All Jokes",
    jokes,
  });
});

exports.getRandomJoke = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const jokes = await Joke.find();
  const rn = Math.floor(Math.random() * jokes.length);
  const joke = jokes[rn];
  // 2) Build template
  res.status(200).render("random", {
    title: "Random Joke",
    joke,
  });
});

exports.getProgrammingJoke = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allJokes = await Joke.find();
  const jokes = allJokes.filter((x) => x.type === "programming");
  // 2) Build template
  res.status(200).render("programming", {
    title: "Programming Jokes",
    jokes,
  });
});

exports.getGeneralJoke = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allJokes = await Joke.find();
  const jokes = allJokes.filter((x) => x.type === "general");
  // 2) Build template
  res.status(200).render("general", {
    title: "General Jokes",
    jokes,
  });
});

exports.getKnockKnockJoke = catchAsync(async (req, res, next) => {
  // 1) Get jokes from collection
  const allJokes = await Joke.find();
  const jokes = allJokes.filter((x) => x.type.includes("nock"));
  // 2) Build template
  res.status(200).render("knockknock", {
    title: "Knock Jokes",
    jokes,
  });
});
exports.getJoke = catchAsync(async (req, res, next) => {
  const joke = await Joke.findById(req.params.id);

  if (!joke) {
    return next(new AppError("There is no joke with that id.", 404));
  }

  // 2) Build template
  // 3) Render template using data from 1)
  res.status(200).render("joke", {
    title: `${joke.type} Joke`,
    joke,
  });
});

exports.getSubmitForm = (req, res) => {
  res.status(200).render("submit", {
    title: "Submit your joke",
  });
};

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).render("account", {
    title: "Your account",
    user: updatedUser,
  });
});