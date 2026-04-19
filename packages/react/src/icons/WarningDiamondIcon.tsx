import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="172" r="8" fill="currentColor"/><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="172" r="10" fill="currentColor"/><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="172" r="12" fill="currentColor"/><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="172" r="16" fill="currentColor"/><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" fill="currentColor"/></>,
  duotone: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="172" r="12" fill="currentColor"/><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const WarningDiamondIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
