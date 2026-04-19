import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 128 176 152 152 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 128 80 152 104 176" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 128 176 152 152 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 128 80 152 104 176" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 128 176 152 152 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 128 80 152 104 176" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="148 128 172 152 148 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="108 128 84 152 108 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="148 32 148 92 208 92" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 128 176 152 152 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 128 80 152 104 176" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const FileCodeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
