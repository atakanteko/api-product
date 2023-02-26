require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const Note = require("./models/note");

app.use(cors());
app.use(express.static("dist"));

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(express.json());
app.use(requestLogger);

let { notes } = require("./data.js");

app.get("/api/notes", (req, resp) => {
  Note.find({}).then((notes) => {
    resp.json(notes);
  });
});

app.get("/api/notes/:id", (request, response, next) => {
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

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const filteredNotes = notes.filter((note) => note.id !== id);
  console.log(filteredNotes);
  response.status(204).end();
});

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  });

  note.save().then((result) => {
    response.json(note);
  });
});

app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
