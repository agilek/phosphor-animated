import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="-6" y="102" width="176" height="52" rx="8" transform="translate(210 46) rotate(90)" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><rect x="86" y="102" width="176" height="52" rx="8" transform="translate(302 -46) rotate(90)" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M120,48V208a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V48A16,16,0,0,1,64,32h40A16,16,0,0,1,120,48Zm72-16H152a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z" fill="currentColor"/></>,
  duotone: <><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" opacity="0.2" fill="currentColor"/><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ColumnsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
