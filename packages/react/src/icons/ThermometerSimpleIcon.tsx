import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="184" r="24" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="184" r="24" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="184" r="24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,154.78V56a40,40,0,0,1,80,0v98.77h0a52,52,0,1,1-80,0Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="188" r="24" fill="currentColor"/></>,
  fill: <><path d="M160,146.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM128,24a16,16,0,0,1,16,16v64H112V40A16,16,0,0,1,128,24Z" fill="currentColor"/></>,
  duotone: <><path d="M160,138V48a32,32,0,0,0-64,0v90a56,56,0,1,0,64,0Zm-32,70a24,24,0,1,1,24-24A24,24,0,0,1,128,208Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="184" r="24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M96,48a32,32,0,0,1,64,0v90a56,56,0,1,1-64,0Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ThermometerSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
