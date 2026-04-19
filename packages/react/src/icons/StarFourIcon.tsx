import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M159.82,159.82l-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34a8,8,0,0,1,0,15Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M159.82,159.82l-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34a8,8,0,0,1,0,15Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M159.82,159.82l-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34a8,8,0,0,1,0,15Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M159.82,159.82l-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34a8,8,0,0,1,0,15Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z" fill="currentColor"/></>,
  duotone: <><path d="M159.82,159.82l-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34a8,8,0,0,1,0,15Z" fill="currentColor"/><path d="M159.82,159.82l-24.34,66.94a8,8,0,0,1-15,0L96.18,159.82,29.24,135.48a8,8,0,0,1,0-15L96.18,96.18l24.34-66.94a8,8,0,0,1,15,0l24.34,66.94,66.94,24.34a8,8,0,0,1,0,15Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const StarFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
