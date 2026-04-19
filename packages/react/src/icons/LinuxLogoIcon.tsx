import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,208S64,168,64,88a64,64,0,0,1,128,0c0,80,32,120,32,120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 136 128 152 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,208c8-14.35,22.91-24,40-24s32,9.65,40,24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M32,208S64,168,64,88a64,64,0,0,1,128,0c0,80,32,120,32,120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 136 128 152 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,208c8-14.35,22.91-24,40-24s32,9.65,40,24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M32,208S64,168,64,88a64,64,0,0,1,128,0c0,80,32,120,32,120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 136 128 152 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,208c8-14.35,22.91-24,40-24s32,9.65,40,24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M32,208S64,168,64,88a64,64,0,0,1,128,0c0,80,32,120,32,120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="156 144 128 156 100 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M97.46,208a44.86,44.86,0,0,1,61.08,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,208S64,168,64,88a64,64,0,0,1,128,0c0,80,32,120,32,120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 136 128 152 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,208c8-14.35,22.91-24,40-24s32,9.65,40,24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LinuxLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
