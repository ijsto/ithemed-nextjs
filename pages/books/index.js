import Link from "next/link";

const Books = () => {
  return (
    <div>
      <h1>Dynamic Links</h1>
      <p>The link below is a dynamic Next.js link.</p>

      <h1>Books Catalogue</h1>

      <p>
        {/* 
            Visit 
            https://iJS.to
            learn more about dynamic routes
        */}
        <Link href="/b/[name]" as="/b/everybody-writes">
          <a>1. Everybody Writes</a>
        </Link>
      </p>
    </div>
  );
};

Books.getInitialProps = async ({ query }) => {
  // Visit https://iJS.to to learn how to use fetch in getInitialProps

  return { query };
};

export default Books;
