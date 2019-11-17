import Card from "../components/dataDisplay/Card";
import Button from "../components/common/Button";

export const Components = () => {
  return (
    <div>
      <h1>Free Components</h1>
      <p>Included are a few free components for you to use or delete! :{")"}</p>
      <h2>{"<Card />"}</h2>
      <code>./components/dataDisplay/Card</code>
      <Card
        title="Card Sample"
        width="300px"
        image="https://ijs.to/images/PLACEHOLDER_COURSE_IMAGE.jpg"
      ></Card>
      <p>
        Basic card component, accepts props:
        <ul style={{ margin: "1em 0 0 2em" }}>
          <li>
            <code>image={"{}"} // enter image source url()</code>
          </li>
          <li>
            <code>
              title={"{}"} // adds {"<h3 />"} tag
            </code>
          </li>
          <li>
            <code>width={"{}"} // adds width to the card</code>
          </li>
        </ul>
      </p>
      <h2>{"<Jumbo />"}</h2>
      <code>./components/dataDisplay/Jumbo.js</code>
      <p>
        Very primitive Jumbo / Header component to extend. Accepts no props.
        Returns <code>{"{children}"}</code>
      </p>
      <h2>{"<Button />"}</h2>
      <code>./components/dataDisplay/Button.js</code>
      <p>
        <Button>I'm a button</Button>
      </p>
      <p>A much useful button component</p>
      <h2>{"<Header />"}</h2>
      <code>./components/layout/Header.js</code>
      <p>I'm the header of this website.</p>
      <h2>{"<Footer />"}</h2>
      <code>./components/layout/Footer.js</code>
      <p>I'm the footer of this website.</p>
      <h3 style={{ marginTop: "3em" }}>Other freebies</h3>
      <h2>
        <code>{"<input />"}</code>, <code>{"<textarea />"}</code> styles
      </h2>
      <p>
        Beautiful input and textarea styles, defined in {"<GlobalStyle />"}{" "}
        component located in <code>./components/Page.js</code>
      </p>
    </div>
  );
};

export default Components;
