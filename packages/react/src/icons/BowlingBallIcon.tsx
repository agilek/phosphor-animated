import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="132" cy="116" r="8" fill="currentColor"/><circle cx="164" cy="92" r="8" fill="currentColor"/><circle cx="172" cy="132" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="132" cy="116" r="10" fill="currentColor"/><circle cx="164" cy="92" r="10" fill="currentColor"/><circle cx="172" cy="132" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="132" cy="116" r="12" fill="currentColor"/><circle cx="164" cy="92" r="12" fill="currentColor"/><circle cx="172" cy="132" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="16" fill="currentColor"/><circle cx="160" cy="96" r="16" fill="currentColor"/><circle cx="176" cy="136" r="16" fill="currentColor"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm4,104a12,12,0,1,1,12-12A12,12,0,0,1,132,128Zm20-36a12,12,0,1,1,12,12A12,12,0,0,1,152,92Zm20,52a12,12,0,1,1,12-12A12,12,0,0,1,172,144Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="132" cy="116" r="12" fill="currentColor"/><circle cx="164" cy="92" r="12" fill="currentColor"/><circle cx="172" cy="132" r="12" fill="currentColor"/></>,
};

export const BowlingBallIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
