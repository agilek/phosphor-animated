import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polygon points="160 16 148 96 208 120 96 240 108 160 48 136 160 16" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z" fill="currentColor"/></>,
  duotone: <><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" opacity="0.2" fill="currentColor"/><polygon points="160 16 144 96 208 120 96 240 112 160 48 136 160 16" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const LightningIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
