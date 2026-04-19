import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NotSubsetOfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
