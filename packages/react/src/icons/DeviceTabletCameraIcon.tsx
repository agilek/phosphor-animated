import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="68" r="8" fill="currentColor"/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="68" r="10" fill="currentColor"/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="68" r="12" fill="currentColor"/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="76" r="16" fill="currentColor"/></>,
  fill: <><path d="M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM128,80a12,12,0,1,1,12-12A12,12,0,0,1,128,80Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="68" r="12" fill="currentColor"/></>,
};

export const DeviceTabletCameraIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
