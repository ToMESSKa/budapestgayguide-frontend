import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn';
import { postLoginToken } from '../../api/PostLoginToken';

export default function SignIn({ isLogin, setIsLogin }) {
  const navigate = useNavigate();

  const onGoogleSignIn = async res => {
    const { credential } = res;
    const result = await postLoginToken(credential, setIsLogin);
    setIsLogin(result);
  };

  useEffect(() => {
    if (!isLogin) return;
    navigate('/');
  }, [isLogin]);

  return (
    <div>
      <h1>Goggle Login</h1>
      <GoogleSignIn onGoogleSignIn={onGoogleSignIn} text="Sign In" />
    </div>
  );
}