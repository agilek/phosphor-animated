import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="24 128 76 56 180 200 232 128" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="24 128 76 56 180 200 232 128" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="24 128 76 56 180 200 232 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="24 128 76 56 180 200 232 128" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-9.85,93.12-40,48A8,8,0,0,1,160,184h-.43a8,8,0,0,1-6.23-3.55l-58-87.09L62.15,133.12a8,8,0,0,1-12.3-10.24l40-48a8,8,0,0,1,12.81.68l58.05,87.09,33.14-39.77a8,8,0,1,1,12.3,10.24Z" fill="currentColor"/></>,
  duotone: <><polyline points="24 128 76 56 180 200 232 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="24 128 76 56 180 200 232 128 24 128" opacity="0.2" fill="currentColor"/></>,
};

export const WaveTriangleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
