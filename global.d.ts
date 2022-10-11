// For importing css modules
declare module '*.module.css';

// Typing for react-lottie
declare module 'react-lottie' {
  interface Options {
    path?: string;
  }

  interface LottieProps {
    options: Options;
  }

  export default Lottie;
}
