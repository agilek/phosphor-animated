import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="120" cy="112" r="56" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="168 32 208 32 208 72" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="120" cy="112" r="56" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="168 32 208 32 208 72" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="120" cy="112" r="56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="168 32 208 32 208 72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="120" cy="112" r="56" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="168 32 208 32 208 72" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M147.91,113.72a28,28,0,1,1-25.63-25.63A28,28,0,0,1,147.91,113.72ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM188,56a8,8,0,0,0-8-8H152.27A8.17,8.17,0,0,0,144,55.47,8,8,0,0,0,152,64h8.69L144.92,79.77A44,44,0,1,0,112,159.26V176H92.27A8.17,8.17,0,0,0,84,183.47,8,8,0,0,0,92,192h20v15.73a8.18,8.18,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V192h19.73a8.17,8.17,0,0,0,8.25-7.47,8,8,0,0,0-8-8.53H128V159.26a44,44,0,0,0,28.24-68.18L172,75.31v8.42A8.18,8.18,0,0,0,179.47,92,8,8,0,0,0,188,84Z" fill="currentColor"/></>,
  duotone: <><circle cx="120" cy="112" r="56" opacity="0.2" fill="currentColor"/><circle cx="120" cy="112" r="56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="168 32 208 32 208 72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const GenderIntersexIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
