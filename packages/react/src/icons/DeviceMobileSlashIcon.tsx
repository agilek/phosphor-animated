import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M76.7,24H176a16,16,0,0,1,16,16V150.83" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M76.7,24H176a16,16,0,0,1,16,16V150.83" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M76.7,24H176a16,16,0,0,1,16,16V150.83" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M87.51,24H176a16,16,0,0,1,16,16v98.94" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M213.38,221.92a8,8,0,0,1-11.3-.54l-2.26-2.48A24,24,0,0,1,176,240H80a24,24,0,0,1-24-24V60.69L42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92Zm-27.3-65.71A8,8,0,0,0,200,150.83V40a24,24,0,0,0-24-24H76.7a8,8,0,0,0-5.92,13.38Z" fill="currentColor"/></>,
  duotone: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M76.7,24H176a16,16,0,0,1,16,16V150.83" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const DeviceMobileSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
