import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="136" y="104" width="128" height="80" rx="16" transform="translate(344 -56) rotate(90)" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M160,176H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184a16,16,0,0,1,16,16V80" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="136" y="104" width="128" height="80" rx="16" transform="translate(344 -56) rotate(90)" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M160,176H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184a16,16,0,0,1,16,16V80" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="136" y="104" width="128" height="80" rx="16" transform="translate(344 -56) rotate(90)" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M160,176H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184a16,16,0,0,1,16,16V80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="132" y="100" width="124" height="92" rx="16" transform="translate(340 -48) rotate(90)" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M148,168H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184a16,16,0,0,1,16,16V84" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72Zm8,120a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z" fill="currentColor"/></>,
  duotone: <><path d="M160,96a16,16,0,0,1,16-16h24V64a16,16,0,0,0-16-16H40A16,16,0,0,0,24,64v96a16,16,0,0,0,16,16H160Z" opacity="0.2" fill="currentColor"/><rect x="136" y="104" width="128" height="80" rx="16" transform="translate(344 -56) rotate(90)" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M160,176H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H184a16,16,0,0,1,16,16V80" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const DevicesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
