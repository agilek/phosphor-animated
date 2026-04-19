import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="24 72 76 200 128 72 180 200 232 72" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="24 72 76 200 128 72 180 200 232 72" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="24 72 76 200 128 72 180 200 232 72" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="24 72 76 200 128 72 180 200 232 72" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm72,120H181.42l-14,35a8,8,0,0,1-14.86,0L128,117.54,103.43,179a8,8,0,0,1-14.86,0l-14-35H56a8,8,0,0,1,0-16H68.18L56.57,99A8,8,0,1,1,71.43,93L96,154.46,120.57,93a8,8,0,0,1,14.86,0L160,154.46,184.57,93A8,8,0,1,1,199.43,99l-11.61,29H200a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><polygon points="50 136 76 200 102 136 128 72 154 136 180 200 206 136 50 136" opacity="0.2" fill="currentColor"/><polyline points="24 72 76 200 128 72 180 200 232 72" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const CurrencyKrwIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
