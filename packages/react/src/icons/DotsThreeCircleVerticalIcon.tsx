import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><circle cx="128" cy="84" r="8" fill="currentColor"/><circle cx="128" cy="128" r="8" fill="currentColor"/><circle cx="128" cy="172" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><circle cx="128" cy="84" r="10" fill="currentColor"/><circle cx="128" cy="128" r="10" fill="currentColor"/><circle cx="128" cy="172" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="128" cy="84" r="12" fill="currentColor"/><circle cx="128" cy="172" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><circle cx="128" cy="96" r="16" fill="currentColor"/><circle cx="128" cy="160" r="16" fill="currentColor"/></>,
  fill: <><path d="M232,128A104,104,0,1,0,128,232,104.13,104.13,0,0,0,232,128ZM116,84a12,12,0,1,1,12,12A12,12,0,0,1,116,84Zm0,44a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm0,44a12,12,0,1,1,12,12A12,12,0,0,1,116,172Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="128" cy="84" r="12" fill="currentColor"/><circle cx="128" cy="172" r="12" fill="currentColor"/></>,
};

export const DotsThreeCircleVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
