import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" strokeWidth="8" className="draw-line"/><path d="M224,186V56a8,8,0,0,0-8-8H98.52" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" strokeWidth="12" className="draw-line"/><path d="M224,186V56a8,8,0,0,0-8-8H98.52" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" strokeWidth="16" className="draw-line"/><path d="M224,186V56a8,8,0,0,0-8-8H98.52" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" strokeWidth="24" className="draw-line"/><path d="M224,174.14V56a8,8,0,0,0-8-8H109.33" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,56V184a15.93,15.93,0,0,1-4.82,11.42,4,4,0,0,1-5.68-.25L86.52,46.69a4,4,0,0,1,3-6.69H216A16,16,0,0,1,232,56ZM53.92,34.62A8,8,0,0,0,40,40h0A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200h27.07l19.44,21.38a8,8,0,1,0,11.84-10.76Z" fill="currentColor"/></>,
  duotone: <><path d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M55.27,48H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h65.07l16,28a8,8,0,0,0,13.9,0l16-28h35.25" strokeWidth="16" className="draw-line"/><path d="M224,186V56a8,8,0,0,0-8-8H98.52" strokeWidth="16" className="draw-line"/></>,
};

export const ChatCenteredSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
