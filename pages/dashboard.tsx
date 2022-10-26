import Link from 'next/link';
import Container from 'components/Container';
import TopTracks from 'components/TopTracks';

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Flynn OConnell"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my top played spotify trackes. See what I'm listening to, at least for now. Back to the code? Check out my&nbsp;
            <Link href="/projects">
              <a className="text-gray-900 dark:text-gray-100 underline">
                projects.
              </a>
            </Link>
          </p>
        </div>

        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Here's my top tracks on Spotify updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}

