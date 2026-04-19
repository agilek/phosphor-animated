import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="119.59 59.29 160 16 148 96 208 120 191.17 138.03" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 108 160 48 136 92.21 88.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="114.12 65.16 160 16 144 96 208 120 185.7 143.9" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="163.79 167.37 96 240 112 160 48 136 92.21 88.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LightningSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
