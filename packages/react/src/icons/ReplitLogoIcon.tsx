import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M144,40V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H216a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,144,40Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M144,40V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H216a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,144,40Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M144,40V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H216a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,144,40Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M144,40V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H216a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,144,40Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M144,40V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H216a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,144,40Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ReplitLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
