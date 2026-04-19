import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 144 112 112 144 144 176 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 144 112 112 144 144 176 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 144 112 112 144 144 176 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 144 112 112 144 144 176 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="80 144 112 112 144 144 176 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const MessengerLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
