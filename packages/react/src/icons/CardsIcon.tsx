import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="80" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,48H216a8,8,0,0,1,8,8V176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="80" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,48H216a8,8,0,0,1,8,8V176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="80" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,48H216a8,8,0,0,1,8,8V176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="28" y="84" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,44H220a8,8,0,0,1,8,8V176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="80" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,48H216a8,8,0,0,1,8,8V176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CardsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
