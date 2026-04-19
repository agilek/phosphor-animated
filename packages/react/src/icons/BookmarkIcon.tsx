import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 176 127.99 136 64 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 176 127.99 136 64 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 176 127.99 136 64 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 176 127.99 136 64 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="192 176 127.99 136 64 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BookmarkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
