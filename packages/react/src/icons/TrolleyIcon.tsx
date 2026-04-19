import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="72" cy="224" r="12" fill="currentColor"/><circle cx="216" cy="224" r="12" fill="currentColor"/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="72" cy="224" r="14" fill="currentColor"/><circle cx="216" cy="224" r="14" fill="currentColor"/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="72" cy="224" r="16" fill="currentColor"/><circle cx="216" cy="224" r="16" fill="currentColor"/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="72" cy="224" r="20" fill="currentColor"/><circle cx="216" cy="224" r="20" fill="currentColor"/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V180" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M88,224a16,16,0,1,1-16-16A16,16,0,0,1,88,224Zm128-16a16,16,0,1,0,16,16A16,16,0,0,0,216,208Zm24-32H56V75.31A15.86,15.86,0,0,0,51.31,64L29.66,42.34A8,8,0,0,0,18.34,53.66L40,75.31V176H32a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM88,160H216a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H88A16,16,0,0,0,72,80v64A16,16,0,0,0,88,160Z" fill="currentColor"/></>,
  duotone: <><path d="M48,72H224a16,16,0,0,1,16,16v96a0,0,0,0,1,0,0H48a0,0,0,0,1,0,0V72A0,0,0,0,1,48,72Z" opacity="0.2" fill="currentColor"/><circle cx="72" cy="224" r="16" fill="currentColor"/><circle cx="216" cy="224" r="16" fill="currentColor"/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const TrolleyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
