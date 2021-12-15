import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri:
    "https://graphql.contentful.com/content/v1/spaces/" +
    process.env.REACT_APP_SPACE_ID +
    "?access_token=" +
    process.env.REACT_APP_ACCESS_TOKEN,
  cache: new InMemoryCache(),
});

export default Client;
