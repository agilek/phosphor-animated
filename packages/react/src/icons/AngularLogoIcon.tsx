import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,104.47,141.07,128H114.93ZM231.93,73.06l-16,120a8,8,0,0,1-4.35,6.1l-80,40a8,8,0,0,1-7.16,0l-80-40a8,8,0,0,1-4.35-6.1l-16-120a8,8,0,0,1,4.85-8.44l96-40a7.93,7.93,0,0,1,6.16,0l96,40A8,8,0,0,1,231.93,73.06ZM175,156.12l-40-72a8,8,0,0,0-14,0l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76Z" fill="currentColor"/></>,
  duotone: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" opacity="0.2" fill="currentColor"/><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const AngularLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
