import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75Z" fill="currentColor"/></>,
  duotone: <><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" opacity="0.2" fill="currentColor"/><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const DropSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
