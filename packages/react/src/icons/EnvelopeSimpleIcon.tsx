import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" fill="currentColor"/></>,
  duotone: <><polygon points="224 56 128 144 32 56 224 56" opacity="0.2" fill="currentColor"/><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="224 56 128 144 32 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const EnvelopeSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
