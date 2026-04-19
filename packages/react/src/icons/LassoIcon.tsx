import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="112" rx="104" ry="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,225.6c32,16.7,80,0,80-41.77,0-53.66-60.64-62.5-70.62-24.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><ellipse cx="128" cy="112" rx="104" ry="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,225.6c32,16.7,80,0,80-41.77,0-53.66-60.64-62.5-70.62-24.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><ellipse cx="128" cy="112" rx="104" ry="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,225.6c32,16.7,80,0,80-41.77,0-53.66-60.64-62.5-70.62-24.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><ellipse cx="128" cy="112" rx="104" ry="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M57.8,159.22C69,118.43,128,121.63,128,181.44c0,40.12-48,56.52-80,40.47" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="128" cy="112" rx="104" ry="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,225.6c32,16.7,80,0,80-41.77,0-53.66-60.64-62.5-70.62-24.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const LassoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
