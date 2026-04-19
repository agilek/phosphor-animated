import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="48" y="184" width="72" height="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,184V172a20,20,0,0,1,40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M160,224h40a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="48" y="184" width="72" height="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,184V172a20,20,0,0,1,40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M160,224h40a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="48" y="184" width="72" height="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,184V172a20,20,0,0,1,40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M160,224h40a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="48" y="180" width="72" height="44" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,180V164a20,20,0,0,1,40,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="148 32 148 92 208 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M164,224h36a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="48" y="184" width="72" height="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,184V172a20,20,0,0,1,40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M160,224h40a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const FileLockIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
