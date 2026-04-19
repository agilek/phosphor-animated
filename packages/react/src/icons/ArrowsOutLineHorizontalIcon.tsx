import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="48 160 16 128 48 96" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="208 96 240 128 208 160" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="48 160 16 128 48 96" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="208 96 240 128 208 160" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="48 160 16 128 48 96" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="208 96 240 128 208 160" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="48 160 16 128 48 96" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="208 96 240 128 208 160" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H56V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,56,160V136H96a8,8,0,0,0,0-16Zm149.66,2.34-32-32A8,8,0,0,0,200,96v24H160a8,8,0,0,0,0,16h40v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,245.66,122.34Z" fill="currentColor"/></>,
  duotone: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="48 160 16 128 48 96" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="208 96 240 128 208 160" strokeWidth="16" className="draw-line"/><rect x="16" y="40" width="224" height="176" rx="16" opacity="0.2" fill="currentColor"/></>,
};

export const ArrowsOutLineHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
