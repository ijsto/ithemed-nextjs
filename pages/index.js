import Jumbo from "../components/dataDisplay/Jumbo";

export default () => {
  return (
    <div style={{ maxWidth: "90%", margin: "0 auto" }}>
      <Jumbo>
        <h1>iNextJS + Styled-Components /></h1>
      </Jumbo>

      <input placeholder="Type in something nice" type="text" />

      <a href="https://ijs.to/courses/" target="_blank">
        <h2>Learn code on iJS.to</h2>
      </a>
      <ul>
        <li>
          <a href="https://ijs.to/courses/nextjs" target="_blank">
            Next.js
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/react" target="_blank">
            React
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/graphql" target="_blank">
            GraphQL
          </a>
        </li>
        <li>
          <a href="https://ijs.to/courses/" target="_blank">
            and other courses
          </a>
        </li>
      </ul>
    </div>
  );
};
