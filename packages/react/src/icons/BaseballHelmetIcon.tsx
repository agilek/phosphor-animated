import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="88" cy="156" r="20" strokeWidth="8" className="draw-line"/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" strokeWidth="8" className="draw-line"/><path d="M88,216h40a64,64,0,0,0,64-64V128" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="88" cy="156" r="20" strokeWidth="12" className="draw-line"/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" strokeWidth="12" className="draw-line"/><path d="M88,216h40a64,64,0,0,0,64-64V128" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="88" cy="156" r="20" strokeWidth="16" className="draw-line"/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" strokeWidth="16" className="draw-line"/><path d="M88,216h40a64,64,0,0,0,64-64V128" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="88" cy="156" r="20" strokeWidth="24" className="draw-line"/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h92" strokeWidth="24" className="draw-line"/><path d="M88,216h40a64,64,0,0,0,64-64V128" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M248,120H223.7A104,104,0,0,0,16,128v24a72.08,72.08,0,0,0,72,72h40a72.08,72.08,0,0,0,72-72V136h48a8,8,0,0,0,0-16ZM88,180a24,24,0,1,1,24-24A24,24,0,0,1,88,180Zm96-28a56.06,56.06,0,0,1-50.46,55.72A71.87,71.87,0,0,0,160,152V136h24Z" fill="currentColor"/></>,
  duotone: <><circle cx="88" cy="156" r="20" opacity="0.2" fill="currentColor"/><path d="M128,216a64,64,0,0,0,64-64V128H152v24a64,64,0,0,1-64,64Z" opacity="0.2" fill="currentColor"/><circle cx="88" cy="156" r="20" strokeWidth="16" className="draw-line"/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" strokeWidth="16" className="draw-line"/><path d="M88,216h40a64,64,0,0,0,64-64V128" strokeWidth="16" className="draw-line"/></>,
};

export const BaseballHelmetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
