import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" strokeWidth="8" className="draw-line"/><polyline points="128 72 128 128 184 128" strokeWidth="8" className="draw-line"/><circle cx="160" cy="36" r="8" fill="currentColor"/><circle cx="196" cy="60" r="8" fill="currentColor"/><circle cx="220" cy="96" r="8" fill="currentColor"/></>,
  light: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" strokeWidth="12" className="draw-line"/><polyline points="128 72 128 128 184 128" strokeWidth="12" className="draw-line"/><circle cx="160" cy="36" r="10" fill="currentColor"/><circle cx="196" cy="60" r="10" fill="currentColor"/><circle cx="220" cy="96" r="10" fill="currentColor"/></>,
  regular: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" strokeWidth="16" className="draw-line"/><polyline points="128 72 128 128 184 128" strokeWidth="16" className="draw-line"/><circle cx="160" cy="36" r="12" fill="currentColor"/><circle cx="196" cy="60" r="12" fill="currentColor"/><circle cx="220" cy="96" r="12" fill="currentColor"/></>,
  bold: <><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" strokeWidth="24" className="draw-line"/><polyline points="128 76 128 128 180 128" strokeWidth="24" className="draw-line"/><circle cx="208" cy="80" r="16" fill="currentColor"/><circle cx="176" cy="48" r="16" fill="currentColor"/></>,
  fill: <><path d="M232,136.66A104.12,104.12,0,1,1,119.34,24,8,8,0,0,1,120.66,40,88.12,88.12,0,1,0,216,135.34,8,8,0,0,1,232,136.66ZM160,48a12,12,0,1,0-12-12A12,12,0,0,0,160,48Zm36,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72Zm24,36a12,12,0,1,0-12-12A12,12,0,0,0,220,108ZM128,56a72,72,0,1,1-72,72A72.08,72.08,0,0,1,128,56Zm-8,72a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H136V80a8,8,0,0,0-16,0Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><path d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96" strokeWidth="16" className="draw-line"/><polyline points="128 72 128 128 184 128" strokeWidth="16" className="draw-line"/><circle cx="160" cy="36" r="12" fill="currentColor"/><circle cx="196" cy="60" r="12" fill="currentColor"/><circle cx="220" cy="96" r="12" fill="currentColor"/></>,
};

export const ClockCountdownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
