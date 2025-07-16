// src/components/Loader.tsx
import loaderGif from '../assets/loader/loader.gif';

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <img src={loaderGif} alt="Loading..." />
  </div>
);

export default Loader;
