import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,120-112,120l11.38-42.68A80,80,0,0,1,48,128C48,32,160,8,160,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,120-112,120l11.38-42.68A80,80,0,0,1,48,128C48,32,160,8,160,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,120-112,120l11.38-42.68A80,80,0,0,1,48,128C48,32,160,8,160,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,116-112,116l11.38-38.68A80,80,0,0,1,48,128C48,32,160,12,160,12Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148.62,50.68A80,80,0,0,1,208,128c0,96-112,120-112,120l11.38-42.68A80,80,0,0,1,48,128C48,32,160,8,160,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const HurricaneIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
