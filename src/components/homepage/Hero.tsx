import React from 'react';
import heroImg from '../../assets/hero.jpg';
import Container from '../Container';
import LoginUI from '../LoginUI';

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Container customClasses="my-10">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H66L50 100H0L21 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none lg:h-full"
            src={heroImg}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl sm:leading-none">
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-slate-800 lg:inline">
                Share your knowledge
                <br />
                about football
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Share your knowledge with everyone that wants to learn about
              football. Read blog posts written by the best and the most
              experienced in bussiness.
            </p>
            <LoginUI text="Get Started" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
