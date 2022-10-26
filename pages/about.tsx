import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Flynn OConnell">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/FlynnNeuro">@FlynnNeuro</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/NeuroPyPy">@NeuroPyPy</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://FlynnData.org">
                <a>https://FlynnData.org</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/flynnoconnell/">
              https://www.linkedin.com/in/flynnoconnell/
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <p>Flynn OConnell, Neuroscientist at Binghamton University</p>
          <p>
            Hey, I'm Flynn. I do research with the University of Binghamton. I primarily 
            study neuroinflammation in obesity, how your brain responds to fatty diets. 
            I mainly use Calcium Imaging to see neurons fire in real time. I have been programming 
            professionally for 4+ years and personally for 6+. 
          </p>
          <h3>Education</h3>
          <p>
            I graduated from Binghamton University with a B.S. in
            Integrative Neuroscience.
          </p>
        </div>
      </div>
    </Container>
  );
}
