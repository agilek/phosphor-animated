import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="184" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="184" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="184" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,154.78V56a40,40,0,0,1,80,0v98.77h0a52,52,0,1,1-80,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="184" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ThermometerSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
