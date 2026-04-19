import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SmileyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
