import { NAVIGATIONS } from '@/navigation/Root';
import { Link } from 'react-router-dom';

export default function Mypage(): JSX.Element {
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
      <h1>マイページ</h1>
      <div>
        <Link to={NAVIGATIONS.root.path}>home</Link>
      </div>
    </div>
  );
}
