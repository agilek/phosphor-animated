import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152a32.5,32.5,0,0,1,0,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152a32.5,32.5,0,0,1,0,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152a32.5,32.5,0,0,1,0,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polygon points="44 200 44 160 68 160 92 136 92 224 68 200 44 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M132,152a32.5,32.5,0,0,1,0,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="148 32 148 92 208 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M180,224h20a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="48 200 48 160 72 160 96 136 96 224 72 200 48 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,152a32.5,32.5,0,0,1,0,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,224h32a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const FileAudioIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
