import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="64 64 24 184 104 184 64 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="156" cy="76" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="136" y="152" width="88" height="56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="64 64 24 184 104 184 64 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="156" cy="76" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="136" y="152" width="88" height="56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="64 64 24 184 104 184 64 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="156" cy="76" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="136" y="152" width="88" height="56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="60 64 24 184 96 184 60 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="158" cy="74" r="42" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="136" y="156" width="88" height="52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="64 64 24 184 104 184 64 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="156" cy="76" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="136" y="152" width="88" height="56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ShapesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
