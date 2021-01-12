import { ApolloClient, InMemoryCache } from "@apollo/client";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const graphQLClient = new ApolloClient({
  uri: "http://138.197.180.22:1337/graphql",
  cache: new InMemoryCache(),
});

export function formatDate(date) {
  var d = new Date(date);
  return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

export function sanitizeContent(str) {
  return str
    .trim()
    .split("\n")
    .map((p) => {
      if ((p = p.trim()) !== "") {
        return "<p>" + p + "</p>";
      } else {
        return "";
      }
    })
    .join("");
}
