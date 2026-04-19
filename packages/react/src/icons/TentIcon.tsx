import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="72 48 8 192 136 192 72 48" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="136 192 248 192 184 48 72 48 72 192" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="72 48 8 192 136 192 72 48" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="136 192 248 192 184 48 72 48 72 192" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="72 48 8 192 136 192 72 48" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="136 192 248 192 184 48 72 48 72 192" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="76 48 12 192 140 192 76 48" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="140 192 244 192 180 48 76 48 76 192" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M255.31,188.75l-64-144A8,8,0,0,0,184,40H72a8,8,0,0,0-7.31,4.75h0l0,.12v0L.69,188.75A8,8,0,0,0,8,200H248a8,8,0,0,0,7.31-11.25ZM64,184H20.31L64,85.7Zm16,0V85.7L123.69,184Z" fill="currentColor"/></>,
  duotone: <><polygon points="72 48 8 192 136 192 72 48" opacity="0.2" fill="currentColor"/><polygon points="72 48 8 192 136 192 72 48" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="136 192 248 192 184 48 72 48 72 192" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const TentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
