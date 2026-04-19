import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,64a24,24,0,0,1,48,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,64a24,24,0,0,1,48,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,64a24,24,0,0,1,48,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,64a24,24,0,0,1,48,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,64a24,24,0,0,1,48,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const HandFistIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
