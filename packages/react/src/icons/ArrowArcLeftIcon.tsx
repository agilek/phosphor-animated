import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 152 24 152 24 88" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L24,152" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="88 152 24 152 24 88" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L24,152" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="88 152 24 152 24 88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L24,152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="88 152 24 152 24 88" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L24,152" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,67.47,120.16l26.19,26.18A8,8,0,0,1,88,160H24a8,8,0,0,1-8-8V88a8,8,0,0,1,13.66-5.66l26.48,26.48A104,104,0,0,1,232,184Z" fill="currentColor"/></>,
  duotone: <><polygon points="88 152 24 152 24 88 88 152" opacity="0.2" fill="currentColor"/><polygon points="88 152 24 152 24 88 88 152" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L56,120" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowArcLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
