import React from 'react';
import Modal from './Modal';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { Divider } from '@mui/material';

type Props = {
  buttonComponent: React.ReactNode;
  isSignUp: boolean;
  flavourText: string;
};

const AccountModal = ({ buttonComponent, isSignUp, flavourText }: Props) => {
  const [type, setType] = React.useState(isSignUp);
  const typeString = type ? 'Sign up' : 'Log in';

  return (
    <Modal buttonComponent={buttonComponent}>
      <div className="flex flex-col gap-6 px-10 py-16">
        <div className="text-xlarge text-bold text-dark mb-4 text-center">
          {typeString} {type ? flavourText : 'to Wattpad'}
        </div>
        <button className="border-dark text-bold text-dark text-medium bg-light flex h-12 w-full items-center justify-center gap-2 self-center rounded-full border-2">
          <FcGoogle className="text-large" />
          {typeString} with Google
        </button>
        <button className="border-dark text-bold text-dark text-medium bg-light flex h-12 w-full items-center justify-center gap-2 self-center rounded-full border-2">
          <AiFillFacebook className="text-large text-facebook-blue" />
          {typeString} with Facebook
        </button>
        <Divider className="text-small text-middle" flexItem>
          or
        </Divider>
        <button className="border-dark text-bold text-light text-medium bg-dark flex h-12 w-full items-center justify-center gap-2 self-center rounded-full border-2">
          {typeString} with email
        </button>
        <div>
          {!type && (
            <button className="hover:bg-gray-1 text-semibold text-dark text-medium bg-light mb-10 flex h-12 w-full items-center justify-center gap-2 self-center rounded-full">
              Forgot password?
            </button>
          )}
          <button
            onClick={() => setType((prev) => !prev)}
            className="hover:bg-gray-1 text-bold text-dark text-medium bg-light flex h-12 w-full items-center justify-center gap-2 self-center rounded-full"
          >
            {type
              ? 'I already have an account'
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AccountModal;
