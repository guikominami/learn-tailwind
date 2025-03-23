import { Link } from 'react-router-dom';
import NavbarSubMenu from './NavbarSubMenu';
import { menuText } from '../../assets/data/language/menu';

const NavbarItems: React.FC = () => {
  return (
    <div className='flex gap-4 mr-3'>
      <div className=''>
        <Link
          className='text-black/60 focus:outline-none
                  data-[active]:text-black data-[focus]:text-black data-[hover]:text-black'
          to='/'
        >
          Home
        </Link>
      </div>
      {menuText['portuguese'].map((item, index) => (
        <NavbarSubMenu menu={item} key={index} />
      ))}
    </div>
  );
};

export default NavbarItems;
