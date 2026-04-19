import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="8" className="draw-line"/><path d="M112,155.72a32,32,0,1,1,0-55.44" strokeWidth="8" className="draw-line"/><path d="M192,155.72a32,32,0,1,1,0-55.44" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="12" className="draw-line"/><path d="M112,155.72a32,32,0,1,1,0-55.44" strokeWidth="12" className="draw-line"/><path d="M192,155.72a32,32,0,1,1,0-55.44" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="16" className="draw-line"/><path d="M112,155.72a32,32,0,1,1,0-55.44" strokeWidth="16" className="draw-line"/><path d="M192,155.72a32,32,0,1,1,0-55.44" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="24" className="draw-line"/><path d="M112,155.72a32,32,0,1,1,0-55.44" strokeWidth="24" className="draw-line"/><path d="M192,155.72a32,32,0,1,1,0-55.44" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM116,162.64a40,40,0,1,1,0-69.28,8,8,0,1,1-8,13.85,24,24,0,1,0,0,41.58,8,8,0,0,1,8,13.85Zm80,0a40,40,0,1,1,0-69.28,8,8,0,1,1-8,13.85,24,24,0,1,0,0,41.58,8,8,0,0,1,8,13.85Z" fill="currentColor"/></>,
  duotone: <><rect x="24" y="56" width="208" height="144" rx="8" opacity="0.2" fill="currentColor"/><rect x="24" y="56" width="208" height="144" rx="8" strokeWidth="16" className="draw-line"/><path d="M112,155.72a32,32,0,1,1,0-55.44" strokeWidth="16" className="draw-line"/><path d="M192,155.72a32,32,0,1,1,0-55.44" strokeWidth="16" className="draw-line"/></>,
};

export const ClosedCaptioningIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
