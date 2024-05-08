import { Inter } from "next/font/google";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <div>
          <Link href={ {pathname: "/blogs/[slug]", query: { slug: "first-demo-blog" } } }>
              <button>Press to see blog with slug "first-demo-blog"</button>
          </Link>
      </div>
    </>
  );
}
