import Heading from '@/components/common/Heading';
import Paragraph from '@/components/common/Paragraph';
import Link from 'next/link';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-color-custom text-center p-8">
    <Heading level={4} className="mb-2 font-bold text-(--dark-blue)">404</Heading>
    <Paragraph size='xl' className=" font-bold mb-2 text-(--dark-blue)">Page Not Found</Paragraph>
    <Paragraph size='base' className="mb-6 text-(--dark-blue)">Sorry, the page you are looking for does not exist.</Paragraph>
    <Link href="/" aria-label="Go to Home">
      <span className="px-6 py-2 bg-(--orange) text-white rounded-md shadow cursor-pointer transition">
        Go to Home
      </span>
    </Link>
  </div>
);

export default NotFound;
