import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M246.66,123.56,201,55.13A15.94,15.94,0,0,0,187.72,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H187.72A16,16,0,0,0,201,200.88h0l45.63-68.44A8,8,0,0,0,246.66,123.56Z" fill="currentColor"/></>,
  duotone: <><path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" opacity="0.2" fill="currentColor"/><path d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const TagSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
