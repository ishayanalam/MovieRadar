import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-bold text-accent mb-4">Oops!</h1>
      <p className="text-xl text-white mb-2">
        We cannot seem to find the page you are looking for.
      </p>
      <p className="text-gray-400 mb-8 italic">
        {error?.statusText || error?.message}
      </p>
      <Link
        to="/"
        className="bg-accent hover:bg-accent-hover text-background px-6 py-3 rounded-md font-bold transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}
