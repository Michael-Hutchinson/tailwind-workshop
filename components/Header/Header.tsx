import Actions from './Actions/Actions';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <header className='h-16 border-b'>
      <nav className='flex justify-between max-w-screen-md mx-auto h-full items-center px-6'>
        <Logo />
        <Navigation />
        <Actions />
      </nav>
    </header>
  );
};

export default Header;
