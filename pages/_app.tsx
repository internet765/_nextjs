import { AppPropsType } from 'next/dist/shared/lib/utils';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsType): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
