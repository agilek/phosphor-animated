import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,156.18V196a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM184,192H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.91L223.89,102l.11,0v36Z" fill="currentColor"/></>,
  duotone: <><path d="M144,69.09,50.24,40.33A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.67L144,170.91Z" opacity="0.2" fill="currentColor"/><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M192,156.18V192a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const MegaphoneSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
