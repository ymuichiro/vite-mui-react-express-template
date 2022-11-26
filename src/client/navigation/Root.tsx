import AuthWrapper from '@/components/moleculs/AuthWrapper';
import Index from '@/components/pages/Index';
import Login from '@/components/pages/Login';
import Mypage from '@/components/pages/Mypage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const NAVIGATIONS = {
  root: {
    path: '/',
    elem: <Index />,
  },
  login: {
    path: '/login',
    elem: <Login />,
  },
  mypage: {
    path: '/mypage',
    elem: (
      <AuthWrapper>
        <Mypage />
      </AuthWrapper>
    ),
  },
};

export default function Root(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(NAVIGATIONS).map((n, i) => {
          const item = NAVIGATIONS[n as keyof typeof NAVIGATIONS];
          return <Route key={i} path={item.path} element={item.elem} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
