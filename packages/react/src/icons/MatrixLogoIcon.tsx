import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="64 40 40 40 40 216 64 216" strokeWidth="8" className="draw-line"/><polyline points="192 40 216 40 216 216 192 216" strokeWidth="8" className="draw-line"/><path d="M128,160V120a24,24,0,0,0-48,0" strokeWidth="8" className="draw-line"/><path d="M176,160V120a24,24,0,0,0-48,0" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="64 40 40 40 40 216 64 216" strokeWidth="12" className="draw-line"/><polyline points="192 40 216 40 216 216 192 216" strokeWidth="12" className="draw-line"/><path d="M128,160V120a24,24,0,0,0-48,0" strokeWidth="12" className="draw-line"/><path d="M176,160V120a24,24,0,0,0-48,0" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="64 40 40 40 40 216 64 216" strokeWidth="16" className="draw-line"/><polyline points="192 40 216 40 216 216 192 216" strokeWidth="16" className="draw-line"/><path d="M128,160V120a24,24,0,0,0-48,0" strokeWidth="16" className="draw-line"/><path d="M176,160V120a24,24,0,0,0-48,0" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="64 40 40 40 40 216 64 216" strokeWidth="24" className="draw-line"/><polyline points="192 40 216 40 216 216 192 216" strokeWidth="24" className="draw-line"/><path d="M128,160V120a24,24,0,0,0-48,0" strokeWidth="24" className="draw-line"/><path d="M176,160V120a24,24,0,0,0-48,0" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,200H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H72V184h8a8,8,0,0,1,0,16Zm80-40a8,8,0,0,1-8-8V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.65A23.94,23.94,0,0,1,128,102.13,24,24,0,0,1,168,120v32A8,8,0,0,1,160,160Zm40,32a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V72h-8a8,8,0,0,1,0-16h16a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" opacity="0.2" fill="currentColor"/><polyline points="64 40 40 40 40 216 64 216" strokeWidth="16" className="draw-line"/><polyline points="192 40 216 40 216 216 192 216" strokeWidth="16" className="draw-line"/><path d="M128,160V120a24,24,0,0,0-48,0" strokeWidth="16" className="draw-line"/><path d="M176,160V120a24,24,0,0,0-48,0" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const MatrixLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
