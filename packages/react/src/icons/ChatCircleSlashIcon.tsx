import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M212.57,173.46a96,96,0,0,0-121.79-134" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M212.57,173.46a96,96,0,0,0-121.79-134" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M212.57,173.46a96,96,0,0,0-121.79-134" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216.32,165.69A96.07,96.07,0,0,0,98.87,36.5" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M212.57,173.46a96,96,0,0,0-121.79-134" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M63.42,57a96,96,0,0,0-18.53,119.1h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47h0A96,96,0,0,0,192.58,199" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ChatCircleSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
