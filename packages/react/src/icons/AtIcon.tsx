import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="40" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="40" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="40" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AtIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
