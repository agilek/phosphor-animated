import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="64 96 96 128 64 160" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="192 160 160 128 192 96" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="64 96 96 128 64 160" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="192 160 160 128 192 96" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="64 96 96 128 64 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="192 160 160 128 192 96" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="56 96 88 128 56 160" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="200 160 168 128 200 96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34A8,8,0,0,0,56,96v24H16a8,8,0,0,0,0,16H56v24a8,8,0,0,0,13.66,5.66l32-32a8,8,0,0,0,0-11.32ZM240,120H200V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,200,160V136h40a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="40" width="224" height="176" rx="16" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="64 96 96 128 64 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="192 160 160 128 192 96" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowsInLineHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
