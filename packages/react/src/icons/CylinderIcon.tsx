import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="60" rx="64" ry="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><ellipse cx="128" cy="60" rx="64" ry="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><ellipse cx="128" cy="60" rx="64" ry="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><ellipse cx="128" cy="60" rx="64" ry="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="128" cy="60" rx="64" ry="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,60V196c0,19.88,28.65,36,64,36s64-16.12,64-36V60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CylinderIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
