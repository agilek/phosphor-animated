import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,156.18V196a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const MegaphoneSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
