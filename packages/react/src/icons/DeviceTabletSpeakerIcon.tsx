import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM160,72H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const DeviceTabletSpeakerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
