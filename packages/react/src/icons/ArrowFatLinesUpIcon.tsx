import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polygon points="32 120 128 24 224 120 176 120 176 136 80 136 80 120 32 120" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M231.39,123.06A8,8,0,0,1,224,128H184v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V128H32a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,0l96,96A8,8,0,0,1,231.39,123.06ZM176,208H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0-32H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" opacity="0.2" fill="currentColor"/><polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ArrowFatLinesUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
