import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M240,144H192l43.17-57.56A24,24,0,1,0,193.37,64" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M240,144H192l43.17-57.56A24,24,0,1,0,193.37,64" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M240,144H192l43.17-57.56A24,24,0,1,0,193.37,64" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M240,144H192l43.17-57.56A24,24,0,1,0,193.37,64" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM126.55,179.41a8,8,0,1,1-13.1,9.18L92,158,70.55,188.59a8,8,0,1,1-13.1-9.18L82.23,144,57.45,108.59a8,8,0,1,1,13.1-9.18L92,130.05l21.45-30.64a8,8,0,0,1,13.1,9.18L101.77,144ZM192,160H152a8,8,0,0,1-6.4-12.8l36-48a12,12,0,1,0-19.15-14.46,13.06,13.06,0,0,0-2.58,4.81,8,8,0,1,1-15.68-3.18,28.17,28.17,0,1,1,50.2,22.44L168,144h24a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M56,48H224a16,16,0,0,1,16,16V184a16,16,0,0,1-16,16H40a0,0,0,0,1,0,0V64A16,16,0,0,1,56,48Z" opacity="0.2" fill="currentColor"/><path d="M240,144H192l43.17-57.56A24,24,0,1,0,193.37,64" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const TextSuperscriptIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
