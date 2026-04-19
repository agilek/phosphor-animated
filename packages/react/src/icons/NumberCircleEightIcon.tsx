import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="100" r="24" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="128" cy="152" r="28" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="100" r="24" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="128" cy="152" r="28" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="100" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="128" cy="152" r="28" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="100" r="24" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="128" cy="152" r="28" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M148,152a20,20,0,1,1-20-20A20,20,0,0,1,148,152Zm-20-36a16,16,0,1,0-16-16A16,16,0,0,0,128,116Zm104,12A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-68,24a35.93,35.93,0,0,0-14.19-28.61,32,32,0,1,0-43.62,0A36,36,0,1,0,164,152Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="100" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="128" cy="152" r="28" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const NumberCircleEightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
