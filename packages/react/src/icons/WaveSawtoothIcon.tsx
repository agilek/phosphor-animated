import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="24 128 128 64 128 192 232 128" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="24 128 128 64 128 192 232 128" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="24 128 128 64 128 192 232 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="24 128 128 64 128 192 232 128" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-11.56,94.66-72,48A8,8,0,0,1,128,184a8,8,0,0,1-8-8V95L60.44,134.66a8,8,0,1,1-8.88-13.32l72-48A8,8,0,0,1,136,80v81.05l59.56-39.71a8,8,0,0,1,8.88,13.32Z" fill="currentColor"/></>,
  duotone: <><polygon points="24 128 128 64 128 192 232 128 24 128" opacity="0.2" fill="currentColor"/><polyline points="24 128 128 64 128 192 232 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const WaveSawtoothIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
