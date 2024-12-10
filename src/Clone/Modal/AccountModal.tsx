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
        <div className="mb-4 text-center text-2xl font-bold">
          {typeString} {type ? flavourText : 'to Wattpad'}
        </div>
        <button className="flex h-12 w-full items-center justify-center gap-2 self-center rounded-[32px] border-2 border-black font-bold">
          <FcGoogle className="size-6" />
          {typeString} with Google
        </button>
        <button className="flex h-12 w-full items-center justify-center gap-2 self-center rounded-[32px] border-2 border-black font-bold">
          <AiFillFacebook className="size-6 text-indigo-800" />
          {typeString} with Facebook
        </button>
        <Divider>or</Divider>
        <button className="flex h-12 w-full items-center justify-center gap-2 self-center rounded-[32px] border-2 border-black bg-black font-bold text-white">
          {typeString} with email
        </button>
        <div>
          {!type && (
            <button className="flex h-12 w-full items-center justify-center self-center rounded-[32px] hover:bg-gray-50">
              Forgot password?
            </button>
          )}
          <button
            onClick={() => setType((prev) => !prev)}
            className="flex h-12 w-full items-center justify-center self-center rounded-[32px] font-bold hover:bg-gray-50"
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
