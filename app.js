const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

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

let { products } = require("./data.js");

const generateId = () => {
  const maxId =
    products.length > 0 ? Math.max(...products.map((n) => n.id)) : 0;
  return maxId + 1;
};

app.get("/api/products", (req, resp) => {
  resp.json(products);
});

app.get("/api/products/:id", (req, resp) => {
  const { id } = req.params;
  const product = products.find((note) => note.id === Number(id));
  if (product) {
    resp.json(product);
  } else {
    resp.status(404).end();
  }
});

app.delete("/api/products/:id", (request, response) => {
  const id = Number(request.params.id);
  const filteredProducts = products.filter((product) => product.id !== id);
  console.log(filteredProducts);
  response.status(204).end();
});

app.post("/api/products", (request, response) => {
  const body = request.body;
  console.log(body);
  if (!body.title) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const product = {
    id: generateId(),
    title: body.title,
    description: body.description,
    price: body.price,
    stock: body.stock,
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  };

  products = products.concat(product);
  response.json(product);
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
