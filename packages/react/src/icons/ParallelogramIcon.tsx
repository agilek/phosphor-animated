import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M246.58,62.57l-64.8,144A16,16,0,0,1,167.19,216H24A16,16,0,0,1,9.42,193.43l64.8-144A16,16,0,0,1,88.81,40H232a16,16,0,0,1,14.59,22.57Z" fill="currentColor"/></>,
  duotone: <><path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" opacity="0.2" fill="currentColor"/><path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" strokeWidth="16" className="draw-line"/></>,
};

export const ParallelogramIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
