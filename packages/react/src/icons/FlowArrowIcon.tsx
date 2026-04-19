import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="48" cy="176" r="32" strokeWidth="8" className="draw-line"/><polyline points="208 48 240 80 208 112" strokeWidth="8" className="draw-line"/><path d="M80,176c88,0,40-96,128-96h32" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="48" cy="176" r="32" strokeWidth="12" className="draw-line"/><polyline points="208 48 240 80 208 112" strokeWidth="12" className="draw-line"/><path d="M80,176c88,0,40-96,128-96h32" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="48" cy="176" r="32" strokeWidth="16" className="draw-line"/><polyline points="208 48 240 80 208 112" strokeWidth="16" className="draw-line"/><path d="M80,176c88,0,40-96,128-96h32" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="48" cy="176" r="32" strokeWidth="24" className="draw-line"/><polyline points="208 48 240 80 208 112" strokeWidth="24" className="draw-line"/><path d="M80,176c88,0,40-96,128-96h32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M245.66,85.66l-32,32a8,8,0,0,1-11.32-11.32L220.69,88H208c-38.67,0-46.59,19-56.62,43.08C141.05,155.88,129.33,184,80,184H79a32,32,0,1,1,0-16h1c38.67,0,46.59-19,56.62-43.08C147,100.12,158.67,72,208,72h12.69L202.34,53.66a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,245.66,85.66Z" fill="currentColor"/></>,
  duotone: <><circle cx="48" cy="176" r="32" opacity="0.2" fill="currentColor"/><circle cx="48" cy="176" r="32" strokeWidth="16" className="draw-line"/><polyline points="208 48 240 80 208 112" strokeWidth="16" className="draw-line"/><path d="M80,176c88,0,40-96,128-96h32" strokeWidth="16" className="draw-line"/></>,
};

export const FlowArrowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
