import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M60,136a20,20,0,0,1-4-39.6V96a72,72,0,0,1,144,0v.4a20,20,0,0,1-4,39.6Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,97.37V96A80,80,0,0,0,48,96v1.37A24,24,0,0,0,56,144h3.29l54.82,95.94a16,16,0,0,0,27.78,0L196.71,144H200a24,24,0,0,0,8-46.63ZM146.89,198.94,115.5,144h19.29l21.75,38.06ZM77.71,144H97.07l40.61,71.06L128,232Zm88,21.94L153.21,144h25.08Z" fill="currentColor"/></>,
  duotone: <><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" opacity="0.2" fill="currentColor"/><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" strokeWidth="16" className="draw-line"/></>,
};

export const IceCreamIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
