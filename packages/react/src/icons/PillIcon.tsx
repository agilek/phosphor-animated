import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M216.43,39.6a53.27,53.27,0,0,0-75.33,0L39.6,141.09a53.26,53.26,0,0,0,75.32,75.31L216.43,114.91A53.32,53.32,0,0,0,216.43,39.6Zm-11.32,64-50.75,50.74-52.69-52.68,50.75-50.75a37.26,37.26,0,0,1,52.69,52.69ZM189.68,82.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,1,1-11.31-11.32l24-24A8,8,0,0,1,189.68,82.34Z" fill="currentColor"/></>,
  duotone: <><path d="M109.25,210.75a45.26,45.26,0,0,1-64,0h0a45.26,45.26,0,0,1,0-64L96,96l64,64Z" opacity="0.2" fill="currentColor"/><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const PillIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
