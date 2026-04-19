import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M173.87,118.58,78.67,221.43A8,8,0,0,1,65,214.15l13.67-57.56-50-22.44a8,8,0,0,1-2.59-12.73l95.2-102.85A8,8,0,0,1,135,25.85L121.31,83.41l50,22.43a8,8,0,0,1,2.59,12.74Zm61.71,104.57A7.91,7.91,0,0,1,232,224a8,8,0,0,1-7.16-4.42L215.05,200H176.94l-9.79,19.58a8,8,0,0,1-14.31-7.16l36-72a8,8,0,0,1,14.31,0l36,72A8,8,0,0,1,235.58,223.15ZM207.05,184,196,161.89,184.94,184Z" fill="currentColor"/></>,
  duotone: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" opacity="0.2" fill="currentColor"/><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LightningAIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
