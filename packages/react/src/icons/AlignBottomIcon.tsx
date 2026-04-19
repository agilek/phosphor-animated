import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="56" y="32" width="56" height="152" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="56" y="32" width="56" height="152" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="56" y="32" width="56" height="152" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><rect x="122" y="98" width="104" height="52" rx="8" transform="translate(50 298) rotate(-90)" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="56" y="32" width="52" height="144" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-72-24h40a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v96A16,16,0,0,0,152,192Zm-88,0h40a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V176A16,16,0,0,0,64,192Z" fill="currentColor"/></>,
  duotone: <><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" opacity="0.2" fill="currentColor"/><rect x="56" y="32" width="56" height="152" rx="8" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(44 300) rotate(-90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><rect x="56" y="32" width="56" height="152" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const AlignBottomIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
