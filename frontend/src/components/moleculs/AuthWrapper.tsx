import { FC, ReactNode } from 'react';
import { roll } from '@/store/auth';
import { useRecoilValue } from 'recoil';
import { Navigate, useLocation } from 'react-router-dom';
import { NAVIGATIONS } from '@/navigation/Root';

interface Args {
  children: ReactNode;
}

const AuthWrapper: FC<Args> = ({ children }) => {
  const rRoll = useRecoilValue(roll);

  if (rRoll === 'public') {
    return <Navigate to={NAVIGATIONS.login.path} state={{ from: useLocation() }} replace={false}></Navigate>;
  }

  return <>{children}</>;
};

export default AuthWrapper;
