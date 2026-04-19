import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M200,112a48,48,0,0,0-37.71,77.71" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M200,112a48,48,0,0,0-37.71,77.71" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M200,112a48,48,0,0,0-37.71,77.71" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M200,112a48,48,0,0,0-37.71,77.71" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M192,16H104A16,16,0,0,0,88,32v76.69L49.25,147.43a58.92,58.92,0,0,0,83.32,83.32L201,162.34a23.85,23.85,0,0,0,7-17V32A16,16,0,0,0,192,16Zm0,16h0V56H104V32Zm-2.34,119L157.8,182.88a48,48,0,0,1,34.2-70.2v32.69A8,8,0,0,1,189.66,151Z" fill="currentColor"/></>,
  duotone: <><path d="M200,145.37V112a48,48,0,0,0-37.71,77.71l33-33A16,16,0,0,0,200,145.37Z" opacity="0.2" fill="currentColor"/><path d="M96,32a8,8,0,0,1,8-8h88a8,8,0,0,1,8,8V56H96Z" opacity="0.2" fill="currentColor"/><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M200,112a48,48,0,0,0-37.71,77.71" strokeWidth="16" className="draw-line"/></>,
};

export const SockIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
