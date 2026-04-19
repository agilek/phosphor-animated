import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M104,136v28a36,36,0,0,1-72,0V136" strokeWidth="8" className="draw-line"/><path d="M224,136v28a36,36,0,0,1-72,0V136" strokeWidth="8" className="draw-line"/><path d="M200,48a24,24,0,0,1,24,24v64H32V72A24,24,0,0,1,56,48" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M104,136v28a36,36,0,0,1-72,0V136" strokeWidth="12" className="draw-line"/><path d="M224,136v28a36,36,0,0,1-72,0V136" strokeWidth="12" className="draw-line"/><path d="M200,48a24,24,0,0,1,24,24v64H32V72A24,24,0,0,1,56,48" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M104,136v28a36,36,0,0,1-72,0V136" strokeWidth="16" className="draw-line"/><path d="M224,136v28a36,36,0,0,1-72,0V136" strokeWidth="16" className="draw-line"/><path d="M200,48a24,24,0,0,1,24,24v64H32V72A24,24,0,0,1,56,48" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M104,136v28a36,36,0,0,1-72,0V136" strokeWidth="24" className="draw-line"/><path d="M224,136v28a36,36,0,0,1-72,0V136" strokeWidth="24" className="draw-line"/><path d="M200,48a24,24,0,0,1,24,24v64H32V72A24,24,0,0,1,56,48" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v56H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,88,0V144h32v20a44,44,0,0,0,88,0V72A32,32,0,0,0,200,40ZM91.22,179.22a8,8,0,0,1-11.31,0L58.34,157.66a8,8,0,0,1,11.32-11.32l21.56,21.57A8,8,0,0,1,91.22,179.22Zm120,0a8,8,0,0,1-11.31,0l-21.57-21.56a8,8,0,0,1,11.32-11.32l21.56,21.57A8,8,0,0,1,211.22,179.22Z" fill="currentColor"/></>,
  duotone: <><path d="M104,136v28a36,36,0,0,1-72,0V136Z" opacity="0.2" fill="currentColor"/><path d="M224,136v28a36,36,0,0,1-72,0V136Z" opacity="0.2" fill="currentColor"/><path d="M104,136v28a36,36,0,0,1-72,0V136" strokeWidth="16" className="draw-line"/><path d="M224,136v28a36,36,0,0,1-72,0V136" strokeWidth="16" className="draw-line"/><path d="M200,48a24,24,0,0,1,24,24v64H32V72A24,24,0,0,1,56,48" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const SunglassesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
