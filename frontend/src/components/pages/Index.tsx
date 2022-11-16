import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '@/assets/react.svg';
import Button from '@/components/atom/Button';
import { NAVIGATIONS } from '@/navigation/Root';
import { useRecoilState } from 'recoil';
import { roll } from '@/store/auth';

export default function Index(): JSX.Element {
  const [count, setCount] = useState(0);
  const [rRoll, rSetRoll] = useRecoilState(roll);

  return (
    <div
      style={{
        width: '100%',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
      }}
    >
      <div>
        <Link to='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' height={56} />
        </Link>
        <Link to='https://reactjs.org' target='_blank' rel='noreferrer' style={{ marginLeft: '1rem' }}>
          <img src={reactLogo} className='logo react' alt='React logo' height={56} />
        </Link>
      </div>
      <h1>Vite + React + Mui</h1>
      <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      <Button onClick={() => rSetRoll('authenticated')}>now {rRoll}</Button>
      <Link to={NAVIGATIONS.mypage.path}>MyPage</Link>
    </div>
  );
}
