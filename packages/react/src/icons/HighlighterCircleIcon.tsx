import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 144 104 96 152 72 152 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 144 104 96 152 72 152 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 144 104 96 152 72 152 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 148 104 104 152 80 152 148" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,215.3V156a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v59.3" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="104 144 104 96 152 72 152 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const HighlighterCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
