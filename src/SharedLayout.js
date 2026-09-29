import { Outlet } from 'react-router-dom';
import NavBar from './component/NavBar';
const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;