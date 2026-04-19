import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 32 192 80 128 128 128 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polygon points="128 32 192 80 128 128 128 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polygon points="128 32 192 80 128 128 128 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polygon points="128 32 192 80 128 128 128 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="128 32 192 80 128 128 128 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 128 192 176 128 224 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BluetoothIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
