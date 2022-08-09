import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Logger from 'js-logger'

// eslint-disable-next-line react-hooks/rules-of-hooks
Logger.useDefaults();
const logLevel = process.env.NEXT_PUBLIC_ENV;
if (logLevel === 'development') {
    Logger.setLevel(Logger.TRACE);
} else {
    Logger.setLevel(Logger.ERROR);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
