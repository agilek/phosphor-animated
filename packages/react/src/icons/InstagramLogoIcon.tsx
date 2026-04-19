import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="40" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="32" width="192" height="192" rx="48" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="76" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="128" r="40" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="32" width="192" height="192" rx="48" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="76" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="40" strokeMiterlimit="10" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="32" width="192" height="192" rx="48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="76" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="128" r="36" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="32" width="192" height="192" rx="48" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="76" r="16" fill="currentColor"/></>,
  fill: <><path d="M160,128a32,32,0,1,1-32-32A32,32,0,0,1,160,128Zm72-48v96a56.06,56.06,0,0,1-56,56H80a56.06,56.06,0,0,1-56-56V80A56.06,56.06,0,0,1,80,24h96A56.06,56.06,0,0,1,232,80Zm-56,48a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128Zm24-60a12,12,0,1,0-12,12A12,12,0,0,0,200,68Z" fill="currentColor"/></>,
  duotone: <><path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2" fill="currentColor"/><rect x="32" y="32" width="192" height="192" rx="48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="40" strokeMiterlimit="10" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="76" r="12" fill="currentColor"/></>,
};

export const InstagramLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
