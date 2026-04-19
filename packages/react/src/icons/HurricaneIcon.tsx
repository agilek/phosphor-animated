import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="24" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,120-112,120l11.38-42.68A80,80,0,0,1,48,128C48,32,160,8,160,8Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="24" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,120-112,120l11.38-42.68A80,80,0,0,1,48,128C48,32,160,8,160,8Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,120-112,120l11.38-42.68A80,80,0,0,1,48,128C48,32,160,8,160,8Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="24" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,116-112,116l11.38-38.68A80,80,0,0,1,48,128C48,32,160,12,160,12Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M158.32,45.36l9.41-35.3A8,8,0,0,0,158.32.18,195.87,195.87,0,0,0,99.67,25.27C60.63,50.37,40,85.89,40,128a88.11,88.11,0,0,0,57.68,82.64l-9.41,35.3a8,8,0,0,0,9.41,9.88,195.87,195.87,0,0,0,58.65-25.09C195.37,205.63,216,170.11,216,128A88.1,88.1,0,0,0,158.32,45.36ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" fill="currentColor"/></>,
  duotone: <><path d="M148.62,50.68,160,8S48,32,48,128a80,80,0,0,0,59.38,77.32L96,248s112-24,112-120A80,80,0,0,0,148.62,50.68ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,120-112,120l11.38-42.68A80,80,0,0,1,48,128C48,32,160,8,160,8Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const HurricaneIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
