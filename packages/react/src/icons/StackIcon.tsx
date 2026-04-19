import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="32 176 128 232 224 176" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="32 176 128 232 224 176" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="32 176 128 232 224 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="32 176 128 232 224 176" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z" fill="currentColor"/><path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z" fill="currentColor"/><path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z" fill="currentColor"/></>,
  duotone: <><polygon points="32 80 128 136 224 80 128 24 32 80" opacity="0.2" fill="currentColor"/><polyline points="32 176 128 232 224 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="32 128 128 184 224 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="32 80 128 136 224 80 128 24 32 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const StackIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
