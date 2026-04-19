import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 128 48 176 96 224" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 48 176" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="96 128 48 176 96 224" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 48 176" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="96 128 48 176 96 224" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 48 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="96 128 48 176 96 224" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 48 176" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M200,32V176a8,8,0,0,1-8,8H104v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,104,128v40h80V32a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 128 48 176 96 224 96 128" opacity="0.2" fill="currentColor"/><polygon points="96 128 48 176 96 224 96 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="192 32 192 176 96 176" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowDownLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
