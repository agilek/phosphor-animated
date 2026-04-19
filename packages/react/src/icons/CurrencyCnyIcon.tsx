import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,112v56a24,24,0,0,0,24,24h40V168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,112v16a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,112v56a24,24,0,0,0,24,24h40V168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,112v16a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,112v56a24,24,0,0,0,24,24h40V168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,112v16a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,112v56a24,24,0,0,0,24,24h40V168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,112v16a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,112v56a24,24,0,0,0,24,24h40V168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M104,112v16a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CurrencyCnyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
