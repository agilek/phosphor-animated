import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Z" fill="currentColor"/></>,
  duotone: <><path d="M56,112H200v64a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56Z" opacity="0.2" fill="currentColor"/><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const MouseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
