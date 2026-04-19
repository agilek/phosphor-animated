import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="76" r="8" fill="currentColor"/><circle cx="128" cy="152" r="32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="76" r="10" fill="currentColor"/><circle cx="128" cy="152" r="32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="76" r="12" fill="currentColor"/><circle cx="128" cy="152" r="32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="76" r="16" fill="currentColor"/><circle cx="128" cy="152" r="32" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M152,160a24,24,0,1,1-24-24A24,24,0,0,1,152,160ZM208,40V216a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V40A16,16,0,0,1,64,24H192A16,16,0,0,1,208,40ZM116,68a12,12,0,1,0,12-12A12,12,0,0,0,116,68Zm52,92a40,40,0,1,0-40,40A40,40,0,0,0,168,160Z" fill="currentColor"/></>,
  duotone: <><path d="M192,32H64a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V40A8,8,0,0,0,192,32ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184Z" opacity="0.2" fill="currentColor"/><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="76" r="12" fill="currentColor"/><circle cx="128" cy="152" r="32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const SpeakerHifiIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
