import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M200,56H104a56,56,0,0,0,0,112h96" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M200,56H104a56,56,0,0,0,0,112h96" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M200,56H104a56,56,0,0,0,0,112h96" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M200,56H104a56,56,0,0,0,0,112h96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm-64-48h64a8,8,0,0,1,0,16H112a40,40,0,0,1,0-80h64a8,8,0,0,1,0,16H112a24,24,0,0,0,0,48Z" fill="currentColor"/></>,
  duotone: <><path d="M200,56H104a56,56,0,0,0,0,112h96Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M200,56H104a56,56,0,0,0,0,112h96" strokeWidth="16" className="draw-line"/></>,
};

export const SubsetOfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
