import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const TeaBagIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
