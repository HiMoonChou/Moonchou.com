import { useRouter } from 'next/router';
import Link from 'next/link';

const NextPost = ({ title }) => {
  const router = useRouter();
  let currentSlug = '';

  // Check if router.query.slug is an array and get the first element if it is
  if (Array.isArray(router.query.slug)) {
    currentSlug = router.query.slug[0];
  } else {
    currentSlug = router.query.slug || ''; // Get the current slug from the URL
  }

  // Increment the current slug by 1
  const nextSlug = (parseInt(currentSlug) + 1).toString();

  return (
    <div>
      <h1>{title}</h1>
      <Link
        as={`/posts/${nextSlug}`}
        href="/posts/[slug]"
        className="hover:text-neutral-500"
      >
        Next Post
      </Link>
    </div>
  );
};

export default NextPost;
