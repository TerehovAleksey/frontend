import './style.scss';
import IMAGE from './react.png';
import LOGO from './React-icon.svg';
export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template {process.env.NODE_ENV}</h1>
      <img src={IMAGE} alt="react" width="300px" />
      <img src={LOGO} alt="react-logo" width="300px" />
    </>
  );
};
