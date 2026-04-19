import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M48,216V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V216" strokeWidth="8" className="draw-line"/><path d="M160,120h64a8,8,0,0,1,8,8v88" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="128 216 128 160 80 160 80 216" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M48,216V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V216" strokeWidth="12" className="draw-line"/><path d="M160,120h64a8,8,0,0,1,8,8v88" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="128 216 128 160 80 160 80 216" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M48,216V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V216" strokeWidth="16" className="draw-line"/><path d="M160,120h64a8,8,0,0,1,8,8v88" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="128 216 128 160 80 160 80 216" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M48,216V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V216" strokeWidth="24" className="draw-line"/><path d="M160,120h60a8,8,0,0,1,8,8v88" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="124 216 124 160 84 160 84 216" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M248,208h-8V128a16,16,0,0,0-16-16H168V48a16,16,0,0,0-16-16H56A16,16,0,0,0,40,48V208H32a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16Zm-120,0H80V160h48Zm0-104H112v16a8,8,0,0,1-16,0V104H80a8,8,0,0,1,0-16H96V72a8,8,0,0,1,16,0V88h16a8,8,0,0,1,0,16Zm96,104H168V128h56Z" fill="currentColor"/></>,
  duotone: <><path d="M152,40H56a8,8,0,0,0-8,8V216H80V160h48v56h32V48A8,8,0,0,0,152,40Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M48,216V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V216" strokeWidth="16" className="draw-line"/><path d="M160,120h64a8,8,0,0,1,8,8v88" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="128 216 128 160 80 160 80 216" strokeWidth="16" className="draw-line"/></>,
};

export const HospitalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
