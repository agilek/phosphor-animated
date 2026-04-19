import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 72 128 128 184 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 72 128 128 184 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 72 128 128 184 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 76 128 128 180 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 72 128 128 184 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ClockCountdownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
