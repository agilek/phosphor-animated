import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="200 96 232 128 200 160" strokeWidth="8" className="draw-line"/><polyline points="56 96 24 128 56 160" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="200 96 232 128 200 160" strokeWidth="12" className="draw-line"/><polyline points="56 96 24 128 56 160" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="200 96 232 128 200 160" strokeWidth="16" className="draw-line"/><polyline points="56 96 24 128 56 160" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="200 96 232 128 200 160" strokeWidth="24" className="draw-line"/><polyline points="56 96 24 128 56 160" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M112,48V208a8,8,0,0,1-16,0V136H64v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,64,96v24H96V48a8,8,0,0,1,16,0Zm125.66,74.34-32-32A8,8,0,0,0,192,96v24H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h32v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,237.66,122.34Z" fill="currentColor"/></>,
  duotone: <><polygon points="200 96 232 128 200 160 200 96" opacity="0.2" fill="currentColor"/><polygon points="56 96 24 128 56 160 56 96" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polygon points="200 96 232 128 200 160 200 96" strokeWidth="16" className="draw-line"/><polygon points="56 96 24 128 56 160 56 96" strokeWidth="16" className="draw-line"/></>,
};

export const SplitHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
