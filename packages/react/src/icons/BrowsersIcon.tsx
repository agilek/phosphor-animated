import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="80" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,80V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8H192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="32" y="80" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,80V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8H192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="32" y="80" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,80V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8H192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="28" y="84" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M68,84V52a8,8,0,0,1,8-8H220a8,8,0,0,1,8,8V164a8,8,0,0,1-8,8H188" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="80" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,80V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8H192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BrowsersIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
