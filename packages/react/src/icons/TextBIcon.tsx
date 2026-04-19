import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M168,156a20,20,0,0,1-20,20H96V136h52A20,20,0,0,1,168,156ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM184,156a36,36,0,0,0-18-31.15A36,36,0,0,0,140,64H88a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8h60A36,36,0,0,0,184,156Zm-24-56a20,20,0,0,0-20-20H96v40h44A20,20,0,0,0,160,100Z" fill="currentColor"/></>,
  duotone: <><path d="M160,120H148a36,36,0,0,0,0-72H80V200h80a40,40,0,0,0,0-80Z" opacity="0.2" fill="currentColor"/><path d="M80,120h80a40,40,0,0,1,0,80H80V48h68a36,36,0,0,1,0,72" strokeWidth="16" className="draw-line"/></>,
};

export const TextBIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
