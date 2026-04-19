import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="160" width="208" height="40" rx="8" strokeWidth="8" className="draw-line"/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" strokeWidth="8" className="draw-line"/><path d="M216,160V136a88,88,0,0,0-64-84.69" strokeWidth="8" className="draw-line"/><path d="M40,160V136a88,88,0,0,1,64-84.69" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="24" y="160" width="208" height="40" rx="8" strokeWidth="12" className="draw-line"/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" strokeWidth="12" className="draw-line"/><path d="M216,160V136a88,88,0,0,0-64-84.69" strokeWidth="12" className="draw-line"/><path d="M40,160V136a88,88,0,0,1,64-84.69" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="24" y="160" width="208" height="40" rx="8" strokeWidth="16" className="draw-line"/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" strokeWidth="16" className="draw-line"/><path d="M216,160V136a88,88,0,0,0-64-84.69" strokeWidth="16" className="draw-line"/><path d="M40,160V136a88,88,0,0,1,64-84.69" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="24" y="160" width="208" height="40" rx="8" strokeWidth="24" className="draw-line"/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" strokeWidth="24" className="draw-line"/><path d="M216,160V136a88,88,0,0,0-64-84.69" strokeWidth="24" className="draw-line"/><path d="M40,160V136a88,88,0,0,1,64-84.69" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M152,152H104V40a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm72,16H32a16,16,0,0,0-16,16v8a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16v-8A16,16,0,0,0,224,168Zm0-20V136a96.44,96.44,0,0,0-50.11-84.31A4,4,0,0,0,168,55.22V152h52A4,4,0,0,0,224,148ZM36,152H88V55.22a4,4,0,0,0-5.89-3.53A96.44,96.44,0,0,0,32,136v12A4,4,0,0,0,36,152Z" fill="currentColor"/></>,
  duotone: <><path d="M104,160V51.31A88,88,0,0,0,40,136v24Z" opacity="0.2" fill="currentColor"/><path d="M152,160V51.31A88,88,0,0,1,216,136v24Z" opacity="0.2" fill="currentColor"/><rect x="24" y="160" width="208" height="40" rx="8" strokeWidth="16" className="draw-line"/><path d="M104,160V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V160" strokeWidth="16" className="draw-line"/><path d="M216,160V136a88,88,0,0,0-64-84.69" strokeWidth="16" className="draw-line"/><path d="M40,160V136a88,88,0,0,1,64-84.69" strokeWidth="16" className="draw-line"/></>,
};

export const HardHatIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
