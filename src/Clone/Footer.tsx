import { Divider } from '@mui/material';
import React from 'react';
import { useCloneContext } from '../utils/CloneContext';

const footer_p1 = [
  'Wattpad Originals',
  'Try Premium',
  'Get the App',
  'Language',
  'Writers',
];

const footer_p2 = ['Brand Partnerships', 'Jobs', 'Press'];

const footer_p3 = [
  'Terms',
  'Privacy',
  'Payment Policy',
  'Accessibility',
  'Help',
];

const Footer = () => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.footer) return null;

  return (
    <div className="mx-auto mb-10 mt-20 flex flex-col">
      <div className="mb-5 flex flex-row justify-center gap-4">
        {footer_p1.map((item, index) => (
          <div
            key={index}
            className="text-small text-bold text-dark cursor-pointer hover:underline"
          >
            {item}
          </div>
        ))}
        <Divider orientation="vertical" flexItem className="bg-gray-3" />
        {footer_p2.map((item, index) => (
          <div
            key={index}
            className="text-small text-bold text-dark cursor-pointer font-bold hover:underline"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center gap-4">
        {footer_p3.map((item, index) => (
          <div
            key={index}
            className="text-small text-bold text-dark cursor-pointer font-bold hover:underline"
          >
            {item}
          </div>
        ))}
        <div className="text-middle text-normalbold text-small">
          © 2024 Wattpad
        </div>
      </div>
    </div>
  );
};

export default Footer;
