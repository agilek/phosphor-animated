import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="64 64 24 184 104 184 64 64" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="156" cy="76" r="44" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="136" y="152" width="88" height="56" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="64 64 24 184 104 184 64 64" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="156" cy="76" r="44" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="136" y="152" width="88" height="56" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="64 64 24 184 104 184 64 64" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="156" cy="76" r="44" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="136" y="152" width="88" height="56" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="60 64 24 184 96 184 60 64" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="158" cy="74" r="42" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="136" y="156" width="88" height="52" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M111.59,181.47A8,8,0,0,1,104,192H24a8,8,0,0,1-7.59-10.53l40-120a8,8,0,0,1,15.18,0ZM208,76a52,52,0,1,0-52,52A52.06,52.06,0,0,0,208,76Zm16,68H136a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8h88a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144Z" fill="currentColor"/></>,
  duotone: <><polygon points="64 64 24 184 104 184 64 64" opacity="0.2" fill="currentColor"/><circle cx="156" cy="76" r="44" opacity="0.2" fill="currentColor"/><rect x="136" y="152" width="88" height="56" opacity="0.2" fill="currentColor"/><polygon points="64 64 24 184 104 184 64 64" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="156" cy="76" r="44" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="136" y="152" width="88" height="56" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ShapesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
