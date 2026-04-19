import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="116 160 132 128 100 128 116 96" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="116 160 132 128 100 128 116 96" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="116 160 132 128 100 128 116 96" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="12" y="64" width="200" height="128" rx="16" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="116 156 132 128 100 128 116 100" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM224,80v96a24,24,0,0,1-24,24H32A24,24,0,0,1,8,176V80A24,24,0,0,1,32,56H200A24,24,0,0,1,224,80Zm-85.19,43.79A8,8,0,0,0,132,120H112.94l10.22-20.42a8,8,0,1,0-14.32-7.16l-16,32A8,8,0,0,0,100,136h19.06l-10.22,20.42a8,8,0,0,0,14.32,7.16l16-32A8,8,0,0,0,138.81,123.79Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="64" width="200" height="128" rx="16" opacity="0.2" fill="currentColor"/><rect x="16" y="64" width="200" height="128" rx="16" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="116 160 132 128 100 128 116 96" strokeWidth="16" className="draw-line"/></>,
};

export const BatteryChargingIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
