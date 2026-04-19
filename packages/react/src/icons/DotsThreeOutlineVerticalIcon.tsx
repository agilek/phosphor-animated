import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="24" strokeWidth="8" className="draw-line"/><circle cx="128" cy="48" r="24" strokeWidth="8" className="draw-line"/><circle cx="128" cy="208" r="24" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="24" strokeWidth="12" className="draw-line"/><circle cx="128" cy="48" r="24" strokeWidth="12" className="draw-line"/><circle cx="128" cy="208" r="24" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="24" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><circle cx="128" cy="48" r="24" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><circle cx="128" cy="208" r="24" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="20" strokeWidth="24" className="draw-line"/><circle cx="128" cy="48" r="20" strokeWidth="24" className="draw-line"/><circle cx="128" cy="208" r="20" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28,28,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28,28,0,0,0,128,180Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="24" opacity="0.2" fill="currentColor"/><circle cx="128" cy="48" r="24" opacity="0.2" fill="currentColor"/><circle cx="128" cy="208" r="24" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="24" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><circle cx="128" cy="48" r="24" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/><circle cx="128" cy="208" r="24" strokeMiterlimit="10" strokeWidth="16" className="draw-line"/></>,
};

export const DotsThreeOutlineVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
