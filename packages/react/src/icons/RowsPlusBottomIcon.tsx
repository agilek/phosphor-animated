import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="120" width="176" height="40" rx="8" strokeWidth="8" className="draw-line"/><rect x="40" y="48" width="176" height="40" rx="8" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="120" width="176" height="40" rx="8" strokeWidth="12" className="draw-line"/><rect x="40" y="48" width="176" height="40" rx="8" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="120" width="176" height="40" rx="8" strokeWidth="16" className="draw-line"/><rect x="40" y="48" width="176" height="40" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="124" width="176" height="40" rx="8" strokeWidth="24" className="draw-line"/><rect x="40" y="48" width="176" height="40" rx="8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,128v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H208A16,16,0,0,1,224,128ZM208,40H48A16,16,0,0,0,32,56V80A16,16,0,0,0,48,96H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40ZM152,208H136V192a8,8,0,0,0-16,0v16H104a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V224h16a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="120" width="176" height="40" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="48" width="176" height="40" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="120" width="176" height="40" rx="8" strokeWidth="16" className="draw-line"/><rect x="40" y="48" width="176" height="40" rx="8" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const RowsPlusBottomIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
