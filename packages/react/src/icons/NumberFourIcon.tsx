import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="184 168 64 168 160 48 160 208" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="184 168 64 168 160 48 160 208" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="184 168 64 168 160 48 160 208" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="184 168 64 168 160 48 160 208" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M104.65,144,144,94.81V144ZM216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM184,152a8,8,0,0,0-8-8H160V72a8,8,0,0,0-14.25-5l-64,80A8,8,0,0,0,88,160h56v24a8,8,0,0,0,16,0V160h16A8,8,0,0,0,184,152Z" fill="currentColor"/></>,
  duotone: <><path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2" fill="currentColor"/><polyline points="184 168 64 168 160 48 160 208" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const NumberFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
