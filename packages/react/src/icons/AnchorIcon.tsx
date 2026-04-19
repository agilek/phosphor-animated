import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><circle cx="128" cy="56" r="24" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M216,144c0,64-88,24-88,88,0-64-88-24-88-88" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><circle cx="128" cy="56" r="24" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M216,144c0,64-88,24-88,88,0-64-88-24-88-88" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="56" r="24" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M216,144c0,64-88,24-88,88,0-64-88-24-88-88" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><circle cx="128" cy="56" r="24" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M216,144c0,64-88,24-88,88,0-64-88-24-88-88" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,144c0,38.11-27.67,45.66-49.9,51.72C149.77,202.36,136,207.31,136,232a8,8,0,0,1-16,0c0-24.69-13.77-29.64-38.1-36.28C59.67,189.66,32,182.11,32,144a8,8,0,0,1,16,0c0,24.69,13.77,29.64,38.1,36.28,11.36,3.1,24.12,6.6,33.9,14.34V128H88a8,8,0,0,1,0-16h32V82.83a28,28,0,1,1,16,0V112h32a8,8,0,0,1,0,16H136v66.62c9.78-7.74,22.54-11.24,33.9-14.34C194.23,173.64,208,168.69,208,144a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="56" r="24" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><circle cx="128" cy="56" r="24" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M216,144c0,64-88,24-88,88,0-64-88-24-88-88" strokeWidth="16" className="draw-line"/></>,
};

export const AnchorIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
