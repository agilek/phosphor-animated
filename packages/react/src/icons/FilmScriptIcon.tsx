import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="8" className="draw-line"/><circle cx="84" cy="80" r="8" fill="currentColor"/><circle cx="84" cy="176" r="8" fill="currentColor"/><circle cx="84" cy="128" r="8" fill="currentColor"/></>,
  light: <><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="12" className="draw-line"/><circle cx="84" cy="80" r="10" fill="currentColor"/><circle cx="84" cy="176" r="10" fill="currentColor"/><circle cx="84" cy="128" r="10" fill="currentColor"/></>,
  regular: <><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="16" className="draw-line"/><circle cx="84" cy="76" r="12" fill="currentColor"/><circle cx="84" cy="180" r="12" fill="currentColor"/><circle cx="84" cy="128" r="12" fill="currentColor"/></>,
  bold: <><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="24" className="draw-line"/><circle cx="92" cy="80" r="16" fill="currentColor"/><circle cx="92" cy="176" r="16" fill="currentColor"/><circle cx="92" cy="128" r="16" fill="currentColor"/></>,
  fill: <><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM76,188a12,12,0,1,1,12-12A12,12,0,0,1,76,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-48A12,12,0,1,1,88,80,12,12,0,0,1,76,92Z" fill="currentColor"/></>,
  duotone: <><rect x="48" y="32" width="160" height="192" rx="8" opacity="0.2" fill="currentColor"/><rect x="48" y="32" width="160" height="192" rx="8" strokeWidth="16" className="draw-line"/><circle cx="84" cy="80" r="12" fill="currentColor"/><circle cx="84" cy="176" r="12" fill="currentColor"/><circle cx="84" cy="128" r="12" fill="currentColor"/></>,
};

export const FilmScriptIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
