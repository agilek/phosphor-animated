import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="232 192 136 96 96 136 24 64" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 128 232 192 168 192" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="232 192 136 96 96 136 24 64" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 128 232 192 168 192" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="232 192 136 96 96 136 24 64" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 128 232 192 168 192" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="232 192 136 96 96 136 24 64" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 128 232 192 168 192" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M240,128v64a8,8,0,0,1-8,8H168a8,8,0,0,1-5.66-13.66L188.69,160,136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,29.66,58.34L96,124.69l34.34-34.35a8,8,0,0,1,11.32,0L200,148.69l26.34-26.35A8,8,0,0,1,240,128Z" fill="currentColor"/></>,
  duotone: <><polygon points="232 128 232 192 168 192 232 128" opacity="0.2" fill="currentColor"/><polygon points="232 128 232 192 168 192 232 128" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 160 136 96 96 136 24 64" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const TrendDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
