import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="104" cy="144" r="32" strokeWidth="8" className="draw-line"/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" strokeWidth="8" className="draw-line"/><polyline points="176 176 192 176 192 80 64 80 64 96" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="104" cy="144" r="32" strokeWidth="12" className="draw-line"/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" strokeWidth="12" className="draw-line"/><polyline points="176 176 192 176 192 80 64 80 64 96" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="104" cy="144" r="32" strokeWidth="16" className="draw-line"/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" strokeWidth="16" className="draw-line"/><polyline points="176 176 192 176 192 80 64 80 64 96" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="104" cy="148" r="28" strokeWidth="24" className="draw-line"/><polyline points="188 172 188 84 68 84" strokeWidth="24" className="draw-line"/><path d="M149.26,208H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H58.73a48,48,0,0,1,90.54,0Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.39a8,8,0,0,0,7.23-4.57,48,48,0,0,1,86.76,0,8,8,0,0,0,7.23,4.57H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,168a32,32,0,1,1,32-32A32,32,0,0,1,104,168Zm112,32H159.43a63.93,63.93,0,0,0-13.16-16H192a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v96a8,8,0,0,0,6,7.75A63.72,63.72,0,0,0,48.57,200H40V56H216Z" fill="currentColor"/></>,
  duotone: <><circle cx="104" cy="144" r="32" strokeWidth="16" className="draw-line"/><path d="M72,144a32,32,0,1,1,32,32h88V80H64v64Z" opacity="0.2" fill="currentColor"/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" strokeWidth="16" className="draw-line"/><polyline points="176 176 192 176 192 80 64 80 64 96" strokeWidth="16" className="draw-line"/></>,
};

export const ChalkboardTeacherIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
