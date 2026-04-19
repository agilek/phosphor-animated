import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="232 56 136 152 96 112 24 184" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 120 232 56 168 56" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="232 56 136 152 96 112 24 184" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 120 232 56 168 56" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="232 56 136 152 96 112 24 184" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 120 232 56 168 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="232 56 136 152 96 112 24 184" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="232 120 232 56 168 56" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z" fill="currentColor"/></>,
  duotone: <><polyline points="232 56 168 56 232 120 232 56" opacity="0.2" fill="currentColor"/><polygon points="232 120 232 56 168 56 232 120" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 88 136 152 96 112 24 184" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const TrendUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
