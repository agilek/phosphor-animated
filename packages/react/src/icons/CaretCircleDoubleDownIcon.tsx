import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 88 128 120 96 88" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 144 128 176 96 144" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 88 128 120 96 88" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 144 128 176 96 144" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 88 128 120 96 88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 144 128 176 96 144" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 88 128 120 96 88" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 144 128 176 96 144" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M54.42,54.43a104,104,0,1,0,147.15,0A104.17,104.17,0,0,0,54.42,54.43Zm99.93,83.92a8,8,0,1,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,164.71Zm0-56a8,8,0,1,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,108.68Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 88 128 120 96 88" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 144 128 176 96 144" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CaretCircleDoubleDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
