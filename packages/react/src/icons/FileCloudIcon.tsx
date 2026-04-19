import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M65.66,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-43.82-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M65.66,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-43.82-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M65.66,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-43.82-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="148 32 148 92 208 92" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M180,224h20a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v84" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M65.66,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-43.82-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M65.66,168H60a28,28,0,0,0,0,56h48a44,44,0,1,0-43.82-48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FileCloudIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
