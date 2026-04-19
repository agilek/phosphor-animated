import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="80" y="64" width="144" height="88" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,64V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="80" y="64" width="144" height="88" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,64V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="80" y="64" width="144" height="88" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,64V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="88" y="68" width="136" height="76" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M132,68V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V68" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V180" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="80" y="64" width="144" height="88" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,64V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const TrolleySuitcaseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
