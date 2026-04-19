import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><polyline points="96 88 136 128 96 168" strokeWidth="8" className="draw-line"/><polyline points="136 40 200 40 200 216 136 216" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><polyline points="96 88 136 128 96 168" strokeWidth="12" className="draw-line"/><polyline points="136 40 200 40 200 216 136 216" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><polyline points="96 88 136 128 96 168" strokeWidth="16" className="draw-line"/><polyline points="136 40 200 40 200 216 136 216" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><polyline points="96 88 136 128 96 168" strokeWidth="24" className="draw-line"/><polyline points="136 40 200 40 200 216 136 216" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M141.66,133.66l-40,40A8,8,0,0,1,88,168V136H24a8,8,0,0,1,0-16H88V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,141.66,133.66ZM200,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h64a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32Z" fill="currentColor"/></>,
  duotone: <><path d="M40,40H200a0,0,0,0,1,0,0V216a0,0,0,0,1,0,0H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><polyline points="96 88 136 128 96 168" strokeWidth="16" className="draw-line"/><polyline points="136 40 200 40 200 216 136 216" strokeWidth="16" className="draw-line"/></>,
};

export const SignInIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
