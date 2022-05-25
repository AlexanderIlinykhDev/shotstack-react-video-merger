import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

function Layout() {
  return (
    <>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
