import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="100" cy="116" r="8" fill="currentColor"/><circle cx="156" cy="116" r="8" fill="currentColor"/><path d="M216,216l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><circle cx="100" cy="116" r="10" fill="currentColor"/><circle cx="156" cy="116" r="10" fill="currentColor"/><path d="M216,216l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><circle cx="100" cy="116" r="12" fill="currentColor"/><circle cx="156" cy="116" r="12" fill="currentColor"/><path d="M216,216l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><circle cx="100" cy="116" r="16" fill="currentColor"/><circle cx="156" cy="116" r="16" fill="currentColor"/><path d="M216,216l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M128,24a96.11,96.11,0,0,0-96,96v96a8,8,0,0,0,13.07,6.19l24.26-19.85L93.6,222.19a8,8,0,0,0,10.13,0L128,202.34l24.27,19.85a8,8,0,0,0,10.13,0l24.27-19.85,24.26,19.85A8,8,0,0,0,224,216V120A96.11,96.11,0,0,0,128,24ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z" fill="currentColor"/></>,
  duotone: <><path d="M216,216l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z" opacity="0.2" fill="currentColor"/><circle cx="100" cy="116" r="12" fill="currentColor"/><circle cx="156" cy="116" r="12" fill="currentColor"/><path d="M216,216l-29.33-24-29.34,24L128,192,98.67,216,69.33,192,40,216V120a88,88,0,0,1,176,0Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const GhostIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
