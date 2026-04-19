import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,80h48L76,120a28,28,0,1,1-20,47.6" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,176h24a48,48,0,0,0,0-96H136Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M56,80h48L76,120a28,28,0,1,1-20,47.6" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,176h24a48,48,0,0,0,0-96H136Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M56,80h48L76,120a28,28,0,1,1-20,47.6" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,176h24a48,48,0,0,0,0-96H136Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M52,80h48L72,120a28,28,0,1,1-20,47.6" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M140,176h24a48,48,0,0,0,0-96H140Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M56,80h48L76,120a28,28,0,1,1-20,47.6" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M136,176h24a48,48,0,0,0,0-96H136Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ThreeDIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
