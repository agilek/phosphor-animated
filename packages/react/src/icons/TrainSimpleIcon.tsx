import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><rect x="48" y="32" width="160" height="176" rx="24" strokeWidth="8" className="draw-line"/><circle cx="84" cy="172" r="8" fill="currentColor"/><circle cx="172" cy="172" r="8" fill="currentColor"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><rect x="48" y="32" width="160" height="176" rx="24" strokeWidth="12" className="draw-line"/><circle cx="172" cy="172" r="10" fill="currentColor"/><circle cx="84" cy="172" r="10" fill="currentColor"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="48" y="32" width="160" height="176" rx="24" strokeWidth="16" className="draw-line"/><circle cx="84" cy="172" r="12" fill="currentColor"/><circle cx="172" cy="172" r="12" fill="currentColor"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><rect x="48" y="32" width="160" height="176" rx="24" strokeWidth="24" className="draw-line"/><circle cx="88" cy="168" r="16" fill="currentColor"/><circle cx="168" cy="168" r="16" fill="currentColor"/></>,
  fill: <><path d="M184,24H72A32,32,0,0,0,40,56V184a32,32,0,0,0,32,32h8L65.6,235.2a8,8,0,1,0,12.8,9.6L100,216h56l21.6,28.8a8,8,0,1,0,12.8-9.6L176,216h8a32,32,0,0,0,32-32V56A32,32,0,0,0,184,24Zm0,176H72a16,16,0,0,1-16-16V136H200v48A16,16,0,0,1,184,200ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z" fill="currentColor"/></>,
  duotone: <><path d="M48,56A24,24,0,0,1,72,32H184a24,24,0,0,1,24,24v72H48Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="48" y="32" width="160" height="176" rx="24" strokeWidth="16" className="draw-line"/><circle cx="84" cy="172" r="12" fill="currentColor"/><circle cx="172" cy="172" r="12" fill="currentColor"/></>,
};

export const TrainSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
