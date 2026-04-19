import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,208H60a36,36,0,0,0,36-36V84a44,44,0,0,1,72-33.95" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CurrencyGbpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
