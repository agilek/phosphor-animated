import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="204" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="204" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="204" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="204" r="16" fill="currentColor"/></>,
  fill: <><path d="M247.89,80.91a15.93,15.93,0,0,0-6.17-10.81A186.67,186.67,0,0,0,128,32,186.67,186.67,0,0,0,14.28,70.1,15.93,15.93,0,0,0,8.11,80.91,15.65,15.65,0,0,0,11.65,92.8l104,125.43A15.93,15.93,0,0,0,128,224h0a15.93,15.93,0,0,0,12.31-5.77h0l104-125.43A15.65,15.65,0,0,0,247.89,80.91ZM128,208,24.09,82.74A170.76,170.76,0,0,1,128,48,170.76,170.76,0,0,1,231.91,82.74Z" fill="currentColor"/></>,
  duotone: <><path d="M134.15,213.12l104-125.43a7.79,7.79,0,0,0-1.31-11.21,180.75,180.75,0,0,0-217.78,0A7.79,7.79,0,0,0,17.8,87.69L121.85,213.12A8,8,0,0,0,134.15,213.12Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const WifiNoneIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
