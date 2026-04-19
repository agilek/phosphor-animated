import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 80 104 32 56 80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V32" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="152 80 104 32 56 80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V32" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="152 80 104 32 56 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V32" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="152 80 104 32 56 80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V32" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,224a8,8,0,0,1-8,8A104.11,104.11,0,0,1,96,128V88H56a8,8,0,0,1-5.66-13.66l48-48a8,8,0,0,1,11.32,0l48,48A8,8,0,0,1,152,88H112v40a88.1,88.1,0,0,0,88,88A8,8,0,0,1,208,224Z" fill="currentColor"/></>,
  duotone: <><polygon points="152 80 104 32 56 80 152 80" opacity="0.2" fill="currentColor"/><polygon points="152 80 104 32 56 80 152 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendLeftUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
