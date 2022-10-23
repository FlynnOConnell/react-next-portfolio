import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import Container from '../components/Container';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Flynn OConnell
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software Developer and Neuroscientist
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                My love of programming is an extention of my love of learning. I have been coding professionally
                for 4+ years; building low-level API's to transfer information between scientific divices and our servers
                and building data analysis pipelines.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <p> Beautiful picture here </p>
            </div>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Projects here.
          </p>
          <span className="h-16" />
        </div>
      </Container>
    </Suspense>
  );
}
