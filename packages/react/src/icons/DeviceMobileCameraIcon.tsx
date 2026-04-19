import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="60" r="8" fill="currentColor"/></>,
  light: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="60" r="10" fill="currentColor"/></>,
  regular: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="60" r="12" fill="currentColor"/></>,
  bold: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="68" r="16" fill="currentColor"/></>,
  fill: <><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM128,72a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z" fill="currentColor"/></>,
  duotone: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="60" r="12" fill="currentColor"/></>,
};

export const DeviceMobileCameraIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
