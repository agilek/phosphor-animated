import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM160,64H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const DeviceMobileSpeakerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
