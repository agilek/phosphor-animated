import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 48 208 48 208 88" strokeWidth="8" className="draw-line"/><polyline points="208 168 208 208 168 208" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="168 48 208 48 208 88" strokeWidth="12" className="draw-line"/><polyline points="208 168 208 208 168 208" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="168 48 208 48 208 88" strokeWidth="16" className="draw-line"/><polyline points="208 168 208 208 168 208" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="168 48 208 48 208 88" strokeWidth="24" className="draw-line"/><polyline points="208 168 208 208 168 208" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,48V88a8,8,0,0,1-13.66,5.66L188,79.31,156.28,111A8,8,0,0,1,145,99.72L176.69,68,162.34,53.66A8,8,0,0,1,168,40h40A8,8,0,0,1,216,48Zm-4.94,112.61a8,8,0,0,0-8.72,1.73L188,176.69,53.66,42.34A8,8,0,0,0,42.34,53.66L176.69,188l-14.35,14.34A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM99.72,145,42.34,202.34a8,8,0,0,0,11.32,11.32L111,156.28A8,8,0,0,0,99.72,145Z" fill="currentColor"/></>,
  duotone: <><path d="M48,48l80,80L48,208Zm80,80,80,80V48Z" opacity="0.2" fill="currentColor"/><polyline points="168 48 208 48 208 88" strokeWidth="16" className="draw-line"/><polyline points="208 168 208 208 168 208" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const ShuffleSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
