import SingleBookLayout from "../../layouts/SingleBookLayout";

const SingleBook = ({ query }) => {
  return (
    <div>
      <h1>
        <span style={{ opacity: 0.5, fontSize: "0.5em" }}>Query name:</span>{" "}
        {query.name}!
      </h1>
      <h2 style={{ marginTop: 32 }}>This is a dynamic page.</h2>
      <p>
        You can access parameters (params) from the URL pathname to later use in
        you business logic.
      </p>
      <p>For example - use it to fetch data.</p>

      <h3>Here is a query passed from getInitialProps</h3>
      <pre>{JSON.stringify(query)}</pre>
    </div>
  );
};

SingleBook.Layout = SingleBookLayout;
SingleBook.getInitialProps = async ({ query }) => {
  // Visit https://iJS.to to learn how to use fetch in getInitialProps

  return { query };
};

export default SingleBook;
