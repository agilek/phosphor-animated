import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="76" r="36" strokeWidth="8" className="draw-line"/><circle cx="188" cy="172" r="36" strokeWidth="8" className="draw-line"/><circle cx="68" cy="172" r="36" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="76" r="36" strokeWidth="12" className="draw-line"/><circle cx="188" cy="172" r="36" strokeWidth="12" className="draw-line"/><circle cx="68" cy="172" r="36" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="76" r="36" strokeWidth="16" className="draw-line"/><circle cx="188" cy="172" r="36" strokeWidth="16" className="draw-line"/><circle cx="68" cy="172" r="36" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="76" r="36" strokeWidth="24" className="draw-line"/><circle cx="188" cy="172" r="36" strokeWidth="24" className="draw-line"/><circle cx="68" cy="172" r="36" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,120a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,120Zm60,8a44,44,0,1,0,44,44A44.05,44.05,0,0,0,188,128ZM68,128a44,44,0,1,0,44,44A44.05,44.05,0,0,0,68,128Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="76" r="36" opacity="0.2" fill="currentColor"/><circle cx="188" cy="172" r="36" opacity="0.2" fill="currentColor"/><circle cx="68" cy="172" r="36" opacity="0.2" fill="currentColor"/><circle cx="128" cy="76" r="36" strokeWidth="16" className="draw-line"/><circle cx="188" cy="172" r="36" strokeWidth="16" className="draw-line"/><circle cx="68" cy="172" r="36" strokeWidth="16" className="draw-line"/></>,
};

export const CirclesThreeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
