import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" strokeWidth="8" className="draw-line"/><polygon points="176 104 128 224 80 104 128 40 176 104" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" strokeWidth="12" className="draw-line"/><polygon points="176 104 128 224 80 104 128 40 176 104" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" strokeWidth="16" className="draw-line"/><polygon points="176 104 128 224 80 104 128 40 176 104" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" strokeWidth="24" className="draw-line"/><polygon points="176 104 128 224 80 104 128 40 176 104" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M246,98.73l-56-64A8,8,0,0,0,184,32H72a8,8,0,0,0-6,2.73l-56,64a8,8,0,0,0,.17,10.73l112,120a8,8,0,0,0,11.7,0l112-120A8,8,0,0,0,246,98.73ZM222.37,96H180L144,48h36.37ZM74.58,112l30.13,75.33L34.41,112Zm106.84,0h40.17l-70.3,75.33ZM75.63,48H112L76,96H33.63Z" fill="currentColor"/></>,
  duotone: <><polygon points="80 104 128 40 184 40 240 104 128 224 80 104" opacity="0.2" fill="currentColor"/><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" strokeWidth="16" className="draw-line"/><polygon points="176 104 128 224 80 104 128 40 176 104" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const SketchLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
