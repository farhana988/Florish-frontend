import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Link href="/">
        <button className="mx-auto mb-8">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default NotFound;
