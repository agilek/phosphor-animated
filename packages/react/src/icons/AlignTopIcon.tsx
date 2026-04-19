import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" strokeWidth="8" className="draw-line"/><rect x="56" y="72" width="56" height="152" rx="8" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" strokeWidth="12" className="draw-line"/><rect x="56" y="72" width="56" height="152" rx="8" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" strokeWidth="16" className="draw-line"/><rect x="56" y="72" width="56" height="152" rx="8" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><rect x="122" y="106" width="104" height="52" rx="8" transform="translate(306 -42) rotate(90)" strokeWidth="24" className="draw-line"/><rect x="56" y="80" width="52" height="144" rx="8" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,40a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM192,64H152a16,16,0,0,0-16,16v96a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,192,64Zm-88,0H64A16,16,0,0,0,48,80V216a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V80A16,16,0,0,0,104,64Z" fill="currentColor"/></>,
  duotone: <><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="56" y="72" width="56" height="152" rx="8" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" strokeWidth="16" className="draw-line"/><rect x="56" y="72" width="56" height="152" rx="8" strokeWidth="16" className="draw-line"/></>,
};

export const AlignTopIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
