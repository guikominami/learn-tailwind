import { Link } from 'react-router-dom';
import NavbarSubMenu from './NavbarSubMenu';

const NavbarItems: React.FC = () => {
  return (
    <div className='flex gap-4 mr-6 font-medium'>
      <div className=''>
        <Link
          className='text-black/60 focus:outline-none data-[active]:text-black data-[focus]:text-black data-[hover]:text-black'
          to='/'
        >
          Home
        </Link>
      </div>
      <NavbarSubMenu
        menuItem='Projetos'
        menuSubItems={[
          { title: 'laboratórios', url: '/laboratorios' },
          { title: 'materiais pedagógicos', url: '/mpa' },
        ]}
      />
      <NavbarSubMenu
        menuItem='Sobre nós'
        menuSubItems={[
          { title: 'metodologia', url: '/methodology' },
          { title: 'equipe', url: '/team' },
        ]}
      />
    </div>
  );
};

export default NavbarItems;
