import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="48 160 128 80 208 160" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="48 160 128 80 208 160" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="48 160 128 80 208 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="48 160 128 80 208 160" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66Z" fill="currentColor"/></>,
  duotone: <><polygon points="48 160 128 80 208 160 48 160" opacity="0.2" fill="currentColor"/><polygon points="48 160 128 80 208 160 48 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CaretUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
