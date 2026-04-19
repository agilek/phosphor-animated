import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="136 32 232 128 136 224 136 176 80 176 80 80 136 80 136 32" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M132.94,231.39A8,8,0,0,1,128,224V184H72a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h56V32a8,8,0,0,1,13.66-5.66l96,96a8,8,0,0,1,0,11.32l-96,96A8,8,0,0,1,132.94,231.39ZM48,176V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Z" fill="currentColor"/></>,
  duotone: <><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" opacity="0.2" fill="currentColor"/><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowFatLineRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
