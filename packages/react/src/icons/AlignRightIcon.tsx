import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" strokeWidth="8" className="draw-line"/><rect x="32" y="144" width="152" height="56" rx="8" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" strokeWidth="12" className="draw-line"/><rect x="32" y="144" width="152" height="56" rx="8" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" strokeWidth="16" className="draw-line"/><rect x="32" y="144" width="152" height="56" rx="8" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><rect x="72" y="56" width="104" height="52" rx="8" transform="translate(248 164) rotate(180)" strokeWidth="24" className="draw-line"/><rect x="32" y="148" width="144" height="52" rx="8" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm-48,8H80A16,16,0,0,0,64,64v40a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V64A16,16,0,0,0,176,48Zm0,88H40a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V152A16,16,0,0,0,176,136Z" fill="currentColor"/></>,
  duotone: <><rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" opacity="0.2" fill="currentColor"/><rect x="32" y="144" width="152" height="56" rx="8" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" strokeWidth="16" className="draw-line"/><rect x="32" y="144" width="152" height="56" rx="8" strokeWidth="16" className="draw-line"/></>,
};

export const AlignRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
