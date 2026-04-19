import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 96 120 128 80 160" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="80 96 120 128 80 160" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="80 96 120 128 80 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="80 96 120 128 80 160" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm-91,94.25-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32a8,8,0,0,1,0,12.5ZM176,168H136a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" fill="currentColor"/><polyline points="80 96 120 128 80 160" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line"/></>,
};

export const TerminalWindowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
