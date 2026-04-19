import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,224V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,152v56h16a28,28,0,0,0,0-56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 208 96 152 68 192 40 152 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M208,224V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,152v56h16a28,28,0,0,0,0-56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 208 96 152 68 192 40 152 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M208,224V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,152v56h16a28,28,0,0,0,0-56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 208 96 152 68 192 40 152 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="88 208 88 152 60 192 32 152 32 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152v56h16a28,28,0,0,0,0-56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="148 32 148 92 208 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M208,224V88L152,32H56a8,8,0,0,0-8,8v68" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M208,224V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,152v56h16a28,28,0,0,0,0-56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 208 96 152 68 192 40 152 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const FileMdIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
