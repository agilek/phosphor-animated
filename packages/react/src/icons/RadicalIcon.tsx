import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="240 104 240 80 128 80 80 208 32 80" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="240 104 240 80 128 80 80 208 32 80" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="240 104 240 80 128 80 80 208 32 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="240 104 240 80 128 80 80 208 32 80" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,80a8,8,0,0,1-16,0v-8H125.42l-30,75a8,8,0,0,1-14.86,0l-32-80A8,8,0,1,1,63.43,93L88,154.46,112.57,93A8,8,0,0,1,120,88h80a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><path d="M32,80H240a0,0,0,0,1,0,0V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A0,0,0,0,1,32,80Z" opacity="0.2" fill="currentColor"/><polyline points="240 104 240 80 128 80 80 208 32 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const RadicalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
