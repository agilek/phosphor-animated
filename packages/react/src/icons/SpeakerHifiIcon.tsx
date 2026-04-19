import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="152" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SpeakerHifiIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
