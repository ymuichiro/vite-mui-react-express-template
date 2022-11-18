import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '@/assets/react.svg';
import Button from '@/components/atom/Button';
import { NAVIGATIONS } from '@/navigation/Root';
import { useRecoilState } from 'recoil';
import { useTranslation } from 'react-i18next';
import { roll } from '@/store/auth';
import { Languages } from '@/languages';

export default function Index(): JSX.Element {
  const [count, setCount] = useState(0);
  const [rRoll, rSetRoll] = useRecoilState(roll);
  const { t, i18n } = useTranslation();

  const onClickLang = () => {
    console.log('current language', i18n.language);
    if (i18n.language === 'en') {
      i18n.changeLanguage(Languages.ja);
    } else {
      i18n.changeLanguage(Languages.en);
    }
  };

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
      <h1>{t('Welcome to React')}</h1>
      <Button fullWidth onClick={() => setCount((count) => count + 1)} style={{ maxWidth: '300px' }}>
        count is {count}
      </Button>
      <Button fullWidth onClick={() => rSetRoll('authenticated')} style={{ maxWidth: '300px' }}>
        now {rRoll}
      </Button>
      <Button fullWidth onClick={() => onClickLang()} style={{ maxWidth: '300px' }}>
        lang
      </Button>
      <Link to={NAVIGATIONS.mypage.path}>MyPage</Link>
    </div>
  );
}
