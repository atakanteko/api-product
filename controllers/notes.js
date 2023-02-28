const notesRouter = require("express").Router();
const Note = require("../models/note");
const User = require("../models/user");

notesRouter.get("/", (req, resp) => {
  Note.find({})
    .populate("user", { username: 1, name: 1 })
    .then((notes) => {
      resp.json(notes);
    });
});

notesRouter.get("/:id", (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

notesRouter.delete("/:id", (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

notesRouter.put("/:id", (request, response, next) => {
  const { content, important } = request.body;

  Note.findByIdAndUpdate(
    request.params.id,
    { content, important },
    { new: true, runValidators: true, context: "query" }
  )
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

notesRouter.patch("/:id", (request, response, next) => {
  const id = request.params.id;
  const update = { important: request.body.important };
  const options = { new: true };

  Note.findByIdAndUpdate(id, update, options)
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

notesRouter.post("/", async (request, response) => {
  const body = request.body;
  const user = await User.findById(body.userId);
  console.log("user", user);
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = new Note({
    content: body.content,
    important: body.important === undefined ? false : body.important,
    user: user.id,
  });

  const savedNote = await note.save();
  console.log(savedNote);
  user.notes = user.notes.concat(savedNote._id);
  await user.save();

  response.json(savedNote);
});

module.exports = notesRouter;
