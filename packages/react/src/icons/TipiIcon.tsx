import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="104 16 232 216 24 216 152 16" strokeWidth="8" className="draw-line"/><polyline points="71.68 216 128 128 184.32 216" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="104 16 232 216 24 216 152 16" strokeWidth="12" className="draw-line"/><polyline points="71.68 216 128 128 184.32 216" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="104 16 232 216 24 216 152 16" strokeWidth="16" className="draw-line"/><polyline points="71.68 216 128 128 184.32 216" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="104 16 232 216 24 216 152 16" strokeWidth="24" className="draw-line"/><polyline points="74.24 216 128 132 181.76 216" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M238.74,211.69,137.5,53.5l21.24-33.19a8,8,0,0,0-13.48-8.62L128,38.66l-17.26-27a8,8,0,1,0-13.48,8.62L118.5,53.5,17.26,211.69A8,8,0,0,0,24,224H232a8,8,0,0,0,6.74-12.31Zm-50-3.69-54-84.31a8,8,0,0,0-13.48,0L67.3,208H38.62L128,68.34,217.38,208Z" fill="currentColor"/></>,
  duotone: <><polygon points="71.68 216 128 128 184.32 216 71.68 216" opacity="0.2" fill="currentColor"/><polyline points="104 16 232 216 24 216 152 16" strokeWidth="16" className="draw-line"/><polyline points="71.68 216 128 128 184.32 216" strokeWidth="16" className="draw-line"/></>,
};

export const TipiIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
