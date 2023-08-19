import { motion } from 'framer-motion';
import MenuItem from './item';
import { menuItems } from '@/data/menu-items';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.8 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const OffcanvasMenu = () => (
  <div className='absolute mt-24 px-12 py-6'>
    <motion.ul
      layoutId='menu'
      initial='closed'
      animate='open'
      exit='closed'
      variants={variants}
    >
      {menuItems.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </motion.ul>
  </div>
);

export default OffcanvasMenu;
