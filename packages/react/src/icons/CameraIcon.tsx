import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z" fill="currentColor"/></>,
  duotone: <><path d="M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z" opacity="0.2" fill="currentColor"/><path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="132" r="36" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const CameraIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
