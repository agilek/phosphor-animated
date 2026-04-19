import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="224 208 32 208 32 48" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="224 208 32 208 32 48" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="224 208 32 208 32 48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="224 208 32 208 32 48" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,176a8,8,0,0,1,0,16H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v62.92l34.88-29.07a8,8,0,0,1,9.56-.51l43,28.69,43.41-36.18a8,8,0,0,1,10.24,12.3l-48,40a8,8,0,0,1-9.56.51l-43-28.69L64,155.75V176Z" fill="currentColor"/></>,
  duotone: <><path d="M32,48H208a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H32a0,0,0,0,1,0,0V48A0,0,0,0,1,32,48Z" opacity="0.2" fill="currentColor"/><polyline points="224 208 32 208 32 48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ChartLineIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
