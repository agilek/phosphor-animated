import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 128 216 176 168 224" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 216 176" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="168 128 216 176 168 224" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 216 176" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="168 128 216 176 168 224" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 216 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="168 128 216 176 168 224" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 216 176" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M221.66,181.66l-48,48A8,8,0,0,1,160,224V184H72a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168h80V128a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,221.66,181.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="168 128 216 176 168 224 168 128" opacity="0.2" fill="currentColor"/><polygon points="168 128 216 176 168 224 168 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="72 32 72 176 168 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowDownRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
