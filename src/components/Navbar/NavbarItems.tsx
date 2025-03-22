import { Link } from 'react-router-dom';
import NavbarSubMenu from './NavbarSubMenu';
import { menuText } from '../../assets/data/dataLanguagePt';

const NavbarItems: React.FC = () => {
  return (
    <div className='flex gap-4 mr-3 font-medium'>
      <div className=''>
        <Link
          className='text-black/60 focus:outline-none data-[active]:text-black data-[focus]:text-black data-[hover]:text-black'
          to='/'
        >
          Home
        </Link>
      </div>
      {menuText.map((item) => (
        <NavbarSubMenu menu={item} />
      ))}
    </div>
  );
};

export default NavbarItems;
