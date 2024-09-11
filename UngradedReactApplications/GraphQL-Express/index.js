const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const data = require("./data.json");

const schema = buildSchema(`
  type Query {
    users: [User]
  }

  type User {
    name: String
    email: String
    password: String
    posts: [Post]
  }

  type Post {
    title: String
    content: String
    comments: [Comment]
  }

  type Comment {
    user: User
    content: String
  }
`);

const root = {
  users: () => {
    return data.users.map((user) => ({
      ...user,
      posts: user.posts.map((post) => ({
        ...post,
        comments: post.comments.map((comment) => ({
          ...comment,
          user: data.users.find((u) => u.name === comment.user.name),
        })),
      })),
    }));
  },
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/graphql`)
);
