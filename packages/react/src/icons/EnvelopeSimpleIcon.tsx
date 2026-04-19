import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const EnvelopeSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
