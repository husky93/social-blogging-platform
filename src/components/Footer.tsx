import React from 'react';
import Container from './Container';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Container>
      <footer className="flex justify-center border-t-2 text-sm text-gray-600 border-gray-100 p-8 mt-6 sm:px-6">
        <span>
          2022 © Copyright{' '}
          <a
            className="transition-all underline hover:text-green-500"
            href="https://github.com/husky93"
          >
            husky93
          </a>
        </span>
      </footer>
    </Container>
  );
};

export default Footer;
