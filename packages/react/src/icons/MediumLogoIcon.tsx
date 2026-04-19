import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="72" cy="128" r="56" strokeWidth="8" className="draw-line"/><ellipse cx="184" cy="128" rx="24" ry="56" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="72" cy="128" r="56" strokeWidth="12" className="draw-line"/><ellipse cx="184" cy="128" rx="24" ry="56" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="72" cy="128" r="56" strokeWidth="16" className="draw-line"/><ellipse cx="184" cy="128" rx="24" ry="56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="68" cy="128" r="56" strokeWidth="24" className="draw-line"/><ellipse cx="184" cy="128" rx="24" ry="56" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M136,128A64,64,0,1,1,72,64,64.07,64.07,0,0,1,136,128Zm48-64c-5.68,0-16.4,2.76-24.32,21.25C154.73,96.8,152,112,152,128s2.73,31.2,7.68,42.75C167.6,189.24,178.32,192,184,192s16.4-2.76,24.32-21.25C213.27,159.2,216,144,216,128s-2.73-31.2-7.68-42.75C200.4,66.76,189.68,64,184,64Zm56,0a8,8,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8,8,0,0,0,240,64Z" fill="currentColor"/></>,
  duotone: <><circle cx="72" cy="128" r="56" opacity="0.2" fill="currentColor"/><ellipse cx="184" cy="128" rx="24" ry="56" opacity="0.2" fill="currentColor"/><circle cx="72" cy="128" r="56" strokeWidth="16" className="draw-line"/><ellipse cx="184" cy="128" rx="24" ry="56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const MediumLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
