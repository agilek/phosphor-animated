import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="128 168 144 136 112 136 128 104" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><rect x="64" y="40" width="128" height="200" rx="16" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="128 168 144 136 112 136 128 104" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><rect x="64" y="40" width="128" height="200" rx="16" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="128 168 144 136 112 136 128 104" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="64" y="40" width="128" height="200" rx="16" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="128 172 144 140 112 140 128 108" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><rect x="64" y="44" width="128" height="200" rx="16" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M176,32H80A24,24,0,0,0,56,56V224a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V56A24,24,0,0,0,176,32ZM151.16,139.58l-16,32a8,8,0,0,1-14.32-7.16L131.06,144H112a8,8,0,0,1-7.16-11.58l16-32a8,8,0,1,1,14.32,7.16L124.94,128H144a8,8,0,0,1,7.16,11.58ZM88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8Z" fill="currentColor"/></>,
  duotone: <><rect x="64" y="40" width="128" height="200" rx="16" opacity="0.2" fill="currentColor"/><polyline points="128 168 144 136 112 136 128 104" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="64" y="40" width="128" height="200" rx="16" strokeWidth="16" className="draw-line"/></>,
};

export const BatteryChargingVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
