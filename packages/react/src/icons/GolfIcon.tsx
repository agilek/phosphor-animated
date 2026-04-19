import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="164" cy="100" r="8" fill="currentColor"/><circle cx="132" cy="132" r="8" fill="currentColor"/><circle cx="128" cy="96" r="80" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M168,200c-12.42,4.75-25.91,8-40,8s-27.58-3.25-40-8" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="164" cy="100" r="10" fill="currentColor"/><circle cx="132" cy="132" r="10" fill="currentColor"/><circle cx="128" cy="96" r="80" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M168,200c-12.42,4.75-25.91,8-40,8s-27.58-3.25-40-8" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="164" cy="100" r="12" fill="currentColor"/><circle cx="132" cy="132" r="12" fill="currentColor"/><circle cx="128" cy="96" r="80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M168,200c-12.42,4.75-25.91,8-40,8s-27.58-3.25-40-8" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="164" cy="100" r="16" fill="currentColor"/><circle cx="132" cy="132" r="16" fill="currentColor"/><circle cx="128" cy="96" r="80" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M168,209.17a120.55,120.55,0,0,1-80,0" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M175.47,197.14a8,8,0,0,1-4.61,10.33A125.91,125.91,0,0,1,136,215.68V248a8,8,0,0,1-16,0V215.68a125.91,125.91,0,0,1-34.86-8.21,8,8,0,1,1,5.72-14.94C104,197.56,116.15,200,128,200s24-2.44,37.14-7.47A8,8,0,0,1,175.47,197.14ZM216,96A88,88,0,1,1,128,8,88.1,88.1,0,0,1,216,96Zm-72,36a12,12,0,1,0-12,12A12,12,0,0,0,144,132Zm32-32a12,12,0,1,0-12,12A12,12,0,0,0,176,100Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="96" r="80" opacity="0.2" fill="currentColor"/><circle cx="164" cy="100" r="12" fill="currentColor"/><circle cx="132" cy="132" r="12" fill="currentColor"/><circle cx="128" cy="96" r="80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M168,200c-12.42,4.75-25.91,8-40,8s-27.58-3.25-40-8" strokeWidth="16" className="draw-line"/></>,
};

export const GolfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
