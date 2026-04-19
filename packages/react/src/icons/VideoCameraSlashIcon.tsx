import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="200 112 248 80 248 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M113.06,64H192a8,8,0,0,1,8,8v87.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M186.18,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="200 112 248 80 248 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M113.06,64H192a8,8,0,0,1,8,8v87.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M186.18,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="200 112 248 80 248 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M113.06,64H192a8,8,0,0,1,8,8v87.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M186.18,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="200 112 244 80 244 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M186.18,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M123.88,64H192a8,8,0,0,1,8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="200 112 248 80 248 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M113.06,64H192a8,8,0,0,1,8,8v87.63" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M186.18,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const VideoCameraSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
