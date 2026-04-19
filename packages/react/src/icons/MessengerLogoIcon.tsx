import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 144 112 112 144 144 176 112" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 144 112 112 144 144 176 112" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 144 112 112 144 144 176 112" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 144 112 112 144 144 176 112" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm53.66,93.66-32,32a8,8,0,0,1-11.32,0L112,123.31,85.66,149.66a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0L144,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" opacity="0.2" fill="currentColor"/><polyline points="80 144 112 112 144 144 176 112" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const MessengerLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
