import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="64 80 64 40 192 40 192 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="152" width="128" height="64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="64 80 64 40 192 40 192 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="152" width="128" height="64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="64 80 64 40 192 40 192 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="152" width="128" height="64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="64 80 64 40 192 40 192 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="160" width="128" height="56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="64 80 64 40 192 40 192 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="152" width="128" height="64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const PrinterIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
