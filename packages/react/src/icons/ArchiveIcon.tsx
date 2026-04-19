import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="56" width="208" height="40" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="24" y="56" width="208" height="40" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="24" y="56" width="208" height="40" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="24" y="56" width="208" height="40" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-72,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm72-56H32V64H224V88Z" fill="currentColor"/></>,
  duotone: <><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z" opacity="0.2" fill="currentColor"/><rect x="24" y="56" width="208" height="40" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ArchiveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
