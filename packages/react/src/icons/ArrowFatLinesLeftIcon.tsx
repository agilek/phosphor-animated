import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polygon points="120 32 24 128 120 224 120 176 136 176 136 80 120 80 120 32" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M160,80v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h24A8,8,0,0,1,160,80Zm56-8a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,216,72Zm-32,0a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,184,72Z" fill="currentColor"/></>,
  duotone: <><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" opacity="0.2" fill="currentColor"/><polygon points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ArrowFatLinesLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
