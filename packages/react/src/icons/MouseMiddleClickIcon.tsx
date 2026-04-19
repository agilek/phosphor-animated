import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="112" y="80" width="32" height="64" rx="8" strokeWidth="8" className="draw-line"/><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="112" y="80" width="32" height="64" rx="8" strokeWidth="12" className="draw-line"/><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="112" y="80" width="32" height="64" rx="8" strokeWidth="16" className="draw-line"/><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="108" y="80" width="40" height="64" rx="8" strokeWidth="24" className="draw-line"/><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H152V88a16,16,0,0,0-16-16V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8V72a16,16,0,0,0-16,16v16H64V80A48.05,48.05,0,0,1,112,32Zm32,192H112a48.05,48.05,0,0,1-48-48V120h40v16a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V120h40v56A48.05,48.05,0,0,1,144,224Z" fill="currentColor"/></>,
  duotone: <><rect x="112" y="80" width="32" height="64" rx="8" opacity="0.2" fill="currentColor"/><rect x="112" y="80" width="32" height="64" rx="8" strokeWidth="16" className="draw-line"/><rect x="56" y="24" width="144" height="208" rx="56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const MouseMiddleClickIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
