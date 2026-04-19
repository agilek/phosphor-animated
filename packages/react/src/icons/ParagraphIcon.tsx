import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M144,160H96A56,56,0,0,1,96,48H208" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M144,160H96A56,56,0,0,1,96,48H208" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M144,160H96A56,56,0,0,1,96,48H208" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M144,160H96A56,56,0,0,1,96,48H208" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,48a8,8,0,0,1-8,8H192V208a8,8,0,0,1-16,0V56H152V208a8,8,0,0,1-16,0V168H96A64,64,0,0,1,96,40H208A8,8,0,0,1,216,48Z" fill="currentColor"/></>,
  duotone: <><path d="M144,160H96A56,56,0,0,1,96,48h48Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M144,160H96A56,56,0,0,1,96,48H208" strokeWidth="16" className="draw-line"/></>,
};

export const ParagraphIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
