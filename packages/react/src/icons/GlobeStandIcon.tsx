import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="136" cy="104" r="72" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M208,179.05A104,104,0,0,1,61,32" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="136" cy="104" r="72" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M208,179.05A104,104,0,0,1,61,32" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="136" cy="104" r="72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M208,179.05A104,104,0,0,1,61,32" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="136" cy="104" r="60" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M204,177.32A100,100,0,0,1,62.68,36" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M56,104a80,80,0,1,1,80,80A80.09,80.09,0,0,1,56,104Zm146.46,69.28A96,96,0,0,1,66.72,37.54,8,8,0,1,0,55.18,26.46,112,112,0,0,0,128,215.71V232H104a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H144V215.72a111.21,111.21,0,0,0,69.54-30.9,8,8,0,1,0-11.08-11.54Z" fill="currentColor"/></>,
  duotone: <><circle cx="136" cy="104" r="72" opacity="0.2" fill="currentColor"/><circle cx="136" cy="104" r="72" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M208,179.05A104,104,0,0,1,61,32" strokeWidth="16" className="draw-line"/></>,
};

export const GlobeStandIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
