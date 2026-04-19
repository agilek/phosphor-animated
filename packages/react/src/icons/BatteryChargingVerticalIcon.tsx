import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="128 168 144 136 112 136 128 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="64" y="40" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="128 168 144 136 112 136 128 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="64" y="40" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="128 168 144 136 112 136 128 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="64" y="40" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="128 172 144 140 112 140 128 108" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="64" y="44" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="128 168 144 136 112 136 128 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="64" y="40" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BatteryChargingVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
