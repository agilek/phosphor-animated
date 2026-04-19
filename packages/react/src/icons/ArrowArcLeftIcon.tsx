import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 152 24 152 24 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L24,152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="88 152 24 152 24 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L24,152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="88 152 24 152 24 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L24,152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="88 152 24 152 24 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L24,152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="88 152 24 152 24 88 88 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,184A96,96,0,0,0,60.12,116.12L56,120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowArcLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
