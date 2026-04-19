import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="96 56 128 24 160 56" strokeWidth="8" className="draw-line"/><polyline points="160 200 128 232 96 200" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="96 56 128 24 160 56" strokeWidth="12" className="draw-line"/><polyline points="160 200 128 232 96 200" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="96 56 128 24 160 56" strokeWidth="16" className="draw-line"/><polyline points="160 200 128 232 96 200" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="96 56 128 24 160 56" strokeWidth="24" className="draw-line"/><polyline points="160 200 128 232 96 200" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,152a8,8,0,0,1-8,8H136v32h24a8,8,0,0,1,5.66,13.66l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,96,192h24V160H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,152ZM48,112H208a8,8,0,0,0,0-16H136V64h24a8,8,0,0,0,5.66-13.66l-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,96,64h24V96H48a8,8,0,0,0,0,16Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 56 128 24 160 56 96 56" opacity="0.2" fill="currentColor"/><polygon points="160 200 128 232 96 200 160 200" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polygon points="96 56 128 24 160 56 96 56" strokeWidth="16" className="draw-line"/><polygon points="160 200 128 232 96 200 160 200" strokeWidth="16" className="draw-line"/></>,
};

export const SplitVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
