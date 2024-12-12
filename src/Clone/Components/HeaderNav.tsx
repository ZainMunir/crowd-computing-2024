import React from 'react';
import wattPadLogo from '../../resources/wp-logo-orange.png';
import { HiLightningBolt } from 'react-icons/hi';
import AccountModal from '../Modal/AccountModal';
import BrowseMenu from './BrowseMenu';
import CommunityMenu from './CommunityMenu';
import SearchInput from './SearchInput';
import WriteMenu from './WriteMenu';
import { useCloneContext } from '../../utils/CloneContext';

const HeaderNav = () => {
  const { enabledElements } = useCloneContext();

  if (!enabledElements.headerNav) return null;

  return (
    <div className="flex h-[54px] items-center gap-4 px-4">
      {enabledElements.headerNavLogo && (
        <img src={wattPadLogo} alt="wattpad logo" className="h-3/5" />
      )}
      <BrowseMenu />
      <CommunityMenu />
      <SearchInput />
      <div className="flex flex-row">
        <WriteMenu />
        {enabledElements.headerNavPremium && (
          <button className="bg-button-purple text-bold text-light text-medium mx-4 flex h-10 items-center self-center rounded-[32px] px-6">
            <HiLightningBolt className="text-lightning-red text-medium mr-1" />
            Try Premium
          </button>
        )}
        {enabledElements.headerNavLogin && (
          <AccountModal
            buttonComponent={
              <p className="text-semibold text-dark text-medium">Log In</p>
            }
            flavourText="to join the largest storytelling community"
            isSignUp={false}
          />
        )}
        {enabledElements.headerNavSignup && (
          <AccountModal
            buttonComponent={
              <p className="text-semibold text-dark text-medium ml-8">
                Sign Up
              </p>
            }
            isSignUp={true}
            flavourText="to join the largest storytelling community"
          />
        )}
      </div>
    </div>
  );
};

export default HeaderNav;
