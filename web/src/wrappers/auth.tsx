import { useAuth } from '@/hooks/auth-hooks';
<<<<<<< HEAD
import { Navigate, Outlet } from 'umi';
=======
import { redirectToLogin } from '@/utils/authorization-util';
import { Outlet } from 'umi';
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192

export default () => {
  const { isLogin } = useAuth();
  if (isLogin === true) {
    return <Outlet />;
  } else if (isLogin === false) {
<<<<<<< HEAD
    return <Navigate to="/login" />;
=======
    redirectToLogin();
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
  }

  return <></>;
};
