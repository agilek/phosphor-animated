import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M224,64H72a48,48,0,0,0-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,172a28,28,0,0,1-56,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M224,64H72a48,48,0,0,0-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,172a28,28,0,0,1-56,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M224,64H72a48,48,0,0,0-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,172a28,28,0,0,1-56,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M224,64H72a48,48,0,0,0-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,172a28,28,0,0,1-56,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M224,64H72a48,48,0,0,0-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,172a28,28,0,0,1-56,0V64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const PiIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
