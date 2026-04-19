import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="62.32 164.39 24 224 152 224 104 152 79.03 189.46 62.32 164.39" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="148 32 148 92 208 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M196,224h4a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v84" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="152 224 104 152 76.36 193.46 60 168 24 224 152 224" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FileImageIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
