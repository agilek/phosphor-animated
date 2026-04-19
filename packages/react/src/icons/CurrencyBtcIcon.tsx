import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M88,120h72a40,40,0,0,1,0,80H88V48h60a36,36,0,0,1,0,72" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M88,120h72a40,40,0,0,1,0,80H88V48h60a36,36,0,0,1,0,72" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M88,120h72a40,40,0,0,1,0,80H88V48h60a36,36,0,0,1,0,72" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M88,120h72a40,40,0,0,1,0,80H88V48h60a36,36,0,0,1,0,72" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M176,152a16,16,0,0,1-16,16H112V136h48A16,16,0,0,1,176,152Zm64-24A104,104,0,1,1,136,24,104.11,104.11,0,0,1,240,128Zm-48,24a32,32,0,0,0-15.51-27.42A32,32,0,0,0,160,73V64a8,8,0,0,0-16,0v8H128V64a8,8,0,0,0-16,0v8H96a8,8,0,0,0,0,16v80a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h16v8a8,8,0,0,0,16,0v-8A32,32,0,0,0,192,152Zm-24-48a16,16,0,0,0-16-16H112v32h40A16,16,0,0,0,168,104Z" fill="currentColor"/></>,
  duotone: <><path d="M160,120H148a36,36,0,0,0,0-72H88V200h72a40,40,0,0,0,0-80Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M88,120h72a40,40,0,0,1,0,80H88V48h60a36,36,0,0,1,0,72" strokeWidth="16" className="draw-line"/></>,
};

export const CurrencyBtcIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
