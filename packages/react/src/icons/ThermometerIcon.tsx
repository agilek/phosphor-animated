import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="212" cy="84" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="120" cy="184" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="212" cy="84" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="120" cy="184" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="212" cy="84" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="120" cy="184" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="212" cy="84" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M68,154.78V56a40,40,0,0,1,80,0v98.77h0a52,52,0,1,1-80,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="212" cy="84" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="120" cy="184" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M88,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ThermometerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
