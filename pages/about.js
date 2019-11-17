export const About = () => {
  return (
    <div>
      <h1>About iThemed NextJS</h1>
      <p>
        Next.js is a framework that makes it easy to create Universal web apps
        in React.
      </p>
      <p>
        With Next.js, React pages are automatically rendered on both client and
        server side, without the hassle of setting up dependancies like webpack
        or babel and with automatic routing.
      </p>
      <p>
        This is a Next.js starter project pre-configured to work with
        Styled-Components and includes custom layout setup and basic theming
        setup.
      </p>
      <h2>Get Started (3 minutes)</h2>
      <ul>
        <li>
          1. Clone the the{" "}
          <a href="https://github.com/ijsto/ithemed-nextjs">starter repo</a>
          <p>
            <code>git clone git@github.com:ijsto/ithemed-nextjs.git</code>
          </p>
        </li>
        <li>
          2. Enter the directory
          <p>
            <code>cd ithemed-nextjs</code>
          </p>
        </li>
        <li>
          3. Install project dependencies
          <p>
            <code>npm install</code> or <code>npm i</code>
          </p>
        </li>
        <li>
          To run the project locally:
          <p>
            <code>npm run dev</code>
          </p>
        </li>
        <li>
          Starter project is live at:{" "}
          <a href="http://localhost:3000">http://localhost:3000</a>
        </li>
      </ul>

      <h2>The starter is now ready - have fun!</h2>
    </div>
  );
};

export default About;
