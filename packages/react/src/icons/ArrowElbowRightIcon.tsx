import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="160 80 232 80 232 152" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 232 80" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="160 80 232 80 232 152" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 232 80" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="160 80 232 80 232 152" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 232 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="160 80 232 80 232 152" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 232 80" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M240,80v72a8,8,0,0,1-13.66,5.66L196,127.31l-70.34,70.35a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,29.66,90.34L120,180.69,184.69,116,154.34,85.66A8,8,0,0,1,160,72h72A8,8,0,0,1,240,80Z" fill="currentColor"/></>,
  duotone: <><polygon points="160 80 232 80 232 152 160 80" opacity="0.2" fill="currentColor"/><polygon points="160 80 232 80 232 152 160 80" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="24 96 120 192 196 116" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
