import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 71.63 128 32 192 80 158.47 105.15" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184.65 181.51 128 224 128 128 153.14 146.86" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 71.63 128 32 192 80 158.47 105.15" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184.65 181.51 128 224 128 128 153.14 146.86" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 71.63 128 32 192 80 158.47 105.15" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184.65 181.51 128 224 128 128 153.14 146.86" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="184.65 181.51 128 224 128 128 153.14 146.86" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="128 59.74 128 32 192 80 164.9 100.33" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="128 71.63 128 32 192 80 158.47 105.15" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="184.65 181.51 128 224 128 128 153.14 146.86" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BluetoothSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
