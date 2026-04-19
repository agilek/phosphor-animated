import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,197.67A72,72,0,0,1,64,144V112A72,72,0,0,1,184,58.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CurrencyEurIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
